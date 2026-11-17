import { useState } from 'react';
import type { Project } from '../../types/index.ts';
import { Link } from '../../router/Link.tsx';
import { Badge } from '../common/Badge.tsx';
import { ArrowLeftIcon, GithubIcon, ExternalLinkIcon, CopyIcon, CheckIcon } from '../common/Icons.tsx';

interface ProjectHeaderProps {
  project: Project;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      style={{
        borderBottom: '1px solid var(--border-default)',
        paddingTop: '3rem',
        paddingBottom: '3rem',
        backgroundColor: 'var(--bg-surface)',
      }}
    >
      <div className="container">
        {/* Navigation Breadcrumb */}
        <div style={{ marginBottom: '2rem' }}>
          <Link
            to="/#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8125rem',
              color: 'var(--text-secondary)',
              padding: '0.4rem 0.75rem',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-main)',
              transition: 'all 150ms ease',
            }}
          >
            <ArrowLeftIcon width="14" height="14" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Category & Metadata Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '1rem',
          }}
        >
          <Badge variant="category">{project.category}</Badge>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
            }}
          >
            ENGINEERING CASE STUDY · {project.year}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
            fontWeight: 500,
            lineHeight: 1.12,
            color: 'var(--text-primary)',
            letterSpacing: '-0.025em',
            marginBottom: '1.25rem',
            maxWidth: '920px',
          }}
        >
          {project.title}
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            maxWidth: '820px',
          }}
        >
          {project.tagline}
        </p>

        {/* Key Metrics Grid (if present) */}
        {project.metrics && project.metrics.length > 0 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              padding: '1.5rem',
              backgroundColor: 'var(--bg-main)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '2rem',
            }}
          >
            {project.metrics.map((m, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--text-muted)',
                  }}
                >
                  {m.label}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}
                >
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* External Links Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.3rem',
                backgroundColor: 'var(--accent-primary)',
                color: 'var(--accent-contrast)',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 500,
              }}
            >
              <GithubIcon width="16" height="16" />
              <span>View Source Code</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.3rem',
                backgroundColor: 'transparent',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-default)',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 500,
              }}
            >
              <span>Live Deployment</span>
              <ExternalLinkIcon width="14" height="14" />
            </a>
          )}

          <button
            type="button"
            onClick={handleCopyLink}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.65rem 1.15rem',
              backgroundColor: 'transparent',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '9999px',
              fontSize: '0.8125rem',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {copied ? <CheckIcon width="14" height="14" /> : <CopyIcon width="14" height="14" />}
            <span>{copied ? 'Link Copied' : 'Share URL'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
