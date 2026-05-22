import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  Twitter
} from "lucide-react";

import "./Contact.css";

function Contact() {

  return (

    <section className="contact-page">

      {/* HERO */}

      <div className="contact-hero">

        <div className="contact-overlay">

          <div className="contact-hero-content">

            <span className="contact-badge">

              🚴 ShivShakti Premium Support

            </span>

            <h1>

              Contact Us

            </h1>

            <p>

              Need help with bicycles,
              delivery, orders or support?
              Our premium support team is
              always ready for you.

            </p>

          </div>

        </div>

      </div>

      {/* MAIN */}

      <div className="contact-container">

        {/* LEFT */}

        <div className="contact-left">

          <h2>
            Get In Touch
          </h2>

          <p>
            Feel free to contact us anytime.
            We usually reply within a few hours.
          </p>

          {/* INFO */}

          <div className="contact-info">

            <div className="info-card">

              <div className="info-icon orange">

                <MapPin size={24} />

              </div>

              <div>

                <h3>
                  Our Location
                </h3>

                <p>
                  Bhauwala, Dehradun,
                  Uttarakhand
                </p>

              </div>

            </div>

            <div className="info-card">

              <div className="info-icon green">

                <Phone size={24} />

              </div>

              <div>

                <h3>
                  Phone Number
                </h3>

                <p>
                  +91 9876543210
                </p>

              </div>

            </div>

            <div className="info-card">

              <div className="info-icon blue">

                <Mail size={24} />

              </div>

              <div>

                <h3>
                  Email Address
                </h3>

                <p>
                  support@shivshaktistore.com
                </p>

              </div>

            </div>

            <div className="info-card">

              <div className="info-icon purple">

                <Clock size={24} />

              </div>

              <div>

                <h3>
                  Working Hours
                </h3>

                <p>
                  Mon - Sat : 9AM - 8PM
                </p>

              </div>

            </div>

          </div>

          {/* SOCIAL */}

          <div className="social-section">

            <h3>
              Follow Us
            </h3>

            <div className="social-icons">

              <a href="/">
                <Facebook size={20} />
              </a>

              <a href="/">
                <Instagram size={20} />
              </a>

              <a href="/">
                <Youtube size={20} />
              </a>

              <a href="/">
                <Twitter size={20} />
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="contact-right">

          <div className="form-top">

            <div className="message-icon">

              <MessageCircle size={34} />

            </div>

            <h2>
              Send Message
            </h2>

            <p>
              We’d love to hear from you.
            </p>

          </div>

          <form className="contact-form">

            <div className="input-row">

              <div className="input-box">

                <input
                  type="text"
                  placeholder="Your Name"
                  required
                />

              </div>

              <div className="input-box">

                <input
                  type="email"
                  placeholder="Your Email"
                  required
                />

              </div>

            </div>

            <div className="input-box">

              <input
                type="text"
                placeholder="Subject"
                required
              />

            </div>

            <div className="input-box textarea-box">

              <textarea
                rows="7"
                placeholder="Write your message..."
                required
              ></textarea>

            </div>

            <button
              type="submit"
              className="send-btn"
            >

              <Send size={18} />

              Send Message

            </button>

          </form>

        </div>

      </div>

    </section>

  );
}

export default Contact;