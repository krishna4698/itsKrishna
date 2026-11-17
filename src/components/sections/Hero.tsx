import { personalData } from '../../data/personal.ts';
import { ArrowRightIcon, GithubIcon, LinkedinIcon, MailIcon } from '../common/Icons.tsx';
import { Badge } from '../common/Badge.tsx';

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        paddingTop: 'clamp(3rem, 6vw, 6rem)',
        paddingBottom: 'clamp(3.5rem, 7vw, 6.5rem)',
        borderBottom: '1px solid var(--border-default)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Main 2-Column Hero Grid matching reference */}
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.4fr) minmax(280px, 1fr)',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Editorial Introduction Content */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Introductory Label */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--accent-primary)',
                fontWeight: 600,
                marginBottom: '1.25rem',
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
              <span>{personalData.roleLabel}</span>
            </div>

            {/* Name */}
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)',
                fontWeight: 500,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
              }}
            >
              {personalData.name}
            </h1>

            {/* Concise Introduction */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.6vw, 1.2rem)',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
                maxWidth: '620px',
              }}
            >
              {personalData.shortBio}
            </p>

            {/* Engineering Problems Statement */}
            <div
              style={{
                padding: '1.15rem 1.35rem',
                backgroundColor: 'var(--bg-surface)',
                borderLeft: '3px solid var(--accent-primary)',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                borderTop: '1px solid var(--border-subtle)',
                borderRight: '1px solid var(--border-subtle)',
                borderBottom: '1px solid var(--border-subtle)',
                marginBottom: '1.75rem',
                maxWidth: '620px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--accent-primary)',
                  display: 'block',
                  marginBottom: '0.35rem',
                  fontWeight: 600,
                }}
              >
                Engineering Focus & Problem Space
              </span>
              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: 'var(--text-primary)',
                  fontStyle: 'normal',
                }}
              >
                {personalData.engineeringStatement}
              </p>
            </div>

            {/* Technical Interests */}
            <div style={{ marginBottom: '2.25rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  display: 'block',
                  marginBottom: '0.65rem',
                }}
              >
                Technical Interests
              </span>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                {personalData.technicalInterests.map((interest) => (
                  <Badge key={interest} variant="tech">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons & Social Links */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <a
                href="#projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.4rem',
                  backgroundColor: 'var(--accent-primary)',
                  color: '#FFFFFF',
                  borderRadius: 'var(--radius-xs)',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  transition: 'background-color 150ms ease, transform 150ms ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-primary)')}
              >
                <span>View Engineering Projects</span>
                <ArrowRightIcon width="16" height="16" />
              </a>

              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.15rem',
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-xs)',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                }}
              >
                <GithubIcon width="16" height="16" />
                <span>GitHub</span>
              </a>

              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.15rem',
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-xs)',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                }}
              >
                <LinkedinIcon width="16" height="16" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalData.email}`}
                aria-label="Email Me"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.15rem',
                  backgroundColor: 'transparent',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-xs)',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                }}
              >
                <MailIcon width="16" height="16" />
                <span>Contact</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Picture & Developer Card Container */}
          <div
            className="hero-profile-container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '380px',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem 1.75rem',
                boxShadow: '0 4px 20px -2px rgba(32, 33, 31, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              {/* Profile Image Frame (Circular / Subtly Rounded per specification) */}
              <div
                style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  border: '3px solid var(--border-subtle)',
                  padding: '5px',
                  backgroundColor: 'var(--bg-main)',
                  marginBottom: '1.5rem',
                  position: 'relative',
                }}
              >
                {/* SVG Geometric Monogram / Editorial Portrait Placeholder or Real Photo */}
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  {personalData.profileImage ? (
                    <img
                      src={personalData.profileImage}
                      alt={personalData.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <svg
                      viewBox="0 0 160 160"
                      width="100%"
                      height="100%"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Developer avatar placeholder"
                    >
                      <rect width="160" height="160" fill="#EEF3F0" />
                      <circle cx="80" cy="62" r="32" fill="#234234" opacity="0.85" />
                      <ellipse cx="80" cy="138" rx="54" ry="42" fill="#234234" opacity="0.85" />
                      {/* Editorial monogram overlay */}
                      <text
                        x="80"
                        y="70"
                        fontFamily="Newsreader, Georgia, serif"
                        fontSize="28"
                        fontWeight="600"
                        fill="#FFFFFF"
                        textAnchor="middle"
                      >
                        KJ
                      </text>
                    </svg>
                  )}
                </div>

                {/* Status Dot on avatar border */}
                <div
                  title="Available for engineering opportunities"
                  style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '12px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: '#2D8A4E',
                    border: '3px solid var(--bg-surface)',
                  }}
                />
              </div>

              {/* Developer Details & Meta */}
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem',
                }}
              >
                {personalData.name}
              </h3>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.25rem',
                }}
              >
                Full Stack Developer · Backend & Distributed Systems
              </p>

              {/* Status Pill */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.775rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--bg-surface-subtle)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '1.25rem',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#2D8A4E',
                    display: 'inline-block',
                  }}
                />
                <span>Open for roles & contracts</span>
              </div>

              {/* Subtle Specification Grid */}
              <div
                style={{
                  width: '100%',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '1rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                  textAlign: 'left',
                }}
              >
                <div>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                    }}
                  >
                    Location
                  </span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                    India
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                    }}
                  >
                    Education
                  </span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                    B.Tech CSE (PTU)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .hero-profile-container {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
