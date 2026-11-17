import { experienceData } from '../../data/experience.ts';
import { personalData } from '../../data/personal.ts';
import { SectionHeading } from '../common/SectionHeading.tsx';

export function Experience() {
  const { education } = personalData;

  return (
    <section
      id="experience"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        paddingTop: 'clamp(4rem, 7vw, 6.5rem)',
        paddingBottom: 'clamp(4rem, 7vw, 6.5rem)',
        borderBottom: '1px solid var(--border-default)',
        transition: 'background-color 200ms ease, border-color 200ms ease',
      }}
    >
      <div className="container">
        <SectionHeading
          kicker="Professional History"
          title="Engineering Experience & Roles"
          description="Chronological record of production engineering contributions, multi-tenant SaaS architectures, and full-stack implementations."
        />

        {/* Unboxed Editorial Experience Ledger */}
        <div
          style={{
            maxWidth: '920px',
            borderTop: '1px solid var(--border-default)',
          }}
        >
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="experience-ledger-row"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(180px, 220px) 1fr',
                gap: '2rem',
                padding: '2.5rem 0',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              {/* Left Column: Period & Location (Resume Metadata) */}
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--accent-primary)',
                    display: 'block',
                    marginBottom: '0.25rem',
                  }}
                >
                  {item.period}
                </span>
                <span
                  style={{
                    fontSize: '0.825rem',
                    color: 'var(--text-muted)',
                    display: 'block',
                  }}
                >
                  {item.location} · {item.type}
                </span>
              </div>

              {/* Right Column: Role, Company & Contributions */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                    marginBottom: '0.5rem',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.45rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      margin: 0,
                    }}
                  >
                    {item.role}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.05rem',
                      color: 'var(--text-secondary)',
                      fontWeight: 500,
                    }}
                  >
                    @ {item.company}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.65,
                    color: 'var(--text-secondary)',
                    marginBottom: '1rem',
                  }}
                >
                  {item.description}
                </p>

                {/* Key Contributions */}
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.55rem',
                    marginBottom: '1.25rem',
                    padding: 0,
                  }}
                >
                  {item.contributions.map((c, cIdx) => (
                    <li
                      key={cIdx}
                      style={{
                        fontSize: '0.925rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                      }}
                    >
                      <span
                        style={{
                          color: 'var(--accent-primary)',
                          fontWeight: 700,
                          lineHeight: 1.4,
                        }}
                      >
                        –
                      </span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies (Clean Inline Spec, No Badges) */}
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                  }}
                >
                  <strong style={{ color: 'var(--text-primary)', fontWeight: 600, marginRight: '0.35rem' }}>
                    Technologies:
                  </strong>
                  <span>{item.technologies.join(' · ')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section (Unboxed) */}
        <div style={{ maxWidth: '920px', marginTop: '4rem' }}>
          <div
            style={{
              paddingBottom: '0.75rem',
              borderBottom: '1px solid var(--border-default)',
              marginBottom: '0',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--accent-primary)',
                fontWeight: 600,
                display: 'block',
                marginBottom: '0.25rem',
              }}
            >
              ACADEMIC FOUNDATION
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                margin: 0,
              }}
            >
              Education
            </h3>
          </div>

          <div
            className="experience-ledger-row"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(180px, 220px) 1fr',
              gap: '2rem',
              padding: '2rem 0',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--accent-primary)',
                  display: 'block',
                  marginBottom: '0.25rem',
                }}
              >
                {education.period}
              </span>
              <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                {education.location}
              </span>
            </div>

            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem',
                }}
              >
                {education.degree} in {education.field}
              </h4>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '0.75rem',
                }}
              >
                {education.institution} · <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>CGPA {education.grade}</span>
              </p>

              {education.coursework && (
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--text-primary)', fontWeight: 600, marginRight: '0.35rem' }}>
                    Core Coursework:
                  </strong>
                  <span>{education.coursework.join(', ')}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Stacking */}
      <style>{`
        @media (max-width: 640px) {
          .experience-ledger-row {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
            padding: 1.75rem 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
