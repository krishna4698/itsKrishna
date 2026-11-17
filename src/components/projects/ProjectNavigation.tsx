import type { Project } from '../../types/index.ts';
import { Link } from '../../router/Link.tsx';
import { ArrowLeftIcon, ArrowRightIcon } from '../common/Icons.tsx';

interface ProjectNavigationProps {
  prevProject?: Project;
  nextProject?: Project;
}

export function ProjectNavigation({ prevProject, nextProject }: ProjectNavigationProps) {
  return (
    <div
      style={{
        marginTop: '4.5rem',
        paddingTop: '2.5rem',
        borderTop: '1px solid var(--border-default)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem',
        }}
      >
        {/* Previous Project Card */}
        {prevProject ? (
          <Link
            to={`/projects/${prevProject.slug}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '1.25rem 1.5rem',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-sm)',
              textDecoration: 'none',
              transition: 'border-color 150ms ease, transform 150ms ease',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                marginBottom: '0.35rem',
              }}
            >
              <ArrowLeftIcon width="12" height="12" />
              <span>PREVIOUS PROJECT</span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              {prevProject.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {/* Next Project Card */}
        {nextProject && (
          <Link
            to={`/projects/${nextProject.slug}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              textAlign: 'right',
              padding: '1.25rem 1.5rem',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-sm)',
              textDecoration: 'none',
              transition: 'border-color 150ms ease, transform 150ms ease',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                marginBottom: '0.35rem',
              }}
            >
              <span>NEXT PROJECT</span>
              <ArrowRightIcon width="12" height="12" />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              {nextProject.title}
            </span>
          </Link>
        )}
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link
          to="/#projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.65rem 1.25rem',
            backgroundColor: 'var(--bg-main)',
            border: '1px solid var(--border-default)',
            borderRadius: '9999px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8125rem',
            color: 'var(--text-primary)',
          }}
        >
          <span>← Back to all projects overview</span>
        </Link>
      </div>
    </div>
  );
}
