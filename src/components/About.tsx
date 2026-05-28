import { useCounter } from "../hooks/useCounter";
import {
  TrendingUp,
  Target,
  Users,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

function CounterCard({
  target,
  suffix,
  label,
  icon,
}: {
  target: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}) {
  const { count, ref } = useCounter(target, 2000);

  return (
    <div className="counter-card reveal" ref={ref}>
      <div className="counter-icon">{icon}</div>

      <h3>
        {count}
        {suffix}
      </h3>

      <p>{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* LEFT CONTENT */}
        <div className="about-content reveal-left">
          <span className="section-tag">ABOUT US</span>

          <h2 className="about-title">
            Your Growth Is Our <span>Mission</span>
          </h2>

          <p className="about-text">
            Grapion Digital helps businesses grow online through smart
            digital marketing, branding, content creation and
            performance-focused strategies.
          </p>

          <p className="about-text">
            Based in Nagpur, Maharashtra — we work with brands that
            want real visibility, quality leads and long-term online
            growth. From social media management to websites and ads,
            we help businesses build a powerful digital presence.
          </p>

          {/* FEATURES */}
          <div className="about-features">
            <div className="feature-item">
              <BadgeCheck size={18} />
              <span>Creative Content Strategy</span>
            </div>

            <div className="feature-item">
              <BadgeCheck size={18} />
              <span>Performance Marketing</span>
            </div>

            <div className="feature-item">
              <BadgeCheck size={18} />
              <span>Website & Branding Solutions</span>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="about-buttons">
            <a href="#services" className="btn-primary">
              Explore Services
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn-secondary">
              Talk To Us
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image-wrapper reveal-right">
          <div className="image-card">
            <img
              src="/COVER_PHOTO_-_1.png"
              alt="Grapion Digital Team"
              className="about-image"
              loading="lazy"
            />

            {/* Floating Info Card */}
            <div className="floating-info">
              <div className="green-dot"></div>

              <div>
                <h4>Actively Growing Brands</h4>
                <p>Nagpur & Across India</p>
              </div>
            </div>

            {/* Small Floating Card */}
            <div className="floating-result">
              🚀 2M+ Reach Generated
            </div>
          </div>
        </div>
      </div>

      {/* COUNTERS */}
      {/* <div className="counter-grid">
        <CounterCard
          target={50}
          suffix="+"
          label="Brands Served"
          icon={<Users size={28} />}
        />

        <CounterCard
          target={120}
          suffix="+"
          label="Campaigns Managed"
          icon={<Target size={28} />}
        />

        <CounterCard
          target={2}
          suffix="M+"
          label="Reach Generated"
          icon={<TrendingUp size={28} />}
        />
      </div> */}

      {/* CSS */}
      <style>{`
        *{
          box-sizing:border-box;
        }

        .about-section{
          background:#0A0A0F;
          padding:110px 20px;
          position:relative;
          overflow:hidden;
        }

        .about-container{
          max-width:1200px;
          margin:auto;
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:80px;
          align-items:center;
          margin-bottom:80px;
        }

        .section-tag{
          display:inline-block;
          background:rgba(29,112,239,0.08);
          border:1px solid rgba(29,112,239,0.2);
          color:#1D70EF;
          padding:10px 18px;
          border-radius:30px;
          font-size:13px;
          font-weight:700;
          letter-spacing:1px;
          margin-bottom:24px;
        }

        .about-title{
          font-size:clamp(2.2rem,4vw,3.5rem);
          color:white;
          line-height:1.15;
          margin-bottom:24px;
          font-weight:800;
        }

        .about-title span{
          color:#F5B731;
        }

        .about-text{
          color:#9EA0B3;
          line-height:1.9;
          font-size:1.05rem;
          margin-bottom:22px;
        }

        .about-features{
          display:flex;
          flex-direction:column;
          gap:15px;
          margin:35px 0;
        }

        .feature-item{
          display:flex;
          align-items:center;
          gap:12px;
          color:#F0F0F0;
          font-weight:500;
        }

        .feature-item svg{
          color:#22c55e;
          flex-shrink:0;
        }

        .about-buttons{
          display:flex;
          gap:16px;
          flex-wrap:wrap;
          margin-top:35px;
        }

        .btn-primary,
        .btn-secondary{
          display:flex;
          align-items:center;
          gap:10px;
          text-decoration:none;
          padding:14px 24px;
          border-radius:14px;
          transition:0.3s ease;
          font-weight:600;
        }

        .btn-primary{
          background:#1D70EF;
          color:white;
        }

        .btn-primary:hover{
          transform:translateY(-3px);
          box-shadow:0 12px 28px rgba(29,112,239,0.35);
        }

        .btn-secondary{
          background:#11131A;
          border:1px solid #252734;
          color:white;
        }

        .btn-secondary:hover{
          border-color:#1D70EF;
          transform:translateY(-3px);
        }

        .image-card{
          position:relative;
          border-radius:28px;
          overflow:hidden;
          border:1px solid #1D1F2B;
          background:#11131A;
        }

        .about-image{
          width:100%;
          display:block;
          object-fit:cover;
        }

        .floating-info{
          position:absolute;
          bottom:20px;
          left:20px;
          background:rgba(10,10,15,0.88);
          backdrop-filter:blur(14px);
          border:1px solid rgba(255,255,255,0.08);
          padding:14px 18px;
          border-radius:16px;
          display:flex;
          align-items:center;
          gap:14px;
        }

        .green-dot{
          width:12px;
          height:12px;
          border-radius:50%;
          background:#22c55e;
          box-shadow:0 0 12px #22c55e;
        }

        .floating-info h4{
          color:white;
          font-size:14px;
          margin-bottom:3px;
        }

        .floating-info p{
          color:#9EA0B3;
          font-size:12px;
        }

        .floating-result{
          position:absolute;
          top:20px;
          right:20px;
          background:#11131A;
          border:1px solid #252734;
          color:white;
          padding:12px 16px;
          border-radius:14px;
          font-size:13px;
          font-weight:600;
          box-shadow:0 10px 30px rgba(0,0,0,0.3);
        }

        .counter-grid{
          max-width:1200px;
          margin:auto;
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:24px;
        }

        .counter-card{
          background:#11131A;
          border:1px solid #1E1F2A;
          border-radius:24px;
          padding:40px 30px;
          text-align:center;
          transition:0.3s ease;
        }

        .counter-card:hover{
          transform:translateY(-6px);
          border-color:#1D70EF;
          box-shadow:0 14px 35px rgba(0,0,0,0.3);
        }

        .counter-icon{
          display:flex;
          justify-content:center;
          margin-bottom:18px;
          color:#1D70EF;
        }

        .counter-card h3{
          font-size:3rem;
          color:#F5B731;
          margin-bottom:8px;
          font-weight:800;
        }

        .counter-card p{
          color:#9EA0B3;
          font-size:15px;
        }

        @media(max-width:992px){
          .about-container{
            grid-template-columns:1fr;
            gap:60px;
          }

          .about-content{
            text-align:center;
          }

          .about-features{
            align-items:center;
          }

          .about-buttons{
            justify-content:center;
          }

          .counter-grid{
            grid-template-columns:1fr;
          }
        }

        @media(max-width:600px){
          .about-section{
            padding:90px 18px;
          }

          .about-title{
            font-size:2.2rem;
          }

          .floating-info{
            left:10px;
            right:10px;
            bottom:10px;
          }

          .floating-result{
            right:10px;
            top:10px;
            font-size:12px;
          }

          .counter-card{
            padding:35px 24px;
          }

          .counter-card h3{
            font-size:2.4rem;
          }
        }
      `}</style>
    </section>
  );
}