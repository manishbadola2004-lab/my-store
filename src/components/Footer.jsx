import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

import "./Footer.css";

function Footer() {

  return (

    <footer className="footer">

      {/* TOP */}

      <div className="footer-container">

        {/* =========================================
            LEFT SIDE
        ========================================= */}

        <div className="footer-box footer-brand">

          {/* LOGO */}

          <Link
            to="/"
            className="footer-logo"
          >

            🚴 ShivShakti

          </Link>

          <p className="footer-text">

            Premium bicycles with amazing
            quality, stylish design and
            fast delivery across India.

          </p>

          {/* TAGLINE */}

          <div className="footer-tagline">

            Premium Quality • Best Deals • Fast Delivery

          </div>

          {/* SOCIAL ICONS */}

          <div className="social-icons">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >

              <FaFacebookF />

            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >

              <FaInstagram />

            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
            >

              <FaYoutube />

            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >

              <FaTwitter />

            </a>

          </div>

        </div>

        {/* =========================================
            QUICK LINKS
        ========================================= */}

        <div className="footer-box">

          <h3>
            Quick Links
          </h3>

          <ul>

            <li>

              <Link to="/">
                Home
              </Link>

            </li>

            <li>

              <Link to="/products">
                Products
              </Link>

            </li>

            <li>

              <Link to="/about">
                About
              </Link>

            </li>

            <li>

              <Link to="/contact">
                Contact
              </Link>

            </li>

          </ul>

        </div>

        {/* =========================================
            CUSTOMER SUPPORT
        ========================================= */}

        <div className="footer-box">

          <h3>
            Customer Support
          </h3>

          <ul>

            <li>

              <Link to="/help">
                Help Center
              </Link>

            </li>

            <li>

              <Link to="/returns">
                Returns
              </Link>

            </li>

            <li>

              <Link to="/shipping">
                Shipping
              </Link>

            </li>

            <li>

              <Link to="/privacy">
                Privacy Policy
              </Link>

            </li>

          </ul>

        </div>

        {/* =========================================
            CONTACT
        ========================================= */}

        <div className="footer-box">

          <h3>
            Contact Us
          </h3>

          <div className="contact-item">

            <FaMapMarkerAlt />

            <span>
              BhauwalaChouck, Dehradun, India
            </span>

          </div>

          <div className="contact-item">

            <FaPhoneAlt />

            <span>
              +91 9876543210
            </span>

          </div>

          <div className="contact-item">

            <FaEnvelope />

            <span>
              support@shivshakti.com
            </span>

          </div>

        </div>

      </div>

      {/* =========================================
          BOTTOM
      ========================================= */}

      <div className="footer-bottom">

        <p>

          © 2026 ShivShakti Bicycle Store.
          All Rights Reserved.

        </p>

      </div>

    </footer>
  );
}

export default Footer;