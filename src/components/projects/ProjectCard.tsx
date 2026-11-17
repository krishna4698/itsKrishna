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
        transform: isHovered ? 'translateY(-2px)' : 'none',
        boxShadow: isHovered ? '0 8px 24px -4px rgba(35, 66, 52, 0.08)' : 'none',
        position: 'relative',
      }}
    >
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

        {/* Key Metrics Pill (if present) */}
        {project.metrics && project.metrics.length > 0 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.25rem',
              padding: '0.5rem 0.75rem',
              backgroundColor: 'var(--bg-main)',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                textTransform: 'uppercase',
                color: 'var(--accent-primary)',
                fontWeight: 600,
              }}
            >
              METRIC:
            </span>
            <span
              style={{
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
              }}
            >
              {project.metrics[0].label} — {project.metrics[0].value}
            </span>
          </div>
        )}

        {/* Technologies List */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.4rem',
            marginBottom: '1.5rem',
          }}
        >
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="tech">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <Badge variant="tech">+{project.technologies.length - 5}</Badge>
          )}
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
