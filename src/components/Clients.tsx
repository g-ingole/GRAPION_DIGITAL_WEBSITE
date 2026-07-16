import React from "react";

const clients = [
  { name: "Arogyam Superspeciality Hospital", logo: "/logos/arogyam.jpeg" },
  { name: "CadDesk AutoCad Institute, Manewada", logo: "/logos/caddesk.png" },
  { name: "FARA CHARM MAKEUP STUDIO AND ACADEMY", logo: "/logos/fara-logo.png" },
  { name: "KlaraSilk Cosmetics", logo: "/logos/klarasilk.png" },
  { name: "Oasis Celebrations", logo: "/logos/oasislogo.png" },
  { name: "Shree Swami Dham Builders And Developers", logo: "/logos/shree_swami_dham_logo_hd.png" },
  { name: "S-TECH Academy", logo: "/logos/stech.png" },
  { name: "ME Photography", logo: "/logos/me.jpeg" },
    { name: "Dr. Bokde Medcare", logo: "/logos/bokde-medcare.jpeg" },
  { name: "Kaavya Unisex Academy", logo: "/logos/ks.png" },

];

function ClientLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="client-card">
      <img src={logo} alt={name} className="client-img" />
      <span className="client-name">{name}</span>
    </div>
  );
}

export default function Clients() {
  const looped = [...clients, ...clients];

  return (
    <section id="clients" className="clients-section">

      {/* Heading */}
      <div className="clients-header">
        <p className="tag">Trusted By</p>
        <h2>Brands We've Worked With</h2>
        <p>Trusted by businesses across Nagpur and beyond</p>
      </div>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-track">
          {looped.map((c, i) => (
            <ClientLogo key={i} name={c.name} logo={c.logo} />
          ))}
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .clients-section {
          padding: 6rem 0;
          background: #0d0d0d;
          overflow: hidden;
          color: white;
          scroll-margin-top: 80px;
        }

        .clients-header {
          text-align: center;
          margin-bottom: 3rem;
          padding: 0 1.5rem;
        }

        .tag {
          color: #1D70EF;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .clients-header h2 {
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          margin: 0.5rem 0;
          font-weight: 800;
        }

        .clients-header p {
          color: #1D70EF;
          font-size: 0.95rem;
        }

        /* MARQUEE */
        .marquee {
          overflow: hidden;
          position: relative;
        }

        .marquee::before,
        .marquee::after {
          content: "";
          position: absolute;
          top: 0;
          width: 120px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .marquee::before {
          left: 0;
          background: linear-gradient(90deg, #0d0d0d, transparent);
        }

        .marquee::after {
          right: 0;
          background: linear-gradient(270deg, #0d0d0d, transparent);
        }

        .marquee-track {
  display: flex;
  gap: 1.5rem;
  width: max-content;
  animation: scroll 25s linear infinite;
}

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* CARD */
      .client-card {
  width: 180px;
  height: 180px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  padding: 1.2rem;

  background: #111;
  border: 1px solid #1E1E2A;
  border-radius: 18px;

  flex-shrink: 0;

  text-align: center;

  transition: all 0.3s ease;
}
.client-card:hover {
  transform: translateY(-6px);
  border-color: #1D70EF;
  background: #151515;
  box-shadow:
    0 12px 30px rgba(29,112,239,0.18);
}

       .client-img {
  width: 80px;
  height: 80px;
  object-fit: contain;

  background: #0d0d0d;
  border-radius: 12px;
  padding: 8px;
}

.client-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #F0F0F0;

  line-height: 1.4;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
      `}</style>

    </section>
  );
}
