import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 1.5rem',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease',
        background: scrolled ? 'rgba(11,11,11,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid #1E1E2A' : '1px solid transparent',
      }}
    >
      <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
        <img src="/logo1.png" alt="Grapion Digital" style={{ height: '40px', width: 'auto' }} />
      </a>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
        ))}
      </div>

      <a href="tel:+919822952807" className="btn-blue hidden-mobile" style={{ padding: '0.55rem 1.4rem', fontSize: '0.85rem' }}>
        Get Free Consultation
      </a>

      <button
        onClick={() => setOpen(!open)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#F0F0F0', display: 'none' }}
        className="show-mobile"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div style={{
          position: 'absolute',
          top: '68px',
          left: 0,
          right: 0,
          background: 'rgba(11,11,11,0.98)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid #1E1E2A',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)} style={{ fontSize: '1rem' }}>
              {l.label}
            </a>
          ))}
          <a href="tel:+919822952807" className="btn-blue" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
            Get Free Consultation
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
