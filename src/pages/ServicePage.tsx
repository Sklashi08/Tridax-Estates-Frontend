import "./ServicePage.css";

import {
  FaHome,
  FaBuilding,
  FaChartLine,
  FaKey,
  FaClipboardCheck,
  FaUsers,
} from "react-icons/fa";

import sales from "../assets/img/Tridax1.jpeg";
import management from "../assets/img/Tridax2.jpeg";
import advisory from "../assets/img/Tridax3.jpeg";

import { Link } from "react-router-dom";

function ServicePage() {
  const services = [
    {
      icon: <FaHome />,
      image: sales,
      title: "Property Sales",
      description:
        "We help clients buy and sell residential, commercial and investment properties with complete transparency.",
    },

    {
      icon: <FaBuilding />,
      image: management,
      title: "Property Management",
      description:
        "Professional property management for landlords, developers and investors.",
    },

    {
      icon: <FaChartLine />,
      image: advisory,
      title: "Investment Advisory",
      description:
        "Helping investors identify profitable real estate opportunities.",
    },

    {
      icon: <FaKey />,
      image: sales,
      title: "Property Leasing",
      description:
        "Residential and commercial leasing services tailored to your needs.",
    },

    {
      icon: <FaClipboardCheck />,
      image: management,
      title: "Property Documentation",
      description:
        "Verification, title documentation and legal support for property transactions.",
    },

    {
      icon: <FaUsers />,
      image: advisory,
      title: "Real Estate Consulting",
      description:
        "Professional guidance for individuals, businesses and organizations.",
    },
  ];

  return (
    <main className="service-page">
      {/* HERO */}

      <section className="service-hero">
        <div className="service-overlay">
          <div className="container">
            <h1>Our Services</h1>

            <p>
              Delivering premium real estate solutions that create value,
              security and long-term investment opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="service-intro container">
        <h2>Professional Real Estate Services</h2>

        <p>
          At Tridax Estates & Property Ltd, we provide a wide range of
          professional real estate services designed to help individuals,
          families and businesses achieve their property goals.
        </p>
      </section>

      {/* SERVICES */}

      <section className="services-grid container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />

            <div className="service-content">
              <span>{service.icon}</span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* WHY CHOOSE */}

      <section className="why-section">
        <div className="container">
          <h2>Why Choose Tridax Estates?</h2>

          <div className="why-grid">
            <div>
              <h3>Trusted Professionals</h3>

              <p>Experienced team with years of industry knowledge.</p>
            </div>

            <div>
              <h3>Verified Properties</h3>

              <p>
                We ensure every property is carefully verified before listing.
              </p>
            </div>

            <div>
              <h3>Excellent Customer Support</h3>

              <p>
                Dedicated support before, during and after every transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="process container">
        <h2>Our Working Process</h2>

        <div className="process-grid">
          <div>
            <h1>01</h1>

            <h3>Consultation</h3>

            <p>We understand your property needs.</p>
          </div>

          <div>
            <h1>02</h1>

            <h3>Property Search</h3>

            <p>We identify suitable investment opportunities.</p>
          </div>

          <div>
            <h1>03</h1>

            <h3>Documentation</h3>

            <p>We ensure secure and transparent documentation.</p>
          </div>

          <div>
            <h1>04</h1>

            <h3>Successful Delivery</h3>

            <p>Your satisfaction is our highest priority.</p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="service-cta">
        <div className="container">
          <h2>Ready To Work With Us?</h2>

          <p>
            Contact our professional team today and let's help you make the best
            real estate decision.
          </p>

          <Link to="/contact">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}

export default ServicePage;
