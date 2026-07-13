import "./Property.css";
import house1 from "../assets/img/Tridax13.jpeg";
import house2 from "../assets/img/Tridax9.jpeg";
import house3 from "../assets/img/Tridax12.jpeg";

function Features() {
  return (
    <section id="properties" className="section">
      <div className="container">
        <h2>Featured Properties</h2>

        <div className="grid">
          <div className="property-card">
            <img src={house1} alt="" />

            <div className="property-content">
              <h3>3 Bedroom Duplex</h3>

              <p>Guzape, Abuja</p>

              <div className="price">₦180,000,000</div>

              <a href="#" className="btn">
                View Details
              </a>
            </div>
          </div>

          <div className="property-card">
            <img src={house2} alt="" />

            <div className="property-content">
              <h3>Luxury Apartment</h3>

              <p>Owerri, Imo State</p>

              <div className="price">₦95,000,000</div>

              <a href="#" className="btn">
                View Details
              </a>
            </div>
          </div>
          <div className="property-card">
            <img src={house3} alt="" />

            <div className="property-content">
              <h3>Luxury Apartment</h3>

              <p>Owerri, Imo State</p>

              <div className="price">₦95,000,000</div>

              <a href="#" className="btn">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
