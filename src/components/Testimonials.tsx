import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
  name: 'Farhad Sheikh',
  role: 'Founder, FARA CHARM MAKEUP STUDIO AND ACADEMY',
  text: 'Grapion Digital is truly the best digital marketing company in Nagpur. They provide excellent services like social media marketing, SEO, and content creation. Their team understands business needs and delivers great results. I have seen a good increase in my online reach. Highly recommended!',
  rating: 5,
  initial: 'F'
},
  {
  name: 'Shilpa Karne',
  role: 'Owner, Kaavya Unisex Salon',
  text: 'Grapion Digital is the best digital marketing company in Nagpur. Great service, creative work, and amazing support. Must try!',
  rating: 5,
  initial: 'S',
},
  {
  name: 'Shree Swami Dham',
  role: 'Founder, Shree Swami Dham Builders and Developers',
  text: 'If you are looking for the best digital marketing company in Nagpur, Grapion Digital is the right choice. Very cooperative team and quality work. Totally satisfied with their service.',
  rating: 5,
  initial: 'S',
},
 {
  name: 'Oasis Celebrations',
  role: 'Co-Founder, Oasis Celebrations, Nagpur',
  text: 'Grapion Digital is the best digital marketing company in Nagpur. Their strategies really helped my business grow online. Very professional team and timely delivery. Highly recommended!',
  rating: 5,
  initial: 'O',
},
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section style={{ padding: '7rem 1.5rem', background: '#0B0B0B' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.8rem', color: '#1D70EF', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Testimonials
          </p>
          <h2 className="section-title centered" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#F0F0F0' }}>
            What Our Clients Say
          </h2>
        </div>

        <div className="reveal" style={{ position: 'relative' }}>
          <div
            key={active}
            className="testimonial-card"
            style={{
              textAlign: 'center',
              animation: 'fadeIn 0.4s ease',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3px', marginBottom: '1.5rem' }}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={18} fill="#F5B731" stroke="none" className="star-gold" />
              ))}
            </div>

            <p style={{ fontSize: '1.08rem', color: '#C0C0CC', lineHeight: 1.8, marginBottom: '2rem', fontStyle: 'italic' }}>
              "{t.text}"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1D70EF, #3D8BFF)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'white',
                flexShrink: 0,
              }}>
                {t.initial}
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 700, color: '#F0F0F0', fontSize: '0.95rem' }}>{t.name}</div>
                <div style={{ color: '#8A8A9A', fontSize: '0.82rem' }}>{t.role}</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '2rem', alignItems: 'center' }}>
            <button
              onClick={prev}
              style={{
                background: '#111111',
                border: '1px solid #1E1E2A',
                borderRadius: '8px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#8A8A9A',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#1D70EF'; (e.currentTarget as HTMLButtonElement).style.color = '#1D70EF'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#1E1E2A'; (e.currentTarget as HTMLButtonElement).style.color = '#8A8A9A'; }}
            >
              <ChevronLeft size={18} />
            </button>

            <div style={{ display: 'flex', gap: '6px' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: i === active ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === active ? '#1D70EF' : '#1E1E2A',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                background: '#111111',
                border: '1px solid #1E1E2A',
                borderRadius: '8px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#8A8A9A',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#1D70EF'; (e.currentTarget as HTMLButtonElement).style.color = '#1D70EF'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#1E1E2A'; (e.currentTarget as HTMLButtonElement).style.color = '#8A8A9A'; }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
