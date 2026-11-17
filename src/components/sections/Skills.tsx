import { skillGroups } from '../../data/skills.ts';
import { SectionHeading } from '../common/SectionHeading.tsx';

export function Skills() {
  return (
    <section
      id="skills"
      style={{
        paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
        borderBottom: '1px solid var(--border-default)',
        backgroundColor: 'var(--bg-main)',
        transition: 'background-color 200ms ease, border-color 200ms ease',
      }}
    >
      <div className="container">
        <SectionHeading
          kicker="Technical Arsenal"
          title="Skills, Languages & Technologies"
          description="A direct overview of the languages, frameworks, databases, and infrastructure tools I work with daily."
        />

        {/* Resume-Style Technical Spec Sheet (Clean One-Line Rows, No Boxes) */}
        <div
          style={{
            maxWidth: '920px',
            borderTop: '1px solid var(--border-default)',
          }}
        >
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="skill-spec-row"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(180px, 240px) 1fr',
                gap: '1.5rem',
                alignItems: 'baseline',
                padding: '1.25rem 0',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              {/* Category Label (Resume Style) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-primary)',
                    display: 'inline-block',
                    flexShrink: 0,
                    opacity: 0.8,
                  }}
                />
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em',
                    margin: 0,
                  }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Skills Listed Inline like a Resume */}
              <div
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                }}
              >
                {group.skills.map((skill, sIdx) => (
                  <span key={sIdx} style={{ display: 'inline' }}>
                    <span
                      style={{
                        color: skill.primary ? 'var(--text-primary)' : 'var(--text-secondary)',
                        fontWeight: skill.primary ? 600 : 400,
                      }}
                    >
                      {skill.name}
                    </span>
                    {sIdx < group.skills.length - 1 && (
                      <span
                        style={{
                          color: 'var(--text-muted)',
                          margin: '0 0.5rem',
                          userSelect: 'none',
                        }}
                      >
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Stacking for Mobile */}
      <style>{`
        @media (max-width: 640px) {
          .skill-spec-row {
            grid-template-columns: 1fr !important;
            gap: 0.5rem !important;
            padding: 1rem 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
