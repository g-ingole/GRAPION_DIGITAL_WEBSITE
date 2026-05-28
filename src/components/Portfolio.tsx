import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Beauty Website",
    category: "Website Development",
    img: "/image.png",
    link: "https://www.faracharm.in/",
  },
  {
    title: "GMB Profile & SEO Optimization",
    category: "Brand Visibility & Growth",
    img: "/gmb.png",
    link: "https://share.google/YZaO7YO2UxDc40CXq",
  },
  {
    title: "Photo & Video Shoot",
    category: "Photos & Videos",
    video: "/photo_video.mp4",
    link: "https://www.instagram.com/p/DWJa6e1jFFT/",
  },
  {
    title: "Restaurant Branding",
    category: "Branding",
    img: "/branding.png",
    link: "https://www.instagram.com/p/DYTNHxJi4hw/",
  },
  {
    title: "Client Event Covered",
    category: "Video Shoot",
    video: "/IMA.mp4",
    link: "https://www.instagram.com/p/DYPkQwhobQa/",
  },
  {
    title: "Social Media Management",
    category: "Reels",
    video: "/reels.mp4",
    link: "https://www.instagram.com/p/DXVlwdMC2Uu/",
  },
  {
    title: "Fashion Influencer Campaign",
    category: "Influencer Marketing",
    video: "/IMG_5974.MP4",
    link: "https://www.instagram.com/p/DYcPAAxs_mg/",
  },
  {
    title: "Creative Social Media Posts",
    category: "Social Media",
    img: "/caddesk.jpg",
    link: "https://www.instagram.com/p/DYGSDUECJGa/",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{
        padding: "7rem 1.5rem",
        background: "#0B0B0B",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <p
            style={{
              fontSize: "0.85rem",
              color: "#1D70EF",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Our Work
          </p>

          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              color: "#F0F0F0",
              lineHeight: 1.2,
            }}
          >
            Projects That Speak for Themselves
          </h2>
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
            width: "100%",
          }}
        >
          {projects.map((p, index) => (
            <div
              key={index}
              style={{
                height: "260px",
                position: "relative",
                overflow: "hidden",
                borderRadius: "14px",
                width: "100%",
                background: "#111",
              }}
            >
              {/* IMAGE / VIDEO */}
              {p.video ? (
                <video
                  src={p.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}

              {/* OVERLAY */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.88), rgba(0,0,0,0.15), transparent)",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  padding: "1.5rem",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#fff",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {p.category}
                  </div>

                  <div
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#F0F0F0",
                      marginBottom: "1rem",
                    }}
                  >
                    {p.title}
                  </div>

                  {/* BUTTON */}
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      background: "#1D70EF",
                      color: "#fff",
                      borderRadius: "8px",
                      padding: "0.65rem 1.3rem",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    <ExternalLink size={14} />
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 CTA SECTION (UPDATED BIG TEXT) */}
        <div
          style={{
            textAlign: "center",
            marginTop: "4.5rem",
          }}
        >
          <p
            style={{
              fontSize: "1.3rem",
              color: "#ccc",
              marginBottom: "1.2rem",
              letterSpacing: "0.08em",
              fontWeight: 500,
            }}
          >
           And many more premium projects...
          </p>

          <a
            href="https://www.instagram.com/hellograpiondigital/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              border: "1.5px solid #1D70EF",
              color: "#1D70EF",
              padding: "0.9rem 1.8rem",
              borderRadius: "10px",
              fontSize: "1rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <ExternalLink size={16} />
            Explore More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}