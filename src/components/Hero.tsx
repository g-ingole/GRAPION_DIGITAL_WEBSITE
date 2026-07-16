import { Phone, MessageCircle, ChevronDown, Star } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Glow */}
      <div className="hero-bg hero-bg-1"></div>
      <div className="hero-bg hero-bg-2"></div>

      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <span className="dot"></span>
            <span>
              Digital Marketing • Branding • Growth Solutions — Nagpur
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            We Create Content That Turns{" "}
            <span>Views Into Clients</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Helping businesses grow through viral content, paid ads,
            branding and smart digital strategies that bring real leads.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              <Phone size={18} />
              Book Free Strategy Call
            </a>

            <a
              href="https://wa.me/919822952807"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div>
              <h2>50+</h2>
              <p>Brands Served</p>
            </div>

            <div>
              <h2>2M+</h2>
              <p>Reach Generated</p>
            </div>

            <div>
              <h2>120+</h2>
              <p>Campaigns Managed</p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="hero-proof">
            <div className="stars">
              <Star size={14} fill="#F5B731" stroke="#F5B731" />
              <Star size={14} fill="#F5B731" stroke="#F5B731" />
              <Star size={14} fill="#F5B731" stroke="#F5B731" />
              <Star size={14} fill="#F5B731" stroke="#F5B731" />
              <Star size={14} fill="#F5B731" stroke="#F5B731" />
          
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-image-section">
          <div className="hero-image-wrapper">
            <img
              src="/logo1.png"
              alt="Grapion Digital"
              className="hero-image"
              loading="lazy"
            />

            {/* Floating Cards */}
            <div className="floating-card card-1">
              📈 1.2M+ Reel Reach
            </div>

            <div className="floating-card card-2">
              🚀 Leads Generated Daily
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" onClick={scrollToAbout}>
        <span>Scroll</span>
        <ChevronDown size={18} />
      </div>

      {/* CSS */}
      <style>{`
        *{
          box-sizing:border-box;
        }

        .hero-section{
          min-height:100vh;
          background:#06070B;
          position:relative;
          overflow:hidden;
          display:flex;
          align-items:center;
          padding:100px 20px 60px;
        }

        .hero-bg{
          position:absolute;
          border-radius:50%;
          filter:blur(120px);
          z-index:0;
        }

        .hero-bg-1{
          width:400px;
          height:400px;
          background:rgba(29,112,239,0.15);
          top:-100px;
          right:-100px;
        }

        .hero-bg-2{
          width:300px;
          height:300px;
          background:rgba(245,183,49,0.08);
          bottom:-80px;
          left:-80px;
        }

        .hero-container{
   max-width:1350px;
  margin:auto;
  width:100%;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:35px;
  align-items:center;
  position:relative;
  z-index:2;
}

        .hero-badge{
  display:inline-flex;
  align-items:center;
  gap:8px;
  background:rgba(29,112,239,0.08);
  border:1px solid rgba(29,112,239,0.2);
  padding:8px 16px;
  border-radius:30px;
  margin-bottom:20px;
  color:#F5B731;
  font-size:13px;
  font-weight:600;
}

        .dot{
          width:7px;
          height:7px;
          border-radius:50%;
          background:#F5B731;
        }

        .hero-title{
 
  line-height:1.08;
  color:white;

  font-weight:800;
  font-size:clamp(3.7rem,4vw,2.1rem);
margin-bottom:18px;
}

        .hero-title span{
          color:#1D70EF;
        }
.hero-subtitle{
  color:#A0A0B0;
  font-size:1rem;
  line-height:1.75;
  max-width:500px;
  margin-bottom:25px;
}

        .hero-buttons{
          display:flex;
          gap:15px;
          flex-wrap:wrap;
          margin-bottom:45px;
        }

        .btn-primary,
        .btn-secondary{
          display:flex;
          align-items:center;
          gap:10px;
          padding:14px 24px;
          border-radius:14px;
          text-decoration:none;
          font-weight:600;
          transition:0.3s ease;
        }

        .btn-primary{
          background:#1D70EF;
          color:white;
        }

        .btn-primary:hover{
          transform:translateY(-3px);
          box-shadow:0 10px 25px rgba(29,112,239,0.35);
        }

        .btn-secondary{
          border:1px solid #2B2B38;
          color:white;
          background:#11131A;
        }

        .btn-secondary:hover{
          border-color:#1D70EF;
          transform:translateY(-3px);
        }

        .hero-stats{
          display:flex;
          gap:40px;
          padding-top:30px;
          border-top:1px solid #1E1E2A;
          flex-wrap:wrap;
        }

        .hero-stats h2{
          color:#F5B731;
          font-size:2rem;
          margin-bottom:5px;
        }

        .hero-stats p{
          color:#8A8A9A;
          font-size:14px;
        }

        .hero-proof{
          margin-top:30px;
          display:flex;
          align-items:center;
          gap:12px;
          color:#A0A0B0;
          flex-wrap:wrap;
        }

        .stars{
          display:flex;
          gap:3px;
        }

        .hero-image-section{
          display:flex;
          justify-content:center;
        }

        .hero-image-wrapper{
          position:relative;
        }

        .hero-image{
          width:100%;
          max-width:430px;
          border-radius:35px;
          position:relative;
          z-index:2;
          animation:float 4s ease-in-out infinite;
        }

        .floating-card{
          position:absolute;
          background:#11131A;
          border:1px solid #232532;
          color:white;
          padding:12px 18px;
          border-radius:14px;
          font-size:14px;
          font-weight:600;
          backdrop-filter:blur(10px);
          z-index:3;
          box-shadow:0 10px 30px rgba(0,0,0,0.35);
        }

        .card-1{
          top:15%;
          left:-60px;
        }

        .card-2{
          bottom:15%;
          right:-50px;
        }

        .scroll-indicator{
          position:absolute;
          bottom:25px;
          left:50%;
          transform:translateX(-50%);
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:5px;
          color:#8A8A9A;
          cursor:pointer;
          animation:bounce 2s infinite;
        }

        .scroll-indicator span{
          font-size:12px;
          letter-spacing:2px;
          text-transform:uppercase;
        }

        @keyframes float{
          0%{
            transform:translateY(0px);
          }
          50%{
            transform:translateY(-12px);
          }
          100%{
            transform:translateY(0px);
          }
        }

        @keyframes bounce{
          0%,100%{
            transform:translateX(-50%) translateY(0);
          }
          50%{
            transform:translateX(-50%) translateY(-8px);
          }
        }

        @media(max-width:992px){
          .hero-container{
            grid-template-columns:1fr;
            text-align:center;
          }

          .hero-content{
            order:2;
          }

          .hero-image-section{
            order:1;
          }

          .hero-buttons,
          .hero-stats,
          .hero-proof{
            justify-content:center;
          }

          .card-1{
            left:-20px;
          }

          .card-2{
            right:-20px;
          }
        }

        @media(max-width:600px){
          .hero-section{
            padding-top:120px;
              min-height:92vh;
          }

          .hero-title{
            font-size:2.3rem;
          }

          .hero-subtitle{
            font-size:1rem;
          }

          .hero-buttons{
            flex-direction:column;
          }

          .btn-primary,
          .btn-secondary{
            justify-content:center;
            width:100%;
          }

          .hero-stats{
            gap:25px;
            justify-content:center;
          }

          .floating-card{
            font-size:12px;
            padding:10px 14px;
          }

          .card-1{
            top:10%;
            left:0;
          }

          .card-2{
            bottom:8%;
            right:0;
          }
        }
      `}</style>
    </section>
  );
}
