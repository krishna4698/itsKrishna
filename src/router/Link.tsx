import type { AnchorHTMLAttributes, MouseEvent } from 'react';
import { useRouter } from './useRouter.ts';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export function Link({ to, children, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }

    // Allow standard browser behaviors (new tab, download, etc.)
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.altKey ||
      e.shiftKey ||
      rest.target === '_blank' ||
      to.startsWith('http://') ||
      to.startsWith('https://') ||
      to.startsWith('mailto:') ||
      to.startsWith('tel:')
    ) {
      return;
    }

    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
