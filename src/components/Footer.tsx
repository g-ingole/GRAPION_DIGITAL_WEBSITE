import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Linkedin, Twitter } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Digital Marketing',
  'Social Media Handling',
  'Content Creation',
  'Influencer Marketing',
  'Local SEO',
  'Website Creation',
  'Branding Design',
  'Google Business Profile',
];

const socials = [
  { icon: <Instagram size={18} />, href: 'https://www.instagram.com/hellograpiondigital/', label: 'Instagram' },
  { icon: <Facebook size={18} />, href: 'https://www.facebook.com/profile.php?id=61584827608890', label: 'Facebook' },
  { icon: <Youtube size={18} />, href: 'https://www.youtube.com/@GrapionDigital', label: 'YouTube' },
  { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/company/112000920/admin/dashboard/', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer style={{
      background: '#080808',
      borderTop: '1px solid #1E1E2A',
      padding: '5rem 1.5rem 2rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1.4fr',
          gap: '3rem',
          marginBottom: '4rem',
        }} className="footer-grid">
          <div>
            <img src="/logo1.png" alt="Grapion Digital" style={{ height: '44px', width: 'auto', marginBottom: '1.25rem' }} />
            <p style={{ color: '#8A8A9A', lineHeight: 1.8, fontSize: '0.9rem', marginBottom: '1.75rem', maxWidth: '280px' }}>
              Turning businesses into powerful brands through smart digital strategies, strong identity, and consistent online visibility.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '9px',
                    background: '#111111',
                    border: '1px solid #1E1E2A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#8A8A9A',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = '#1D70EF';
                    el.style.color = '#1D70EF';
                    el.style.boxShadow = '0 0 12px rgba(29,112,239,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = '#1E1E2A';
                    el.style.color = '#8A8A9A';
                    el.style.boxShadow = 'none';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#F0F0F0', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} style={{
                    color: '#8A8A9A',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    transition: 'color 0.2s ease',
                  }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#3D8BFF'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#8A8A9A'}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#F0F0F0', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {services.map((s) => (
                <li key={s}>
                  <span style={{ color: '#8A8A9A', fontSize: '0.88rem' }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#F0F0F0', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {[
                { icon: <Phone size={15} />, text: '+91 9822952807', href: 'tel:+919822952807' },
                { icon: <Mail size={15} />, text: 'hellograpiondigital@gmail.com', href: 'mailto:hellograpiondigital@gmail.com' },
                { icon: <MapPin size={15} />, text: 'Nagpur, Maharashtra', href: '#' },
              ].map((c) => (
                <a
                  key={c.text}
                  href={c.href}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    textDecoration: 'none',
                    color: '#8A8A9A',
                    fontSize: '0.87rem',
                    lineHeight: 1.5,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#F0F0F0'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#8A8A9A'}
                >
                  <span style={{ color: '#1D70EF', flexShrink: 0, paddingTop: '1px' }}>{c.icon}</span>
                  {c.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #1E1E2A',
          paddingTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{ color: '#8A8A9A', fontSize: '0.82rem' }}>
            © {new Date().getFullYear()} Grapion Digital. All rights reserved.
          </p>
          <p style={{ color: '#8A8A9A', fontSize: '0.82rem' }}>
            Digital Stories,{' '}
            <span style={{ color: '#F5B731' }}>Real Impact</span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
