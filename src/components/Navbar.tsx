import "./Navbar.css";
import logo from "../assets/img/download.png";
import { Link } from "react-router-dom";

function Navbar() {
  // Get logged in user
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // Get first name only
  const firstName = user?.name ? user.name.split(" ")[0] : "Guest";

  return (
    <header className="site-header">
      <div className="container">

        <Link to="/" className="logo">
          <img src={logo} alt="Tridax Estates Logo" />
          <span>Tridax Estates</span>
        </Link>

        <nav className="nav">
          <ul>
            <li>
              <Link to="/dashboard">Home</Link>
            </li>

            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/properties">Properties</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Logged in user */}
        <div className="user-info">
  Welcome,&nbsp;
  <span>{firstName}</span>
</div>

      </div>
    </header>
  );
}

export default Navbar;