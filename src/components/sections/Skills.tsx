import { skillGroups } from '../../data/skills.ts';
import { SectionHeading } from '../common/SectionHeading.tsx';

export function Skills() {
  return (
    <section
      id="skills"
      style={{
        paddingTop: 'clamp(4rem, 7vw, 6.5rem)',
        paddingBottom: 'clamp(4rem, 7vw, 6.5rem)',
        borderBottom: '1px solid var(--border-default)',
        backgroundColor: 'var(--bg-surface-elevated)',
      }}
    >
      <div className="container">
        <SectionHeading
          kicker="02. Technical Arsenal"
          title="Skills, Languages & Technologies"
          description="Technologies and tooling I use across system architecture, backend engineering, and interface development."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-sm)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Category Header */}
              <div style={{ marginBottom: '1.25rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--accent-primary)',
                    display: 'block',
                    marginBottom: '0.25rem',
                  }}
                >
                  CATEGORY 0{idx + 1}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.35rem',
                  }}
                >
                  {group.category}
                </h3>
                <p
                  style={{
                    fontSize: '0.825rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                  }}
                >
                  {group.description}
                </p>
              </div>

              {/* Skills List */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  marginTop: 'auto',
                }}
              >
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                      padding: '0.45rem 0.65rem',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: skill.primary ? 'var(--bg-main)' : 'transparent',
                      border: skill.primary ? '1px solid var(--border-subtle)' : '1px solid transparent',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {skill.primary && (
                        <span
                          style={{
                            width: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--accent-primary)',
                            display: 'inline-block',
                          }}
                        />
                      )}
                      <span
                        style={{
                          fontSize: '0.875rem',
                          fontWeight: skill.primary ? 600 : 500,
                          color: 'var(--text-primary)',
                        }}
                      >
                        {skill.name}
                      </span>
                    </div>

                    {skill.note && (
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: 'var(--text-muted)',
                          textAlign: 'right',
                        }}
                      >
                        {skill.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
