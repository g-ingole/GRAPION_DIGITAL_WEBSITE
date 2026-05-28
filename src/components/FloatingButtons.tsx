import { useState, useEffect } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const scrollProgress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setProgress(scrollProgress);
      setShowTop(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappLink =
    "https://wa.me/919822952807?text=Hi%20Grapion%20Digital%2C%20I%20want%20to%20grow%20my%20business.";

  return (
    <>
      {/* SCROLL PROGRESS BAR */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${progress}%` }}
      />

      {/* WHATSAPP BUTTON */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`whatsapp-btn ${
          showTop ? "move-up" : ""
        }`}
      >
        <div className="whatsapp-ping"></div>

        <MessageCircle
          size={26}
          fill="white"
          strokeWidth={2.5}
        />
      </a>

      {/* SCROLL TO TOP */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`scroll-top-btn ${
          showTop ? "show" : ""
        }`}
      >
        <ArrowUp size={20} />
      </button>

      {/* CSS */}
      <style>{`
        *{
          box-sizing:border-box;
        }

        .scroll-progress-bar{
          position:fixed;
          top:0;
          left:0;
          height:4px;
          background:linear-gradient(
            90deg,
            #1D70EF,
            #F5B731
          );
          z-index:9999;
          transition:width 0.15s ease;
          box-shadow:0 0 12px rgba(29,112,239,0.4);
        }

        .whatsapp-btn{
          position:fixed;
          right:24px;
          bottom:24px;
          width:62px;
          height:62px;
          border-radius:50%;
          background:#25D366;
          display:flex;
          align-items:center;
          justify-content:center;
          color:white;
          text-decoration:none;
          z-index:999;
          transition:0.35s ease;
          box-shadow:
            0 10px 30px rgba(37,211,102,0.35),
            0 0 0 rgba(37,211,102,0.4);
          overflow:hidden;
        }

        .whatsapp-btn:hover{
          transform:translateY(-6px) scale(1.08);
          box-shadow:
            0 16px 40px rgba(37,211,102,0.45);
        }

        .whatsapp-btn.move-up{
          bottom:92px;
        }

        .whatsapp-ping{
          position:absolute;
          inset:0;
          border-radius:50%;
          background:rgba(37,211,102,0.35);
          animation:ping 2s infinite;
          z-index:-1;
        }

        .scroll-top-btn{
          position:fixed;
          right:24px;
          bottom:24px;
          width:54px;
          height:54px;
          border-radius:50%;
          border:1px solid rgba(29,112,239,0.25);
          background:rgba(17,19,26,0.95);
          backdrop-filter:blur(12px);
          color:#1D70EF;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          z-index:998;
          opacity:0;
          pointer-events:none;
          transform:translateY(20px);
          transition:0.35s ease;
          box-shadow:0 10px 30px rgba(0,0,0,0.25);
        }

        .scroll-top-btn.show{
          opacity:1;
          pointer-events:auto;
          transform:translateY(0);
        }

        .scroll-top-btn:hover{
          background:#1D70EF;
          color:white;
          transform:translateY(-4px);
          box-shadow:
            0 12px 35px rgba(29,112,239,0.35);
        }

        @keyframes ping{
          0%{
            transform:scale(1);
            opacity:0.7;
          }

          70%{
            transform:scale(1.7);
            opacity:0;
          }

          100%{
            opacity:0;
          }
        }

        @media(max-width:768px){
          .whatsapp-btn{
            width:58px;
            height:58px;
            right:18px;
            bottom:18px;
          }

          .whatsapp-btn.move-up{
            bottom:84px;
          }

          .scroll-top-btn{
            width:50px;
            height:50px;
            right:18px;
            bottom:18px;
          }
        }

        @media(max-width:480px){
          .scroll-progress-bar{
            height:3px;
          }

          .whatsapp-btn{
            width:55px;
            height:55px;
          }

          .scroll-top-btn{
            width:48px;
            height:48px;
          }
        }
      `}</style>
    </>
  );
}