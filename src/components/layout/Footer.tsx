import { personalData } from '../../data/personal.ts';
import { ArrowLeftIcon, GithubIcon, LinkedinIcon, MailIcon } from '../common/Icons.tsx';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        marginTop: 'auto',
        borderTop: '1px solid var(--border-default)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '4rem 0 3rem 0',
        transition: 'background-color 200ms ease, border-color 200ms ease',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Col 1: Identity & Statement */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.35rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              {personalData.name}
            </span>
            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                maxWidth: '340px',
              }}
            >
              {personalData.tagline}
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                marginTop: '0.5rem',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--status-dot)',
                  display: 'inline-block',
                }}
              />
              {personalData.status}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '1rem',
              }}
            >
              Navigation
            </h4>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                fontSize: '0.9rem',
              }}
            >
              <li>
                <a href="/#projects" style={{ color: 'var(--text-secondary)' }}>
                  Selected Projects
                </a>
              </li>
              <li>
                <a href="/#skills" style={{ color: 'var(--text-secondary)' }}>
                  Skills & Technologies
                </a>
              </li>
              <li>
                <a href="/#experience" style={{ color: 'var(--text-secondary)' }}>
                  Engineering Experience
                </a>
              </li>
              <li>
                <a href="/#contact" style={{ color: 'var(--text-secondary)' }}>
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Channels */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '1rem',
              }}
            >
              Connect
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <GithubIcon width="16" height="16" />
                <span>GitHub</span>
              </a>
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <LinkedinIcon width="16" height="16" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalData.email}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <MailIcon width="16" height="16" />
                <span>{personalData.email}</span>
              </a>
            </div>
          </div>

          {/* Col 4: Top Action & Meta */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <button
              type="button"
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 1rem',
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-xs)',
                color: 'var(--text-primary)',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                transition: 'all 150ms ease',
              }}
            >
              <span style={{ transform: 'rotate(90deg)', display: 'inline-flex' }}>
                <ArrowLeftIcon width="14" height="14" />
              </span>
              <span>Back to top</span>
            </button>
            <p
              style={{
                marginTop: '1.5rem',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                lineHeight: 1.5,
              }}
            >
              {personalData.location}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Colophon & Copyright */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.8125rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {currentYear} {personalData.name}. All rights reserved.
          </div>
          <div>
            Built with React 19 & TypeScript. Designed with an editorial engineering aesthetic.
          </div>
        </div>
      </div>
    </footer>
  );
}
