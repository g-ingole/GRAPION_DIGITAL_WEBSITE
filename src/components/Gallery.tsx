export default function OutsourcingSection() {
  return (
    <section
      style={{
        padding: "7rem 1.5rem",
        background: "#0d0d0d",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* TOP CONTENT */}
        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              color: "#1D70EF",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Outsourcing Partnership
          </p>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              fontWeight: 800,
              color: "#F0F0F0",
              lineHeight: 1.2,
              marginBottom: "1.2rem",
            }}
          >
            Your Reliable Outsourcing <br />
            Growth Partner
          </h2>

          <p
            style={{
              color: "#8A8A9A",
              fontSize: "1rem",
              maxWidth: "760px",
              margin: "0 auto",
              lineHeight: 1.9,
            }}
          >
            Grapion Digital is open to collaborating with agencies,
            startups, brands and companies looking for a trusted
            outsourcing partner. From social media handling and
            content creation to website development, branding,
            performance marketing and creative execution — we help
            businesses deliver quality work at scale.
          </p>
        </div>

        {/* CARDS */}
        <div className="outsourcing-grid">
          <div className="outsourcing-card reveal delay-1">
            <div className="card-icon">🎨</div>

            <h3>Creative Services</h3>

            <p>
              Social media creatives, branding, posters, reels,
              editing, graphic design and complete visual content
              support for agencies & businesses.
            </p>
          </div>

          <div className="outsourcing-card reveal delay-2">
            <div className="card-icon">💻</div>

            <h3>Website Development</h3>

            <p>
              Modern responsive websites, landing pages, portfolio
              sites and business websites designed for performance
              and conversions.
            </p>
          </div>

          <div className="outsourcing-card reveal delay-3">
            <div className="card-icon">📈</div>

            <h3>Marketing Support</h3>

            <p>
              Meta ads, Google presence, GMB optimization, lead
              generation and digital growth strategies to help brands
              scale online.
            </p>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="outsourcing-cta reveal">
          <h3>Looking For A Long-Term Outsourcing Team?</h3>

          <p>
            We work silently in the background while helping your
            company deliver high-quality digital services smoothly and
            professionally.
          </p>

          <a href="#contact" className="outsourcing-btn">
            Let’s Collaborate
          </a>
        </div>
      </div>

      <style>{`
        *{
          box-sizing:border-box;
        }

        .outsourcing-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:24px;
          margin-top:60px;
        }

        .outsourcing-card{
          background:#11131A;
          border:1px solid #1E1F2A;
          border-radius:24px;
          padding:38px 30px;
          transition:0.35s ease;
        }

        .outsourcing-card:hover{
          transform:translateY(-8px);
          border-color:#1D70EF;
          box-shadow:0 18px 40px rgba(0,0,0,0.35);
        }

        .card-icon{
          width:68px;
          height:68px;
          border-radius:18px;
          background:rgba(29,112,239,0.12);
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:30px;
          margin-bottom:24px;
        }

        .outsourcing-card h3{
          color:#F0F0F0;
          font-size:1.3rem;
          margin-bottom:14px;
          font-weight:700;
        }

        .outsourcing-card p{
          color:#9EA0B3;
          line-height:1.8;
          font-size:0.96rem;
        }

        .outsourcing-cta{
          margin-top:70px;
          background:linear-gradient(
            135deg,
            rgba(29,112,239,0.12),
            rgba(245,183,49,0.08)
          );
          border:1px solid rgba(255,255,255,0.08);
          border-radius:28px;
          padding:55px 35px;
          text-align:center;
        }

        .outsourcing-cta h3{
          color:#F0F0F0;
          font-size:2rem;
          margin-bottom:18px;
          font-weight:800;
        }

        .outsourcing-cta p{
          color:#A1A1B5;
          max-width:700px;
          margin:0 auto 30px;
          line-height:1.8;
          font-size:1rem;
        }

        .outsourcing-btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding:15px 30px;
          background:#1D70EF;
          color:white;
          border-radius:14px;
          text-decoration:none;
          font-weight:600;
          transition:0.3s ease;
        }

        .outsourcing-btn:hover{
          transform:translateY(-3px);
          box-shadow:0 12px 28px rgba(29,112,239,0.35);
        }

        @media(max-width:992px){
          .outsourcing-grid{
            grid-template-columns:1fr;
          }
        }

        @media(max-width:600px){
          section{
            padding:5.5rem 1.2rem !important;
          }

          .outsourcing-card{
            padding:32px 24px;
          }

          .outsourcing-cta{
            padding:42px 22px;
          }

          .outsourcing-cta h3{
            font-size:1.6rem;
            line-height:1.3;
          }
        }
      `}</style>
    </section>
  );
}