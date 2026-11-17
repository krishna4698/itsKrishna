import type { Project } from '../../types/index.ts';

interface ProjectDecisionsAndChallengesProps {
  project: Project;
}

export function ProjectDecisionsAndChallenges({ project }: ProjectDecisionsAndChallengesProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', marginTop: '3.5rem' }}>
      {/* Technical Decisions */}
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
          // 06. ARCHITECTURAL TRADE-OFFS
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
          Key Technical Decisions
        </h2>
        <p
          style={{
            fontSize: '0.975rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '1.5rem',
          }}
        >
          Engineering is about evaluating trade-offs. Here is why specific technical choices were made over standard alternatives.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {project.technicalDecisions.map((dec, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-sm)',
                padding: '1.5rem',
              }}
            >
              <h4
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.85rem',
                }}
              >
                {dec.decision}
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--accent-primary)',
                      display: 'block',
                      marginBottom: '0.2rem',
                      fontWeight: 600,
                    }}
                  >
                    Engineering Rationale
                  </span>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {dec.rationale}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--text-muted)',
                      display: 'block',
                      marginBottom: '0.2rem',
                    }}
                  >
                    Alternatives Evaluated
                  </span>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    {dec.alternativesConsidered}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges & Solutions */}
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
          // 07. POST-MORTEM & RESOLUTION
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
          Engineering Challenges & Solutions
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {project.challenges.map((c, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-sm)',
                padding: '1.5rem',
              }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#B23A22',
                    display: 'block',
                    marginBottom: '0.25rem',
                    fontWeight: 600,
                  }}
                >
                  The Challenge
                </span>
                <p style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.55 }}>
                  {c.challenge}
                </p>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--accent-primary)',
                    display: 'block',
                    marginBottom: '0.25rem',
                    fontWeight: 600,
                  }}
                >
                  Engineered Solution
                </span>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {c.solution}
                </p>
              </div>

              <div
                style={{
                  padding: '0.75rem 1rem',
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
                    letterSpacing: '0.06em',
                    color: '#2D8A4E',
                    display: 'block',
                    marginBottom: '0.2rem',
                    fontWeight: 600,
                  }}
                >
                  Measurable Outcome
                </span>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                  {c.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
