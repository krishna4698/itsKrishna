import type { Project } from '../../types/index.ts';
import { ArchitectureDiagram } from '../common/ArchitectureDiagram.tsx';
import { ProjectPreviewGraphic } from './ProjectPreviewGraphic.tsx';

interface ProjectArchitectureSectionProps {
  project: Project;
}

export function ProjectArchitectureSection({ project }: ProjectArchitectureSectionProps) {
  return (
    <section style={{ marginTop: '3.5rem' }}>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--accent-primary)',
          fontWeight: 600,
          display: 'block',
          marginBottom: '0.5rem',
        }}
      >
        // 05. SYSTEM DESIGN & FLOW
      </span>
      <h2
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.85rem',
          fontWeight: 500,
          marginBottom: '1rem',
          color: 'var(--text-primary)',
        }}
      >
        System Architecture & Request Lifecycle
      </h2>

      {/* Visual Architectural Schematic Card */}
      <div
        style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-sm)',
          overflow: 'hidden',
          marginBottom: '1.5rem',
        }}
      >
        <div
          style={{
            padding: '0.75rem 1.25rem',
            borderBottom: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-surface-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
            }}
          >
            Schematic: End-to-End System Flow
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--accent-primary)',
            }}
          >
            {project.category}
          </span>
        </div>
        <ProjectPreviewGraphic
          slug={project.slug}
          category={project.category}
          title={project.title}
          previewImage={project.previewImage}
        />
      </div>

      {/* Structured Architecture Breakdown */}
      <ArchitectureDiagram architecture={project.architecture} />
    </section>
  );
}
