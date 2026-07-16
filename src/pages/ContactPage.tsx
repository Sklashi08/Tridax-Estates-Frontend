import { Link } from "react-router-dom";
import "./ContactPage.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <main className="contact-page">
      {/* HERO */}

      <section className="contact-hero">
        <div className="contact-overlay">
          <div className="container">
            <h1>Contact Us</h1>

            <p>
              We'd love to hear from you. Reach out to us for inquiries,
              property inspections, or investment opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}

      <section className="contact-section container">
        {/* LEFT */}

        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>
            Our team is always available to answer your questions and guide you
            through every step of your real estate journey.
          </p>

          <div className="info-card">
            <FaMapMarkerAlt />

            <div>
              <h3>Office Address</h3>

              <p>Owerri, Imo State, Nigeria.</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhoneAlt />

            <div>
              <h3>Phone</h3>

              <p>+234 706 362 1821</p>
            </div>
          </div>

          <div className="info-card">
            <FaEnvelope />

            <div>
              <h3>Email</h3>

              <p>tridaxestates@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaClock />

            <div>
              <h3>Office Hours</h3>

              <p>Mon - Fri: 8:00AM - 5:00PM</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="contact-form">
          <h2>Send Us A Message</h2>

          <form>
            <input type="text" placeholder="Full Name" />

            <input type="email" placeholder="Email Address" />

            <input type="tel" placeholder="Phone Number" />

            <input type="text" placeholder="Subject" />

            <textarea rows={6} placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* GOOGLE MAP */}

      <section className="map-section">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Owerri,%20Imo%20State&output=embed"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </section>

      {/* CTA */}

      <section className="contact-cta">
        <div className="container">
          <h2>Ready to Find Your Dream Property?</h2>

          <p>Let Tridax Estates help you make the right investment.</p>

          <Link to="/properties">Browse Properties</Link>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
