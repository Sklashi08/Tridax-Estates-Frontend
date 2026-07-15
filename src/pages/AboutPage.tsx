import "./AboutPage.css";
import aboutImage from "../assets/img/Tridax8.jpeg";
import {
  FaHome,
  FaHandshake,
  FaBuilding,
  FaUsers,
  FaAward,
  FaMapMarkedAlt,
} from "react-icons/fa";

function AboutPage() {
  return (
    
    <main className="about-page">
      {/* Hero */}

      <section className="about-hero">
        <div className="about-overlay">
          <div className="container">
            <h1>About Tridax Estates & Property Ltd</h1>

            <p>
              Building trust through premium real estate solutions and
              exceptional customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}

      <section className="about-story container">
        <div className="story-image">
          <img src={aboutImage} alt="Tridax Estates" />
        </div>

        <div className="story-content">
          <h2>Who We Are</h2>

          <p>
            Tridax Estates & Property Ltd is a trusted real estate company
            dedicated to helping individuals, families, and investors buy, sell,
            lease, and manage premium properties across Nigeria.
          </p>

          <p>
            Our team combines professionalism, market expertise, and integrity
            to provide seamless real estate experiences. Whether you are buying
            your first home or expanding your investment portfolio, we are
            committed to delivering excellent service every step of the way.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}

      <section className="mission-section">
        <div className="container mission-grid">
          <div className="mission-card">
            <FaHome />

            <h3>Our Mission</h3>

            <p>
              To provide reliable, transparent, and innovative real estate
              solutions that exceed our clients' expectations.
            </p>
          </div>

          <div className="mission-card">
            <FaBuilding />

            <h3>Our Vision</h3>

            <p>
              To become one of Nigeria's most trusted and respected real estate
              companies known for excellence and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}

      <section className="why-us container">
        <h2>Why Choose Tridax Estates?</h2>

        <div className="features-grid">
          <div className="feature-card">
            <FaHandshake />

            <h3>Trusted Service</h3>

            <p>
              Honest advice, transparent transactions, and complete customer
              satisfaction.
            </p>
          </div>

          <div className="feature-card">
            <FaAward />

            <h3>Professional Team</h3>

            <p>
              Experienced professionals committed to helping clients make the
              best property decisions.
            </p>
          </div>

          <div className="feature-card">
            <FaUsers />

            <h3>Customer Focused</h3>

            <p>
              We place our clients first by providing personalized solutions
              tailored to their needs.
            </p>
          </div>

          <div className="feature-card">
            <FaMapMarkedAlt />

            <h3>Prime Locations</h3>

            <p>
              Access to premium residential, commercial, and investment
              properties in strategic locations.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}

      <section className="stats-section">
        <div className="container stats-grid">
          <div>
            <h2>500+</h2>

            <p>Happy Clients</p>
          </div>

          <div>
            <h2>300+</h2>

            <p>Properties Sold</p>
          </div>

          <div>
            <h2>10+</h2>

            <p>Years Experience</p>
          </div>

          <div>
            <h2>100%</h2>

            <p>Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="about-cta">
        <div className="container">
          <h2>Ready to Find Your Dream Property?</h2>

          <p>Let Tridax Estates help you make the right investment today.</p>

          <a href="/contact" className="about-btn">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
