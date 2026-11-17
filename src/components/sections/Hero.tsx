import { personalData } from '../../data/personal.ts';
import { ArrowRightIcon, GithubIcon, LinkedinIcon, MailIcon } from '../common/Icons.tsx';

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
            {/* <div style={{ marginBottom: '2.25rem' }}>
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
            </div> */}

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
                  color: 'var(--accent-contrast)',
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

          {/* Right Column: Profile Picture & Editorial Presence (Unboxed) */}
          <div
            className="hero-profile-container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            {/* Profile Image Frame (Clean, Floating, Subtle Hairline Ring) */}
            <div
              style={{
                width: '210px',
                height: '210px',
                borderRadius: '50%',
                border: '2px solid var(--border-default)',
                padding: '6px',
                backgroundColor: 'transparent',
                marginBottom: '1.25rem',
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
                    <rect width="160" height="160" fill="var(--bg-secondary)" />
                    <circle cx="80" cy="62" r="32" fill="var(--accent-primary)" opacity="0.85" />
                    <ellipse cx="80" cy="138" rx="54" ry="42" fill="var(--accent-primary)" opacity="0.85" />
                    {/* Editorial monogram overlay */}
                    <text
                      x="80"
                      y="70"
                      fontFamily="var(--font-serif)"
                      fontSize="28"
                      fontWeight="600"
                      fill="var(--accent-contrast)"
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
                  bottom: '10px',
                  right: '14px',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: '#2D8A4E',
                  border: '3px solid var(--bg-main)',
                }}
              />
            </div>

            {/* Developer Details & Meta */}
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.45rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '0.2rem',
              }}
            >
              {personalData.name}
            </h3>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                marginBottom: '0.85rem',
              }}
            >
              Full Stack Developer · Backend Systems
            </p>

            {/* Status Indicator */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-secondary)',
                marginBottom: '0.75rem',
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
              <span>Available for engineering roles</span>
            </div>

            {/* Quick Meta (Unboxed Typography) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontSize: '0.8125rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span>Punjab, India</span>
              <span>·</span>
              <span>B.Tech CSE (PTU)</span>
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
