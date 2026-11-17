import { personalData } from '../../data/personal.ts';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { TerminalIcon, ShieldCheckIcon, LayersIcon } from '../common/Icons.tsx';

export function About() {
  const principles = [
    {
      title: 'Simplicity Over Unearned Complexity',
      description:
        'I avoid speculative abstractions and over-engineering. Straightforward code that is easy to read, debug, and delete is superior to clever micro-frameworks.',
      icon: TerminalIcon,
    },
    {
      title: 'Observable by Default',
      description:
        'A backend system without health probes, metrics, and structured logs is a black box waiting to fail. I design observability directly into service boundaries.',
      icon: LayersIcon,
    },
    {
      title: 'Type Safety as Living Contracts',
      description:
        'Strict compile-time types across client-server boundaries catch regressions early and serve as documentation that never goes stale.',
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <section
      id="about"
      style={{
        paddingTop: 'clamp(4rem, 7vw, 6.5rem)',
        paddingBottom: 'clamp(4rem, 7vw, 6.5rem)',
        borderBottom: '1px solid var(--border-default)',
        backgroundColor: 'var(--bg-main)',
        transition: 'background-color 200ms ease, border-color 200ms ease',
      }}
    >
      <div className="container">
        <SectionHeading
          kicker="01. About & Craft"
          title="Engineering Background & Philosophy"
          description="A look at how I think about software architecture, my daily technical focus, and how I approach building reliable software systems."
        />

        {/* Editorial Layout: Narrative & Unboxed Sidebar */}
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.4fr) minmax(280px, 1fr)',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
          }}
        >
          {/* Narrative Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {personalData.fullBio.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.78,
                  color: 'var(--text-secondary)',
                }}
              >
                {paragraph}
              </p>
            ))}

            {/* Editorial Pull Quote (Unboxed Classic Typography) */}
            <blockquote
              style={{
                margin: '1rem 0',
                paddingLeft: '1.5rem',
                borderLeft: '3px solid var(--accent-primary)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.35rem',
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                  lineHeight: 1.6,
                  marginBottom: '0.4rem',
                }}
              >
                “The goal is not to write the cleverest code; the goal is to build reliable, maintainable systems that outlive their initial requirements.”
              </p>
              <cite
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  fontStyle: 'normal',
                }}
              >
                — Engineering Philosophy
              </cite>
            </blockquote>
          </div>

          {/* Sidebar Column (Unboxed, Pure Typography) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* Active Explorations */}
            <div style={{ borderTop: '1px solid var(--border-default)', paddingTop: '1.5rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.75rem',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-primary)',
                    display: 'inline-block',
                  }}
                />
                <h3
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--text-primary)',
                    margin: 0,
                  }}
                >
                  Active Explorations
                </h3>
              </div>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.5,
                  marginBottom: '1rem',
                }}
              >
                Paradigms and systems I am actively studying and prototyping:
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  padding: 0,
                }}
              >
                {personalData.currentLearning.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: 'var(--accent-primary)',
                        marginTop: '0.1rem',
                      }}
                    >
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Principles */}
            <div style={{ borderTop: '1px solid var(--border-default)', paddingTop: '1.5rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-primary)',
                  marginBottom: '1.25rem',
                  margin: '0 0 1.25rem 0',
                }}
              >
                Core Principles
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {principles.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div key={idx} style={{ display: 'flex', gap: '0.85rem' }}>
                      <div
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '4px',
                          backgroundColor: 'var(--accent-light)',
                          color: 'var(--accent-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '0.15rem',
                        }}
                      >
                        <Icon width="13" height="13" />
                      </div>
                      <div>
                        <h4
                          style={{
                            fontSize: '0.925rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            marginBottom: '0.2rem',
                          }}
                        >
                          {p.title}
                        </h4>
                        <p
                          style={{
                            fontSize: '0.85rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.55,
                            margin: 0,
                          }}
                        >
                          {p.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
