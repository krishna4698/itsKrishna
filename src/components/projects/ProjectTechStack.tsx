import type { Project } from '../../types/index.ts';
import { Badge } from '../common/Badge.tsx';

interface ProjectTechStackProps {
  project: Project;
}

export function ProjectTechStack({ project }: ProjectTechStackProps) {
  return (
    <section style={{ marginTop: '3rem' }}>
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
        TECHNOLOGY STACK
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
        Tools, Frameworks & Infrastructure
      </h2>
      <p
        style={{
          fontSize: '0.975rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          marginBottom: '1.5rem',
        }}
      >
        Carefully chosen technologies to satisfy throughput requirements, low GC latency, and operational simplicity.
      </p>

      <div
        style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-sm)',
          padding: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="tech" className="large-tech-badge">
              <span style={{ fontSize: '0.85rem', padding: '0.1rem 0.2rem' }}>{tech}</span>
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
