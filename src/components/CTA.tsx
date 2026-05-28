import {
  Phone,
  MessageCircle,
  Calendar,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function CTA() {
  const waLink =
    "https://wa.me/919822952807?text=Hi%20Grapion%20Digital%2C%20I%27m%20interested%20in%20your%20services.";

  return (
    <section
      id="cta"
      style={{
        padding: "7rem 1.5rem",
        background:
          "radial-gradient(circle at top right, rgba(29,112,239,0.08), transparent 35%), #0B0B0B",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BLUR EFFECTS */}
      <div
        style={{
          position: "absolute",
          top: "-140px",
          right: "-120px",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "rgba(29,112,239,0.08)",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          left: "-120px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "rgba(245,183,49,0.06)",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="cta-card reveal">
          {/* TOP BADGE */}
          <div className="cta-badge">
            <Sparkles size={15} />
            Ready To Grow?
          </div>

          {/* HEADING */}
          <h2 className="cta-title">
            Let’s Grow Your Business{" "}
            <span>Together</span>
          </h2>

          {/* SUBTEXT */}
          <p className="cta-desc">
            Whether you're building your brand
            from scratch or scaling your business,
            Grapion Digital helps you attract more
            customers, build trust, and grow
            faster online.
          </p>

          {/* BUTTONS */}
          <div className="cta-buttons">
            <a
              href="tel:+919822952807"
              className="cta-btn primary"
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn whatsapp"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            <a
              href="#contact"
              className="cta-btn outline"
            >
              <Calendar size={18} />
              Book Consultation
              <ArrowRight size={16} />
            </a>
          </div>

          {/* STATS */}
          <div className="cta-stats">
            {[
              {
                value: "Free",
                label: "Initial Consultation",
              },
              {
                value: "Fast",
                label: "Project Delivery",
              },
              {
                value: "24/7",
                label: "Client Support",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="cta-stat-box"
              >
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        *{
          box-sizing:border-box;
        }

        .cta-card{
          position:relative;

          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,0.03),
              rgba(255,255,255,0.01)
            );

          border:
            1px solid rgba(255,255,255,0.06);

          border-radius:32px;

          padding:4rem 3rem;

          text-align:center;

          overflow:hidden;

          backdrop-filter:blur(14px);

          box-shadow:
            0 10px 40px rgba(0,0,0,0.35),
            0 0 40px rgba(29,112,239,0.05);

          transition:0.35s ease;
        }

        .cta-card:hover{
          transform:translateY(-8px);

          box-shadow:
            0 20px 60px rgba(0,0,0,0.45),
            0 0 50px rgba(29,112,239,0.08);
        }

        .cta-badge{
          display:inline-flex;
          align-items:center;
          gap:0.5rem;

          padding:0.55rem 1rem;

          border-radius:30px;

          background:
            rgba(29,112,239,0.08);

          border:
            1px solid rgba(29,112,239,0.16);

          color:#3D8BFF;

          font-size:0.78rem;
          font-weight:700;
          letter-spacing:0.08em;
          text-transform:uppercase;

          margin-bottom:1.8rem;
        }

        .cta-title{
          font-size:
            clamp(2.2rem, 5vw, 4rem);

          font-weight:800;

          line-height:1.1;

          color:#F0F0F0;

          margin-bottom:1.3rem;

          letter-spacing:-0.03em;
        }

        .cta-title span{
          background:
            linear-gradient(
              90deg,
              #1D70EF,
              #F5B731
            );

          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .cta-desc{
          max-width:650px;

          margin:0 auto 3rem;

          color:#8A8A9A;

          font-size:1.05rem;

          line-height:1.9;
        }

        .cta-buttons{
          display:flex;
          justify-content:center;
          gap:1rem;
          flex-wrap:wrap;

          margin-bottom:4rem;
        }

        .cta-btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:0.7rem;

          padding:1rem 1.5rem;

          border-radius:14px;

          text-decoration:none;

          font-weight:700;

          transition:0.3s ease;
        }

        .cta-btn.primary{
          background:
            linear-gradient(
              135deg,
              #1D70EF,
              #1559bf
            );

          color:white;

          box-shadow:
            0 12px 30px rgba(29,112,239,0.28);
        }

        .cta-btn.primary:hover{
          transform:translateY(-4px);

          box-shadow:
            0 18px 40px rgba(29,112,239,0.35);
        }

        .cta-btn.whatsapp{
          background:
            linear-gradient(
              135deg,
              #25D366,
              #18b454
            );

          color:white;

          box-shadow:
            0 12px 30px rgba(37,211,102,0.25);
        }

        .cta-btn.whatsapp:hover{
          transform:translateY(-4px);

          box-shadow:
            0 18px 40px rgba(37,211,102,0.32);
        }

        .cta-btn.outline{
          border:
            1px solid rgba(255,255,255,0.08);

          background:
            rgba(255,255,255,0.02);

          color:#F0F0F0;
        }

        .cta-btn.outline:hover{
          background:
            rgba(255,255,255,0.06);

          transform:translateY(-4px);
        }

        .cta-stats{
          display:grid;
          grid-template-columns:repeat(3,1fr);

          gap:1rem;
        }

        .cta-stat-box{
          padding:1.4rem;

          border-radius:18px;

          background:
            rgba(255,255,255,0.02);

          border:
            1px solid rgba(255,255,255,0.04);

          transition:0.3s ease;
        }

        .cta-stat-box:hover{
          transform:translateY(-4px);

          background:
            rgba(29,112,239,0.03);

          border:
            1px solid rgba(29,112,239,0.08);
        }

        .cta-stat-box h3{
          font-size:1.5rem;
          font-weight:800;
          color:#F5B731;
          margin-bottom:0.4rem;
        }

        .cta-stat-box p{
          color:#8A8A9A;
          font-size:0.82rem;
        }

        @media(max-width:768px){
          .cta-card{
            padding:3rem 1.8rem;
            border-radius:24px;
          }

          .cta-stats{
            grid-template-columns:1fr;
          }

          .cta-buttons{
            flex-direction:column;
          }

          .cta-btn{
            width:100%;
          }
        }

        @media(max-width:480px){
          section{
            padding:5rem 1rem !important;
          }

          .cta-title{
            font-size:2rem;
          }

          .cta-desc{
            font-size:0.95rem;
          }

          .cta-card{
            padding:2.2rem 1.2rem;
          }
        }
      `}</style>
    </section>
  );
}