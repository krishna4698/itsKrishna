import type { Project } from '../../types/index.ts';

interface ProjectOverviewProps {
  project: Project;
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {/* Overview & Why Built */}
      <section>
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
          // 01. EXECUTIVE SUMMARY
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
          Project Overview
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem',
          }}
        >
          {project.overview}
        </p>

        {/* Why Built Box */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            backgroundColor: 'var(--bg-surface)',
            borderLeft: '3px solid var(--accent-primary)',
            borderTop: '1px solid var(--border-subtle)',
            borderRight: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--accent-primary)',
              fontWeight: 600,
              display: 'block',
              marginBottom: '0.35rem',
            }}
          >
            Engineering Motivation & Objective
          </span>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
            {project.whyBuilt}
          </p>
        </div>
      </section>

      {/* Problem Statement */}
      <section>
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
          // 02. PROBLEM DEFINITION
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
          Problem Statement
        </h2>
        <div
          style={{
            padding: '1.5rem',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-sm)',
          }}
        >
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
            }}
          >
            {project.problemStatement}
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section>
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
          // 03. SYSTEM CAPABILITIES
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.85rem',
            fontWeight: 500,
            marginBottom: '1.25rem',
            color: 'var(--text-primary)',
          }}
        >
          Key Architectural Features
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {project.keyFeatures.map((feat, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-sm)',
                padding: '1.25rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--accent-primary)',
                    fontWeight: 600,
                  }}
                >
                  0{idx + 1}.
                </span>
                <h4
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  {feat.title}
                </h4>
              </div>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
