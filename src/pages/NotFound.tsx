import { useEffect } from 'react';
import { Link } from '../router/Link.tsx';
import { ArrowLeftIcon } from '../components/common/Icons.tsx';
import { personalData } from '../data/personal.ts';

export function NotFound() {
  useEffect(() => {
    document.title = `404 — Page Not Found | ${personalData.name}`;
  }, []);

  return (
    <main style={{ padding: '8rem 0', minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            color: 'var(--accent-primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: 600,
            display: 'block',
            marginBottom: '1rem',
          }}
        >
          // ERROR 404
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            color: 'var(--text-primary)',
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}
        >
          Resource Not Found
        </h1>
        <p
          style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            marginBottom: '2.5rem',
          }}
        >
          The route you navigated to does not exist or has been relocated. You can return to the portfolio homepage or explore engineering case studies.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.4rem',
              backgroundColor: 'var(--accent-primary)',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-xs)',
              fontSize: '0.9rem',
              fontWeight: 500,
            }}
          >
            <ArrowLeftIcon width="16" height="16" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.4rem',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-xs)',
              fontSize: '0.9rem',
              fontWeight: 500,
            }}
          >
            <span>View All Projects</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
