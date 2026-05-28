import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+91 9822952807",
    href: "tel:+919822952807",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "hellograpiondigital@gmail.com",
    href: "mailto:hellograpiondigital@gmail.com",
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Nagpur, Maharashtra",
    href: "#",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] =
    useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbznXlbkgOap8yAL6JijhTYTby6IkCMlVr2fjkC4tUQ_yrOnIW4gMqpra89C4WhS8PQdgg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "7rem 1.5rem",
        background: "#0B0B0B",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "rgba(29,112,239,0.08)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <p className="contact-subtitle">
            GET IN TOUCH
          </p>

          <h2 className="contact-title">
            Start Your{" "}
            <span>Growth Journey</span>
          </h2>

          <p className="contact-desc">
            Let’s discuss your ideas and
            create powerful digital solutions
            for your business.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card reveal-left">
            <div className="contact-card-glow"></div>

            <h3>Contact Details</h3>

            <p className="left-desc">
              We’re always ready to help your
              business grow digitally.
            </p>

            <div className="contact-list">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="contact-item"
                >
                  <div className="icon-box">
                    {c.icon}
                  </div>

                  <div
                    style={{
                      minWidth: 0,
                      flex: 1,
                    }}
                  >
                    <div className="label">
                      {c.label}
                    </div>

                    <div className="value">
                      {c.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="support-box">
              <div className="support-circle">
                <Phone size={18} />
              </div>

              <div>
                <div className="support-small">
                  Quick Support
                </div>

                <div className="support-big">
                  Available 24/7
                </div>
              </div>
            </div>
          </div>

          <div className="form-box reveal-right">
            {submitted && (
              <div className="success-box">
                <CheckCircle size={18} />
                Message Sent Successfully!
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="form-wrapper"
            >
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder=" "
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    required
                  />
                  <label>Your Name</label>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    placeholder=" "
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                  <label>Email Address</label>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    placeholder=" "
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone: e.target.value,
                      })
                    }
                  />
                  <label>Phone Number</label>
                </div>

                <div className="form-group select-group">
                  <select
                    value={form.service}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        service: e.target.value,
                      })
                    }
                    required
                  >
                    <option
                      value=""
                      disabled
                      hidden
                    ></option>

                    <option>
                      Website Development
                    </option>

                    <option>
                      App Development
                    </option>

                    <option>
                      Digital Marketing
                    </option>

                    <option>
                      SEO Services
                    </option>

                    <option>
                      College Collaboration
                    </option>

                    <option>
                      Courses & Training
                    </option>

                    <option>Other</option>
                  </select>

                  <label>
                    Select Service
                  </label>

                  <ArrowRight
                    className="select-arrow"
                    size={16}
                  />
                </div>
              </div>

              <div className="form-group">
                <textarea
                  rows={5}
                  placeholder=" "
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  required
                />

                <label>
                  Tell us about your project
                </label>
              </div>

              <button
                type="submit"
                className="submit-btn"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        *{
          box-sizing:border-box;
        }

        .contact-subtitle{
          color:#1D70EF;
          font-size:0.8rem;
          font-weight:700;
          letter-spacing:0.12em;
          margin-bottom:1rem;
        }

        .contact-title{
          font-size:
            clamp(2rem,4vw,3.2rem);

          font-weight:800;

          color:#F0F0F0;

          line-height:1.1;

          margin-bottom:1rem;
        }

        .contact-title span{
          background:
            linear-gradient(
              90deg,
              #1D70EF,
              #F5B731
            );

          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .contact-desc{
          max-width:600px;
          margin:0 auto;
          color:#8A8A9A;
          line-height:1.8;
        }

        .contact-grid{
          display:grid;
          grid-template-columns:
            1fr 1.4fr;

          gap:2rem;
        }

        .contact-card,
        .form-box{
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.03),
              rgba(255,255,255,0.01)
            );

          border:
            1px solid rgba(255,255,255,0.06);

          border-radius:28px;

          padding:2rem;

          backdrop-filter:blur(14px);

          position:relative;

          overflow:hidden;
        }

        .contact-card-glow{
          position:absolute;
          top:-80px;
          right:-80px;

          width:180px;
          height:180px;

          border-radius:50%;

          background:
            rgba(29,112,239,0.08);

          filter:blur(70px);
        }

        .contact-card h3{
          color:#F0F0F0;
          font-size:1.4rem;
          margin-bottom:0.8rem;
        }

        .left-desc{
          color:#8A8A9A;
          line-height:1.7;
          margin-bottom:2rem;
        }

        .contact-list{
          display:flex;
          flex-direction:column;
          gap:1rem;
        }

        .contact-item{
          display:flex;
          gap:1rem;

          padding:1rem;

          border-radius:16px;

          text-decoration:none;

          background:
            rgba(255,255,255,0.02);

          border:
            1px solid rgba(255,255,255,0.03);

          transition:0.3s ease;

          min-width:0;
        }

        .contact-item:hover{
          transform:translateY(-4px);

          border:
            1px solid rgba(29,112,239,0.12);

          background:
            rgba(29,112,239,0.03);
        }

        .icon-box{
          width:50px;
          height:50px;

          border-radius:14px;

          background:
            rgba(29,112,239,0.1);

          color:#1D70EF;

          display:flex;
          align-items:center;
          justify-content:center;

          flex-shrink:0;
        }

        .label{
          color:#8A8A9A;
          font-size:0.78rem;
          margin-bottom:0.2rem;
        }

        .value{
          color:#F0F0F0;
          font-size:0.95rem;
          font-weight:500;

          word-break:break-word;
          overflow-wrap:break-word;
        }

        .support-box{
          margin-top:2rem;

          display:flex;
          align-items:center;
          gap:1rem;

          padding:1rem;

          border-radius:18px;

          background:
            linear-gradient(
              135deg,
              rgba(29,112,239,0.08),
              rgba(245,183,49,0.05)
            );

          border:
            1px solid rgba(29,112,239,0.1);
        }

        .support-circle{
          width:48px;
          height:48px;

          border-radius:50%;

          background:#1D70EF;

          display:flex;
          align-items:center;
          justify-content:center;

          color:white;
        }

        .support-small{
          color:#8A8A9A;
          font-size:0.8rem;
        }

        .support-big{
          color:#F0F0F0;
          font-weight:700;
        }

        .form-wrapper{
          display:flex;
          flex-direction:column;
          gap:1.2rem;
        }

        .form-row{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:1rem;
        }

        .form-group{
          position:relative;
        }

        input,
        textarea,
        select{
          width:100%;

          background:
            rgba(255,255,255,0.02);

          border:
            1px solid rgba(255,255,255,0.06);

          border-radius:14px;

          padding:
            1rem;

          color:white;

          outline:none;

          font-size:0.95rem;

          transition:0.25s ease;
        }

        textarea{
          resize:none;
        }

        input:focus,
        textarea:focus,
        select:focus{
          border:
            1px solid rgba(29,112,239,0.45);

          box-shadow:
            0 0 0 4px rgba(29,112,239,0.08);
        }

        label{
          position:absolute;

          left:14px;
          top:16px;

          color:#8A8A9A;

          pointer-events:none;

          transition:0.2s ease;

          background:#111;

          padding:0 5px;
        }

        input:focus + label,
        input:not(:placeholder-shown) + label,
        textarea:focus + label,
        textarea:not(:placeholder-shown) + label,
        select:focus + label,
        select:valid + label{
          top:-9px;

          font-size:0.72rem;

          color:#1D70EF;
        }

        .select-group{
          position:relative;
        }

        .select-group select{
          appearance:none;
          padding-right:42px;
        }

        .select-group select option{
  background:#0B0B0B;
  color:white;
}

        .select-arrow{
          position:absolute;

          right:14px;
          top:50%;

          transform:
            translateY(-50%)
            rotate(90deg);

          color:#1D70EF;

          pointer-events:none;
        }

        .submit-btn{
          margin-top:0.5rem;

          height:54px;

          border:none;

          border-radius:16px;

          background:
            linear-gradient(
              135deg,
              #1D70EF,
              #1559bf
            );

          color:white;

          font-weight:700;

          display:flex;
          align-items:center;
          justify-content:center;
          gap:0.7rem;

          cursor:pointer;

          transition:0.3s ease;

          box-shadow:
            0 12px 30px rgba(29,112,239,0.25);
        }

        .submit-btn:hover{
          transform:translateY(-4px);

          box-shadow:
            0 18px 40px rgba(29,112,239,0.35);
        }

        .success-box{
          margin-bottom:1rem;

          display:flex;
          align-items:center;
          gap:0.5rem;

          padding:1rem;

          border-radius:14px;

          background:
            rgba(34,197,94,0.08);

          border:
            1px solid rgba(34,197,94,0.18);

          color:#22c55e;

          font-weight:600;
        }

        @media(max-width:900px){
          .contact-grid{
            grid-template-columns:1fr;
          }
        }

        @media(max-width:768px){
          .form-row{
            grid-template-columns:1fr;
          }

          .contact-card,
          .form-box{
            padding:1.5rem;
            border-radius:22px;
          }
        }

        @media(max-width:480px){
          section{
            padding:5rem 1rem !important;
          }

          .contact-title{
            font-size:2rem;
          }

          .contact-card,
          .form-box{
            padding:1.2rem;
          }

          input,
          textarea,
          select{
            font-size:0.9rem;
          }

          .value{
            font-size:0.85rem;
          }
        }
      `}</style>
    </section>
  );
}