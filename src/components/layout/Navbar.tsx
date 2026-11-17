import { useState, useEffect } from 'react';
import { Link } from '../../router/Link.tsx';
import { useRouter } from '../../router/useRouter.ts';
import { personalData } from '../../data/personal.ts';
import { MenuIcon, CloseIcon, ArrowRightIcon } from '../common/Icons.tsx';

export function Navbar() {
  const { currentPath, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    navigate(href);
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(247, 246, 242, 0.92)' : 'var(--bg-main)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-default)' : '1px solid transparent',
        transition: 'all 200ms ease',
      }}
    >
      <div
        className="container"
        style={{
          height: 'var(--header-height)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand / Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: 'var(--accent-primary)',
              color: '#F7F6F2',
              fontFamily: 'var(--font-serif)',
              fontSize: '0.925rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-xs)',
              letterSpacing: '0.02em',
            }}
          >
            KJ
          </span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '0.975rem',
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em',
                lineHeight: 1.2,
              }}
            >
              {personalData.name}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Full Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive =
              currentPath === '/' && window.location.hash === link.href.replace('/', '');

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontSize: '0.925rem',
                  fontWeight: 500,
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  position: 'relative',
                  padding: '0.4rem 0',
                }}
              >
                {link.label}
              </a>
            );
          })}

          <a
            href={personalData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.95rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--text-primary)',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-xs)',
              transition: 'all 150ms ease',
            }}
          >
            <span>GitHub</span>
            <ArrowRightIcon width="14" height="14" />
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-nav-toggle"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: 'var(--text-primary)',
          }}
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: 'var(--header-height)',
            backgroundColor: 'var(--bg-main)',
            borderTop: '1px solid var(--border-default)',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            zIndex: 99,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.65rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
              }}
            >
              Direct Connect
            </span>
            <a
              href={`mailto:${personalData.email}`}
              style={{
                fontSize: '1rem',
                color: 'var(--accent-primary)',
                fontWeight: 500,
              }}
            >
              {personalData.email}
            </a>
          </div>
        </div>
      )}

      {/* Media Query Styles for Desktop vs Mobile Nav */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
