import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Company */}
        <div className="footer-section">
          <h2>Tridax Estates</h2>
          <p>
            Helping you find premium homes, lands, and investment opportunities
            with trust and excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>

          <p>
            <FaMapMarkerAlt /> Owerri,Imo State,Nigeria.
          </p>

          <p>
            <FaPhoneAlt /> +234 7063621821.
          </p>

          <p>
            <FaEnvelope /> tridaxestates@gmail.com
          </p>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Tridax Estates & Property Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
