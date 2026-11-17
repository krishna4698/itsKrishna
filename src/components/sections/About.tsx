import { personalData } from '../../data/personal.ts';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { TerminalIcon, ShieldCheckIcon, LayersIcon } from '../common/Icons.tsx';

export function About() {
  const principles = [
    {
      title: 'Simplicity Over Unearned Complexity',
      description:
        'I avoid speculative abstractions and over-engineering. Straightforward code that is easy to read, debug, and delete is superior to clever, unmaintainable micro-frameworks.',
      icon: TerminalIcon,
    },
    {
      title: 'Observable by Default',
      description:
        'A backend system without distributed traces, health probes, and structured metrics is a black box waiting to fail. I design observability directly into service boundaries.',
      icon: LayersIcon,
    },
    {
      title: 'Type Safety as Living Contracts',
      description:
        'Leveraging strict compile-time types across client-server boundaries catches bugs early and serves as authoritative documentation that never goes stale.',
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
      }}
    >
      <div className="container">
        <SectionHeading
          kicker="01. About & Journey"
          title="Engineering Background & Craft"
          description="A look at how I think about software architecture, my daily technical focus, and how I approach building reliable software systems."
        />

        {/* Editorial Layout: Narrative & Explorations */}
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
                  lineHeight: 1.75,
                  color: 'var(--text-secondary)',
                }}
              >
                {paragraph}
              </p>
            ))}

            {/* Pull Quote / Editorial Highlight */}
            <div
              style={{
                marginTop: '1rem',
                padding: '1.5rem 1.75rem',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                  lineHeight: 1.6,
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                “The goal is not to write the cleverest code; the goal is to build reliable, maintainable systems that outlive their initial requirements.”
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                — Engineering Philosophy
              </span>
            </div>
          </div>

          {/* Sidebar / Sidebar Dives Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Currently Learning / Exploring */}
            <div
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-sm)',
                padding: '1.75rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-primary)',
                    display: 'inline-block',
                  }}
                />
                <h3
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8125rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--text-primary)',
                  }}
                >
                  Active Explorations
                </h3>
              </div>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  marginBottom: '1.25rem',
                }}
              >
                Topics, paradigms, and system components I am actively reading, benchmarking, and prototyping:
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                }}
              >
                {personalData.currentLearning.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--accent-primary)',
                        marginTop: '0.15rem',
                      }}
                    >
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engineering Principles */}
            <div
              style={{
                backgroundColor: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '1.75rem',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--text-primary)',
                  marginBottom: '1.25rem',
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
                          width: '28px',
                          height: '28px',
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
                        <Icon width="14" height="14" />
                      </div>
                      <div>
                        <h4
                          style={{
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            marginBottom: '0.25rem',
                          }}
                        >
                          {p.title}
                        </h4>
                        <p
                          style={{
                            fontSize: '0.825rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.5,
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

      <style>{`
        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
