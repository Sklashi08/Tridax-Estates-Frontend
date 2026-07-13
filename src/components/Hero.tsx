import "./Hero.css";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome to Tridax Estates & Property Ltd</h1>

            <p>Your trusted partner in property investment and management.</p>

            <a href="#properties" className="btn">
              View Listings
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
