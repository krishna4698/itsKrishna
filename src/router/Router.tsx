import { useState, useEffect, useCallback, useMemo, type ReactNode } from 'react';
import { RouterContext, type RouterContextValue } from './RouterContext.ts';

interface RouterProps {
  children: ReactNode;
}

export function Router({ children }: RouterProps) {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  // Helper to extract params from known route patterns
  const extractParams = useCallback((path: string): Record<string, string> => {
    const projectMatch = path.match(/^\/projects\/([^/?#]+)/);
    if (projectMatch && projectMatch[1]) {
      return { slug: projectMatch[1] };
    }
    return {};
  }, []);

  const params = useMemo(() => extractParams(currentPath), [currentPath, extractParams]);

  const navigate = useCallback((to: string, options?: { replace?: boolean; scrollToTop?: boolean }) => {
    if (typeof window === 'undefined') return;

    // Check if target has a hash (e.g. "/#projects" or "#projects")
    const [targetPath, hash] = to.split('#');
    const normalizedTarget = targetPath === '' ? window.location.pathname : targetPath;

    if (options?.replace) {
      window.history.replaceState({}, '', to);
    } else {
      window.history.pushState({}, '', to);
    }

    setCurrentPath(normalizedTarget || '/');

    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else if (options?.scrollToTop !== false) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const newPath = window.location.pathname || '/';
      setCurrentPath(newPath);

      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');
        const elem = document.getElementById(id);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const value: RouterContextValue = {
    currentPath,
    navigate,
    params,
  };

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}
