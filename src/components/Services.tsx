
import {
  TrendingUp,
  Share2,
  FileText,
  Users,
  Megaphone,
  MapPin,
  Search,
  Globe,
  Camera,
  Palette,
  Zap,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <TrendingUp size={30} />,
    title: "Digital Marketing",
    benefit:
      "Smart growth strategies that bring leads, visibility and real business growth.",
    link: "https://en.wikipedia.org/wiki/Digital_marketing",
  },
  {
    icon: <Share2 size={30} />,
    title: "Social Media Handling",
    benefit:
      "Consistent posting and engagement to grow your audience and brand trust.",
    link: "https://en.wikipedia.org/wiki/Social_media_marketing",
  },
  {
    icon: <FileText size={30} />,
    title: "Content Creation",
    benefit:
      "Creative reels, graphics and content designed to attract attention.",
    link: "https://en.wikipedia.org/wiki/Content_creation",
  },
  {
    icon: <Users size={30} />,
    title: "Influencer Marketing",
    benefit:
      "Collaborate with creators to boost reach, awareness and credibility.",
    link: "https://en.wikipedia.org/wiki/Influencer_marketing",
  },
  {
    icon: <Megaphone size={30} />,
    title: "Paid Ads",
    benefit:
      "Targeted advertising campaigns focused on leads and conversions.",
    link: "https://en.wikipedia.org/wiki/Online_advertising",
  },
  {
    icon: <MapPin size={30} />,
    title: "Google Business Profile",
    benefit:
      "Improve local visibility and get more calls, visits and customers.",
    link: "https://en.wikipedia.org/wiki/Google_Get_Your_Business_Online",
  },
  {
    icon: <Search size={30} />,
    title: "SEO Optimization",
    benefit:
      "On-page SEO, off-page SEO, local SEO, and Technical SEO strategies to rank higher on Google and increase long-term organic traffic.",
    link: "https://en.wikipedia.org/wiki/Search_engine_optimization",
  },
  {
    icon: <Globe size={30} />,
    title: "Website & App Development",
    benefit:
      "Modern responsive websites and apps built for business growth.",
    link: "https://en.wikipedia.org/wiki/Web_development",
  },
  {
    icon: <Camera size={30} />,
    title: "Photo & Video Production",
    benefit:
      "Premium visuals that make your brand look professional and trustworthy.",
    link: "https://en.wikipedia.org/wiki/Photo_shoot",
  },
  {
    icon: <Palette size={30} />,
    title: "Branding & Design",
    benefit:
      "Unique brand identity that helps your business stand out.",
    link: "https://en.wikipedia.org/wiki/Branding",
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">

        {/* HEADER */}
        <div className="services-header reveal">
          <span className="section-tag">OUR SERVICES</span>

          <h2 className="services-title">
            Services Built For <span>Business Growth</span>
          </h2>

          <p className="services-subtitle">
            Every service is focused on one goal — helping your business grow
            faster through smart digital strategies.
          </p>
        </div>

        {/* GRID */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card reveal delay-${(index % 5) + 1}`}
            >
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.benefit}</p>

              <a
                href={service.link}
                className="service-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* COMING SOON */}
        <div className="coming-soon reveal">

          <div className="coming-soon-card">
            <div className="coming-icon">
              <Zap size={24} />
            </div>

            <div>
              <span className="coming-badge">Coming Soon</span>

              <h3>Performance Marketing</h3>

              <p>
                Advanced ad strategies designed to scale brands faster.
              </p>
            </div>
          </div>

          <div className="coming-soon-card">
            <div className="coming-icon">
              <Zap size={24} />
            </div>

            <div>
              <span className="coming-badge">Coming Soon</span>

              <h3>AI Automation</h3>

              <p>
                Smart AI workflows, chatbots and business automation to save
                time and boost productivity.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* CSS */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        .services-section {
          background: #0B0C11;
          padding: 110px 20px;
          position: relative;
          overflow: hidden;
        }

        .services-container {
          max-width: 1200px;
          margin: auto;
        }

        .services-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .section-tag {
          display: inline-block;
          padding: 10px 18px;
          border-radius: 30px;
          background: rgba(29,112,239,0.08);
          border: 1px solid rgba(29,112,239,0.2);
          color: #1D70EF;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 24px;
        }

        .services-title {
          font-size: clamp(2.2rem,4vw,3.5rem);
          font-weight: 800;
          color: white;
          line-height: 1.15;
          margin-bottom: 20px;
        }

        .services-title span {
          color: #F5B731;
        }

        .services-subtitle {
          max-width: 700px;
          margin: auto;
          color: #9EA0B3;
          line-height: 1.8;
          font-size: 1.05rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
          gap: 24px;
          margin-bottom: 70px;
        }

        .service-card {
          background: #12141C;
          border: 1px solid #1E212B;
          border-radius: 26px;
          padding: 32px 28px;
          transition: 0.35s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: #1D70EF;
          box-shadow: 0 18px 40px rgba(0,0,0,0.35);
        }

        .service-icon {
          width: 64px;
          height: 64px;
          border-radius: 18px;
          background: rgba(29,112,239,0.08);
          border: 1px solid rgba(29,112,239,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1D70EF;
          margin-bottom: 24px;
        }

        .service-card h3 {
          color: white;
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 14px;
        }

        .service-card p {
          color: #9EA0B3;
          line-height: 1.8;
          font-size: 15px;
          margin-bottom: 28px;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #F5B731;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: 0.3s ease;
        }

        .service-link:hover {
          gap: 12px;
        }

        .coming-soon {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .coming-soon-card {
          width: 100%;
          background: linear-gradient(
            135deg,
            rgba(245,183,49,0.08),
            rgba(29,112,239,0.06)
          );
          border: 1px dashed rgba(245,183,49,0.25);
          border-radius: 26px;
          padding: 30px;
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .coming-icon {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          background: rgba(245,183,49,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #F5B731;
          flex-shrink: 0;
        }

        .coming-badge {
          display: inline-block;
          background: #F5B731;
          color: #0B0C11;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .coming-soon-card h3 {
          color: white;
          font-size: 1.3rem;
          margin-bottom: 8px;
        }

        .coming-soon-card p {
          color: #9EA0B3;
          line-height: 1.7;
        }

        @media(max-width:768px) {
          .services-section {
            padding: 90px 18px;
          }

          .services-title {
            font-size: 2.3rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .coming-soon {
            grid-template-columns: 1fr;
          }

          .coming-soon-card {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
