import { experienceData } from '../../data/experience.ts';
import { personalData } from '../../data/personal.ts';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { Badge } from '../common/Badge.tsx';

export function Experience() {
  const { education } = personalData;

  return (
    <section
      id="experience"
      style={{
        paddingTop: 'clamp(4rem, 7vw, 6.5rem)',
        paddingBottom: 'clamp(4rem, 7vw, 6.5rem)',
        borderBottom: '1px solid var(--border-default)',
      }}
    >
      <div className="container">
        <SectionHeading
          kicker="03. Professional History"
          title="Engineering Experience & Roles"
          description="Chronological record of production engineering contributions, multi-tenant SaaS architectures, and full-stack implementations."
        />

        {/* Work Experience Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experienceData.map((item, idx) => (
            <div
              key={item.id}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-sm)',
                padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                transition: 'border-color 150ms ease',
              }}
            >
              {/* Header: Role & Metadata */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      flexWrap: 'wrap',
                      marginBottom: '0.25rem',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.45rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {item.role}
                    </h3>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1rem',
                        color: 'var(--accent-primary)',
                        fontWeight: 600,
                      }}
                    >
                      @ {item.company}
                    </span>
                  </div>

                  <span
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      display: 'block',
                    }}
                  >
                    {item.location} · {item.type}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: idx === 0 ? 'var(--accent-primary)' : 'var(--text-secondary)',
                      backgroundColor: idx === 0 ? 'var(--accent-light)' : 'var(--bg-surface-subtle)',
                      border: idx === 0 ? '1px solid var(--accent-border)' : '1px solid var(--border-subtle)',
                      padding: '0.35rem 0.75rem',
                      borderRadius: 'var(--radius-xs)',
                    }}
                  >
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Role Summary */}
              <p
                style={{
                  fontSize: '0.975rem',
                  lineHeight: 1.65,
                  color: 'var(--text-secondary)',
                  marginBottom: '1.25rem',
                }}
              >
                {item.description}
              </p>

              {/* Technical Contributions */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--text-muted)',
                    display: 'block',
                    marginBottom: '0.65rem',
                  }}
                >
                  Key Engineering Contributions
                </span>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                  }}
                >
                  {item.contributions.map((c, cIdx) => (
                    <li
                      key={cIdx}
                      style={{
                        fontSize: '0.925rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.55,
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                      }}
                    >
                      <span
                        style={{
                          color: 'var(--accent-primary)',
                          fontWeight: 700,
                          marginTop: '0.1rem',
                        }}
                      >
                        –
                      </span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    marginRight: '0.35rem',
                  }}
                >
                  Technologies:
                </span>
                {item.technologies.map((tech) => (
                  <Badge key={tech} variant="tech">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div style={{ marginTop: '3.5rem' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--accent-primary)',
                fontWeight: 600,
                display: 'block',
                marginBottom: '0.25rem',
              }}
            >
              // ACADEMIC FOUNDATION
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.65rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              Education
            </h3>
          </div>

          <div
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-sm)',
              padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '1rem',
                marginBottom: '1rem',
              }}
            >
              <div>
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.35rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem',
                  }}
                >
                  {education.degree} in {education.field}
                </h4>
                <span
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--accent-primary)',
                    fontWeight: 600,
                  }}
                >
                  {education.institution} · {education.location}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {education.grade && (
                  <Badge variant="category">{education.grade}</Badge>
                )}
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    backgroundColor: 'var(--bg-surface-subtle)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-xs)',
                  }}
                >
                  {education.period}
                </span>
              </div>
            </div>

            {education.coursework && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    marginRight: '0.35rem',
                  }}
                >
                  Core Coursework:
                </span>
                {education.coursework.map((course) => (
                  <Badge key={course} variant="tech">
                    {course}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
