import type { ReactNode } from 'react';

interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={className}
      style={{
        marginBottom: '2.5rem',
        textAlign: align,
        maxWidth: align === 'center' ? '720px' : '100%',
        marginInline: align === 'center' ? 'auto' : undefined,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--accent-primary)',
          fontWeight: 600,
          marginBottom: '0.65rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          justifyContent: align === 'center' ? 'center' : 'flex-start',
        }}
      >
        <span style={{ opacity: 0.5 }}>//</span>
        <span>{kicker}</span>
      </div>

      <h2
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.85rem, 3.5vw, 2.65rem)',
          fontWeight: 500,
          lineHeight: 1.18,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          marginBottom: description ? '0.85rem' : '0',
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            maxWidth: '680px',
            marginInline: align === 'center' ? 'auto' : undefined,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
