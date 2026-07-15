import "./FeaturePage.css";
import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaCar,
  FaRulerCombined,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import house1 from "../assets/img/Tridax13.jpeg";
import house2 from "../assets/img/Tridax9.jpeg";
import house3 from "../assets/img/Tridax12.jpeg";
import house4 from "../assets/img/Tridax1.jpeg";
import house5 from "../assets/img/Tridax2.jpeg";
import house6 from "../assets/img/Tridax3.jpeg";

const properties = [
  {
    id: 1,
    title: "Luxury 5 Bedroom Duplex",
    location: "Guzape, Abuja",
    price: "₦180,000,000",
    image: house1,
    status: "For Sale",
    beds: 5,
    baths: 6,
    parking: 4,
    size: "650 sqm",
  },
  {
    id: 2,
    title: "Modern 3 Bedroom Apartment",
    location: "Owerri, Imo State",
    price: "₦95,000,000",
    image: house2,
    status: "For Sale",
    beds: 3,
    baths: 3,
    parking: 2,
    size: "320 sqm",
  },
  {
    id: 3,
    title: "Luxury Terrace Duplex",
    location: "Port Harcourt",
    price: "₦135,000,000",
    image: house3,
    status: "For Sale",
    beds: 4,
    baths: 5,
    parking: 3,
    size: "480 sqm",
  },
  {
    id: 4,
    title: "Executive Family Home",
    location: "Lekki, Lagos",
    price: "₦250,000,000",
    image: house4,
    status: "For Sale",
    beds: 6,
    baths: 6,
    parking: 5,
    size: "850 sqm",
  },
  {
    id: 5,
    title: "Luxury Apartment",
    location: "Asokoro, Abuja",
    price: "₦150,000,000",
    image: house5,
    status: "For Sale",
    beds: 4,
    baths: 4,
    parking: 3,
    size: "540 sqm",
  },
  {
    id: 6,
    title: "Residential Estate",
    location: "Owerri, Imo State",
    price: "₦120,000,000",
    image: house6,
    status: "For Sale",
    beds: 4,
    baths: 4,
    parking: 2,
    size: "450 sqm",
  },
];

function FeaturePage() {
  return (
    <main className="property-page">
      {/* HERO */}

      <section className="property-hero">
        <div className="property-overlay">
          <div className="container">
            <h1>Featured Properties</h1>

            <p>
              Discover premium residential, commercial and investment
              properties carefully selected for you.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="property-intro container">
        <h2>Explore Our Latest Listings</h2>

        <p>
          At Tridax Estates & Property Ltd, we provide verified
          properties that match your lifestyle and investment goals.
          Browse through our featured listings below.
        </p>
      </section>

      {/* PROPERTY GRID */}

      <section className="property-section container">
        <div className="property-grid">
          {properties.map((property) => (
            <div className="property-card" key={property.id}>
              <div className="property-image">
                <img
                  src={property.image}
                  alt={property.title}
                />

                <span className="property-badge">
                  {property.status}
                </span>
              </div>

              <div className="property-content">
                <h3>{property.title}</h3>

                <p className="location">
                  <FaMapMarkerAlt /> {property.location}
                </p>

                <h2 className="price">
                  {property.price}
                </h2>

                <div className="property-info">
                  <span>
                    <FaBed /> {property.beds}
                  </span>

                  <span>
                    <FaBath /> {property.baths}
                  </span>

                  <span>
                    <FaCar /> {property.parking}
                  </span>

                  <span>
                    <FaRulerCombined /> {property.size}
                  </span>
                </div>

                <Link
                  to="/contact"
                  className="property-btn"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="property-cta">
        <div className="container">
          <h2>Looking For Your Dream Property?</h2>

          <p>
            Our professional team is ready to help you find the
            perfect property that matches your budget and lifestyle.
          </p>

          <Link
            to="/contact"
            className="cta-btn"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}

export default FeaturePage;