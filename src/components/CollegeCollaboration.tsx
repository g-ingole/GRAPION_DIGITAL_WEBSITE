import {
  GraduationCap,
  Cpu,
  BookOpen,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: <Cpu size={20} />,
    label: "Practical AI Tools Training",
  },
  {
    icon: <BookOpen size={20} />,
    label: "Interactive Workshops",
  },
  {
    icon: <Award size={20} />,
    label: "Industry-Relevant Skills",
  },
  {
    icon: <GraduationCap size={20} />,
    label: "Career Readiness Focus",
  },
];

const collaborations = [
  // {
  //   image: "/kdk.jpeg",
  //   title: "KDK College, Nagpur",
  //   tag: "Official MoU Signed",
  //   desc: "Partnered for AI skill development, digital workshops and student innovation programs.",
  // },

  {
    image: "/vmv.webp",
    title:
      "VMV Commerce, JMT Arts & JJP Science College, Nagpur",
    tag: "Official MoU Signed",
    desc: "Partnered for AI skill development, digital workshops and student innovation programs.",
  },

  // {
  //   image: "/stech.webp",
  //   title: "CadDesk S-Tech Academy, Nagpur",
  //   tag: "Seminar Collaboration",
  //   desc: "Organized seminars on AI, branding, digital skills and modern industry trends.",
  // },
];

export default function CollegeCollaboration() {
  return (
    <>
      {/* ============================= */}
      {/* FIRST SECTION */}
      {/* ============================= */}

      <section
        id="college-collaboration"
        style={{
          padding: "7rem 1.5rem",
          background:
            "radial-gradient(circle at top right, rgba(245,183,49,0.05), transparent 30%), #0B0B0B",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* BLUR EFFECT */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "300px",
            height: "300px",
            background: "rgba(245,183,49,0.08)",
            filter: "blur(120px)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
          }}
        >
          <div
            className="collab-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "center",
            }}
          >
            {/* LEFT SIDE */}
            <div>
              <div className="mini-badge">
                <Sparkles size={14} color="#F5B731" />

                <span>
                  College Collaboration
                </span>
              </div>

              <h2 className="main-heading">
                Empowering Students with{" "}
                <span>AI Skills</span>
              </h2>

              <p className="main-text">
                We conduct modern AI workshops,
                seminars, and practical training
                sessions that help students learn
                real-world tools used in today’s
                industries.
              </p>

              <p className="main-text">
                Our goal is to bridge the gap
                between academics and industry by
                helping students become
                future-ready with hands-on AI and
                digital skills.
              </p>

              <a
                href="#contact"
                className="partner-btn"
              >
                <GraduationCap size={18} />
                Partner with Us
                <ArrowRight size={16} />
              </a>
            </div>

            {/* RIGHT SIDE */}
            <div>
              <div className="glass-card">
                <div className="top-icon">
                  <GraduationCap size={34} />
                </div>

                <h3 className="card-title">
                  AI Skills for the Future
                </h3>

                <p className="card-desc">
                  Workshops conducted in colleges
                  across Nagpur with practical,
                  industry-focused learning.
                </p>

                <div className="feature-list">
                  {features.map((f) => (
                    <div
                      key={f.label}
                      className="feature-item"
                    >
                      <div className="feature-icon">
                        {f.icon}
                      </div>

                      <span>{f.label}</span>
                    </div>
                  ))}
                </div>

                <div className="bottom-stats">
                  <div>
                    <h4>20+</h4>
                    <p>Sessions</p>
                  </div>

                  <div>
                    <h4>500+</h4>
                    <p>Students</p>
                  </div>

                  <div>
                    <h4>100%</h4>
                    <p>Practical</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* SECOND SHOWCASE SECTION */}
      {/* ============================= */}

      <section
        style={{
          padding: "7rem 1.5rem",
          background:
            "linear-gradient(to bottom, #0B0B0B, #111111)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* BLUR */}
        <div
          style={{
            position: "absolute",
            left: "-120px",
            bottom: "-120px",
            width: "260px",
            height: "260px",
            background: "rgba(245,183,49,0.08)",
            filter: "blur(120px)",
            borderRadius: "50%",
          }}
        />

        <div
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
          }}
        >
          {/* HEADING */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "4rem",
            }}
          >
            <div className="showcase-badge">
              <Sparkles
                size={14}
                color="#F5B731"
              />

              <span>
                Our Collaborations
              </span>
            </div>

            <h2 className="showcase-heading">
              Trusted by{" "}
              <span>
                Colleges & Institutions
              </span>
            </h2>

            <p className="showcase-subtext">
              We collaborate with colleges
              through workshops, seminars, AI
              training programs, and official MoU
              partnerships to empower students
              with future-ready skills.
            </p>
          </div>

          {/* CARDS */}
          <div className="college-showcase-grid">
            {collaborations.map(
              (item, index) => (
                <div
                  className="college-card"
                  key={index}
                >
                  {/* IMAGE */}
                  <div className="college-image-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="college-image"
                    />

                    <div className="image-overlay" />

                    <div className="college-tag">
                      {item.tag}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="college-content">
                    <h3>{item.title}</h3>

                    <p>{item.desc}</p>

                    {/* CHANGED BUTTON */}
                    <a
                      href="#contact"
                      className="explore-btn"
                    >
                      Collaborate With Us
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* STYLES */}
        <style>{`

          *{
            box-sizing:border-box;
          }

          html{
            scroll-behavior:smooth;
          }

          .mini-badge{
            display:inline-flex;
            align-items:center;
            gap:0.5rem;
            background:
              rgba(245,183,49,0.08);
            border:
              1px solid rgba(245,183,49,0.18);
            border-radius:30px;
            padding:0.45rem 1rem;
            margin-bottom:1.5rem;
          }

          .mini-badge span{
            font-size:0.78rem;
            color:#F5B731;
            font-weight:700;
            letter-spacing:0.08em;
            text-transform:uppercase;
          }

          .main-heading{
            font-size:
              clamp(2rem, 4vw, 3rem);
            font-weight:800;
            line-height:1.15;
            color:#F0F0F0;
            margin-bottom:1.5rem;
            letter-spacing:-0.03em;
          }

          .main-heading span{
            color:#F5B731;
          }

          .main-text{
            color:#8A8A9A;
            line-height:1.9;
            font-size:1.02rem;
            margin-bottom:1.5rem;
          }

          .glass-card{
            position:relative;
            background:
              linear-gradient(
                135deg,
                rgba(255,255,255,0.03),
                rgba(255,255,255,0.01)
              );

            border:
              1px solid rgba(255,255,255,0.06);

            border-radius:28px;
            padding:2.8rem;
            backdrop-filter:blur(14px);
            overflow:hidden;

            box-shadow:
              0 10px 40px rgba(0,0,0,0.35),
              0 0 30px rgba(245,183,49,0.04);

            transition:0.35s ease;
          }

          .glass-card:hover{
            transform:translateY(-8px);

            box-shadow:
              0 20px 60px rgba(0,0,0,0.4),
              0 0 40px rgba(245,183,49,0.08);
          }

          .top-icon{
            width:74px;
            height:74px;
            border-radius:20px;

            display:flex;
            align-items:center;
            justify-content:center;

            color:#F5B731;

            background:
              linear-gradient(
                135deg,
                rgba(245,183,49,0.12),
                rgba(245,183,49,0.04)
              );

            border:
              1px solid rgba(245,183,49,0.18);

            margin-bottom:1.8rem;
          }

          .card-title{
            font-size:1.4rem;
            font-weight:700;
            color:#F0F0F0;
            margin-bottom:0.8rem;
          }

          .card-desc{
            color:#8A8A9A;
            line-height:1.8;
            font-size:0.95rem;
            margin-bottom:2rem;
          }

          .feature-list{
            display:flex;
            flex-direction:column;
            gap:1rem;
          }

          .feature-item{
            display:flex;
            align-items:center;
            gap:1rem;
            padding:0.9rem 1rem;
            border-radius:14px;

            background:
              rgba(255,255,255,0.02);

            border:
              1px solid rgba(255,255,255,0.04);

            transition:0.3s ease;
          }

          .feature-item:hover{
            transform:translateX(6px);

            background:
              rgba(245,183,49,0.04);

            border:
              1px solid rgba(245,183,49,0.12);
          }

          .feature-icon{
            width:40px;
            height:40px;
            border-radius:12px;

            display:flex;
            align-items:center;
            justify-content:center;

            color:#F5B731;

            background:
              rgba(245,183,49,0.08);

            flex-shrink:0;
          }

          .feature-item span{
            color:#D4D4DD;
            font-size:0.92rem;
            font-weight:500;
          }

          .bottom-stats{
            margin-top:2.5rem;
            display:grid;
            grid-template-columns:repeat(3,1fr);
            gap:1rem;
          }

          .bottom-stats div{
            padding:1rem;
            text-align:center;
            border-radius:16px;

            background:
              rgba(255,255,255,0.02);

            border:
              1px solid rgba(255,255,255,0.04);
          }

          .bottom-stats h4{
            font-size:1.4rem;
            color:#F5B731;
            margin-bottom:0.3rem;
            font-weight:800;
          }

          .bottom-stats p{
            color:#8A8A9A;
            font-size:0.8rem;
          }

          .partner-btn,
          .explore-btn{
            display:inline-flex;
            align-items:center;
            justify-content:center;
            gap:0.7rem;

            background:
              linear-gradient(
                135deg,
                #F5B731,
                #d99b00
              );

            color:#111;
            text-decoration:none;

            padding:0.95rem 1.5rem;
            border-radius:14px;

            font-weight:700;
            border:none;
            cursor:pointer;

            transition:0.3s ease;

            box-shadow:
              0 10px 25px rgba(245,183,49,0.2);
          }

          .partner-btn:hover,
          .explore-btn:hover{
            transform:translateY(-4px);

            box-shadow:
              0 16px 35px rgba(245,183,49,0.28);
          }

          .showcase-badge{
            display:inline-flex;
            align-items:center;
            gap:0.5rem;

            padding:0.45rem 1rem;

            border-radius:999px;

            background:
              rgba(245,183,49,0.08);

            border:
              1px solid rgba(245,183,49,0.15);

            margin-bottom:1.5rem;
          }

          .showcase-badge span{
            color:#F5B731;
            font-size:0.8rem;
            font-weight:700;
            letter-spacing:0.08em;
            text-transform:uppercase;
          }

          .showcase-heading{
            font-size:
              clamp(2rem,4vw,3.2rem);

            color:#F0F0F0;
            line-height:1.15;
            font-weight:800;
            margin-bottom:1.2rem;
          }

          .showcase-heading span{
            color:#F5B731;
          }

          .showcase-subtext{
            max-width:760px;
            margin:0 auto;
            color:#8A8A9A;
            font-size:1rem;
            line-height:1.9;
          }

          .college-showcase-grid{
            display:grid;
            grid-template-columns:
              repeat(2,1fr);

            gap:2rem;
          }

          .college-card{
            position:relative;
            overflow:hidden;
            border-radius:28px;

            background:
              linear-gradient(
                135deg,
                rgba(255,255,255,0.03),
                rgba(255,255,255,0.015)
              );

            border:
              1px solid rgba(255,255,255,0.06);

            transition:0.4s ease;
            backdrop-filter:blur(14px);

            box-shadow:
              0 10px 40px rgba(0,0,0,0.35);
          }

          .college-card:hover{
            transform:
              translateY(-10px);

            border:
              1px solid rgba(245,183,49,0.18);

            box-shadow:
              0 20px 60px rgba(0,0,0,0.45),
              0 0 35px rgba(245,183,49,0.08);
          }

          .college-image-wrap{
            position:relative;
            height:260px;
            overflow:hidden;
          }

          .college-image{
            width:100%;
            height:100%;
            object-fit:cover;
            transition:0.5s ease;
          }

          .college-card:hover .college-image{
            transform:scale(1.08);
          }

          .image-overlay{
            position:absolute;
            inset:0;

            background:
              linear-gradient(
                to top,
                rgba(0,0,0,0.75),
                rgba(0,0,0,0.1)
              );
          }

          .college-tag{
            position:absolute;
            top:18px;
            left:18px;

            background:
              rgba(245,183,49,0.12);

            color:#F5B731;

            padding:0.5rem 0.9rem;

            border-radius:999px;

            font-size:0.75rem;
            font-weight:700;

            border:
              1px solid rgba(245,183,49,0.18);

            backdrop-filter:blur(10px);
          }

          .college-content{
            padding:2rem;
          }

          .college-content h3{
            color:#F0F0F0;
            font-size:1.4rem;
            font-weight:700;
            margin-bottom:1rem;
          }

          .college-content p{
            color:#8A8A9A;
            line-height:1.8;
            font-size:0.95rem;
            margin-bottom:1.8rem;
          }

          @media(max-width:900px){

            .collab-grid{
              grid-template-columns:1fr !important;
              gap:3rem !important;
            }

            .college-showcase-grid{
              grid-template-columns:1fr;
            }

          }

          @media(max-width:768px){

            .glass-card{
              padding:2rem;
            }

            .bottom-stats{
              grid-template-columns:1fr;
            }

          }

          @media(max-width:480px){

            section{
              padding:5rem 1.2rem !important;
            }

            .glass-card{
              padding:1.5rem;
              border-radius:22px;
            }

            .college-content{
              padding:1.5rem;
            }

            .college-image-wrap{
              height:220px;
            }

            .top-icon{
              width:64px;
              height:64px;
            }

            .card-title{
              font-size:1.2rem;
            }

            .showcase-heading{
              font-size:2rem;
            }

          }

        `}</style>
      </section>
    </>
  );
}
