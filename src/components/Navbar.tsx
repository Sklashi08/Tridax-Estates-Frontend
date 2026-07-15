import "./Navbar.css";
import logo from "../assets/img/download.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <a className="logo" href="#">
            <img src={logo} alt="Tridax Estates Logo" />
            <span>Tridax Estates</span>
          </a>
          <nav aria-label="Main Navigation" className="nav">
            <ul>
              <Link to="/">
                <a href="#">Home</a>
              </Link>
              <Link to="/about">
                <a href="#about">About Us</a>
              </Link>
              <Link to="/services">
                <a href="#services">Services</a>
              </Link>
              <Link to="/properties">
                <a href="#">Properties</a>
              </Link>
              <Link to="/contact">
                <a href="#">Contact</a>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
