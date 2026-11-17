import { useState } from 'react';
import { personalData } from '../../data/personal.ts';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { MailIcon, GithubIcon, LinkedinIcon, CopyIcon, CheckIcon, ArrowRightIcon } from '../common/Icons.tsx';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      style={{
        paddingTop: 'clamp(4.5rem, 8vw, 7.5rem)',
        paddingBottom: 'clamp(4.5rem, 8vw, 7.5rem)',
        backgroundColor: 'var(--bg-main)',
        transition: 'background-color 200ms ease',
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <SectionHeading
            kicker="Get In Touch"
            title="Start an Engineering Conversation"
            description="Whether you want to discuss distributed architectures, system performance, collaboration on technical projects, or open engineering roles — my inbox is open."
            align="center"
          />

          {/* Unboxed Editorial Contact Hub */}
          <div
            style={{
              paddingTop: '2.5rem',
              borderTop: '1px solid var(--border-default)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem',
            }}
          >
            {/* Direct Email Address Display */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}
              >
                Direct Email Inquiries
              </span>
              <a
                href={`mailto:${personalData.email}`}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.65rem, 4vw, 2.5rem)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  letterSpacing: '-0.02em',
                  transition: 'color 150ms ease',
                }}
              >
                {personalData.email}
              </a>
            </div>

            {/* Actions: Mailto & Copy */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.85rem',
              }}
            >
              <a
                href={`mailto:${personalData.email}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.6rem',
                  backgroundColor: 'var(--accent-primary)',
                  color: 'var(--accent-contrast)',
                  borderRadius: '9999px',
                  fontWeight: 500,
                  fontSize: '0.925rem',
                  transition: 'background-color 150ms ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-primary)')}
              >
                <MailIcon width="16" height="16" />
                <span>Write Message</span>
                <ArrowRightIcon width="14" height="14" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.4rem',
                  backgroundColor: 'transparent',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-default)',
                  borderRadius: '9999px',
                  fontWeight: 500,
                  fontSize: '0.925rem',
                  cursor: 'pointer',
                  transition: 'all 150ms ease',
                }}
              >
                {copied ? <CheckIcon width="16" height="16" /> : <CopyIcon width="16" height="16" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Address'}</span>
              </button>
            </div>

            {/* Social Channels & Phone Divider */}
            <div
              style={{
                width: '100%',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '2rem',
              }}
            >
              <a
                href={`tel:${personalData.phone}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <span>{personalData.phone}</span>
              </a>

              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <GithubIcon width="15" height="15" />
                <span>github.com/krishna4698</span>
              </a>

              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <LinkedinIcon width="15" height="15" />
                <span>linkedin.com/in/krishna9987</span>
              </a>
            </div>

            {/* Availability Indicator */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
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
              <span>Currently in {personalData.location} · Open to remote & on-site</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
