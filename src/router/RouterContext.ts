import { createContext } from 'react';

export interface RouterContextValue {
  currentPath: string;
  navigate: (to: string, options?: { replace?: boolean; scrollToTop?: boolean }) => void;
  params: Record<string, string>;
}

export const RouterContext = createContext<RouterContextValue | null>(null);
