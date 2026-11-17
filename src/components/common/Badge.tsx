import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'tech' | 'category' | 'status' | 'outline' | 'accent';
  className?: string;
  hasDot?: boolean;
}

export function Badge({ children, variant = 'tech', className = '', hasDot = false }: BadgeProps) {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 1,
    padding: '0.35rem 0.65rem',
    borderRadius: '4px',
    whiteSpace: 'nowrap',
    letterSpacing: '0.01em',
    transition: 'all 150ms ease',
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    tech: {
      backgroundColor: 'var(--bg-surface-subtle)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-mono)',
    },
    category: {
      backgroundColor: 'var(--accent-light)',
      color: 'var(--accent-text)',
      border: '1px solid var(--accent-border)',
      fontFamily: 'var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      fontSize: '0.6875rem',
      fontWeight: 600,
      borderRadius: '9999px',
      padding: '0.3rem 0.75rem',
    },
    status: {
      backgroundColor: 'var(--bg-surface)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      fontFamily: 'var(--font-sans)',
      padding: '0.4rem 0.75rem',
      borderRadius: '9999px',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-default)',
      fontFamily: 'var(--font-mono)',
    },
    accent: {
      backgroundColor: 'var(--accent-primary)',
      color: 'var(--accent-contrast)',
      border: '1px solid var(--accent-primary)',
      fontFamily: 'var(--font-sans)',
    },
  };

  return (
    <span style={{ ...baseStyles, ...variantStyles[variant] }} className={className}>
      {hasDot && (
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--status-dot)',
            display: 'inline-block',
          }}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
