import { useState } from 'react';
import type { Project } from '../../types/index.ts';
import { Link } from '../../router/Link.tsx';
import { Badge } from '../common/Badge.tsx';
import { ArrowRightIcon } from '../common/Icons.tsx';
import { ProjectPreviewGraphic } from './ProjectPreviewGraphic.tsx';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: isHovered ? '1px solid var(--accent-primary)' : '1px solid var(--border-default)',
        borderRadius: 'var(--radius-sm)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease',
        transform: isHovered ? 'translateY(-3px)' : 'none',
        boxShadow: isHovered ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
        position: 'relative',
      }}
    >
      {/* Mini Browser Window Frame Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.55rem 0.85rem',
          backgroundColor: 'var(--bg-surface-elevated)',
          borderBottom: '1px solid var(--border-subtle)',
          fontSize: '0.6875rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-muted)',
          transition: 'background-color 200ms ease, border-color 200ms ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF5F56', opacity: 0.85, display: 'inline-block' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FFBD2E', opacity: 0.85, display: 'inline-block' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#27C93F', opacity: 0.85, display: 'inline-block' }} />
        </div>
        <div
          style={{
            backgroundColor: 'var(--bg-main)',
            padding: '0.12rem 0.65rem',
            borderRadius: 'var(--radius-xs)',
            border: '1px solid var(--border-subtle)',
            fontSize: '0.625rem',
            letterSpacing: '0.04em',
            color: 'var(--text-muted)',
          }}
        >
          sys://{project.slug}
        </div>
        <div style={{ width: '32px' }} />
      </div>

      {/* Visual Architectural Preview Graphic */}
      <ProjectPreviewGraphic
        slug={project.slug}
        category={project.category}
        title={project.title}
        previewImage={project.previewImage}
      />

      {/* Card Content Container */}
      <div
        style={{
          padding: '1.75rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        {/* Header: Category & Year */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '0.85rem',
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
            {project.year}
          </span>
        </div>

        {/* Project Title */}
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.45rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            lineHeight: 1.25,
            marginBottom: '0.5rem',
          }}
        >
          <Link
            to={`/projects/${project.slug}`}
            style={{
              color: isHovered ? 'var(--accent-primary)' : 'var(--text-primary)',
              textDecoration: 'none',
              transition: 'color 150ms ease',
            }}
          >
            {project.title}
          </Link>
        </h3>

        {/* Tagline / Short Description */}
        <p
          style={{
            fontSize: '0.925rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '1.25rem',
            flexGrow: 1,
          }}
        >
          {project.tagline}
        </p>

        {/* Key Metrics (Clean inline, no chunky box) */}
        {project.metrics && project.metrics.length > 0 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
              fontSize: '0.8125rem',
              color: 'var(--text-secondary)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                textTransform: 'uppercase',
                color: 'var(--accent-primary)',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              METRIC:
            </span>
            <span>
              {project.metrics[0].label} —{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                {project.metrics[0].value}
              </strong>
            </span>
          </div>
        )}

        {/* Technologies List (Clean inline monospace, no plastic pill boxes) */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            marginBottom: '1.25rem',
            lineHeight: 1.5,
          }}
        >
          {project.technologies.slice(0, 6).join(' · ')}
        </div>

        {/* Action Link: Read Case Study */}
        <div
          style={{
            marginTop: 'auto',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <Link
            to={`/projects/${project.slug}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: isHovered ? 'var(--accent-hover)' : 'var(--accent-primary)',
              textDecoration: 'none',
              transition: 'gap 150ms ease, color 150ms ease',
            }}
          >
            <span>Read Engineering Case Study</span>
            <span
              style={{
                transform: isHovered ? 'translateX(4px)' : 'none',
                transition: 'transform 150ms ease',
                display: 'inline-flex',
              }}
            >
              <ArrowRightIcon width="14" height="14" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
