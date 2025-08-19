import React, { useState } from "react";
import '../css/navbar.css';
import Logo from "../../assets/mohangrrenslogo.png";
import 'remixicon/fonts/remixicon.css';

function Navbar({ onBrochureClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <img src={Logo} alt="Mohan Greens" className="logo" />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
      </div>

      {/* Center: Navigation Links */}
      <div className={`navbar-center ${isMenuOpen ? "open" : ""}`}>
        <div className="nav-item"><i className="ri-home-9-line"></i> Home</div>
        <a href="#price"><div className="nav-item"><i className="ri-money-rupee-circle-line"></i> Price</div></a>
        <a href="#site-plan"><div className="nav-item"><i className="ri-building-line"></i> Site Plan</div></a>
        <a href="#amenities"><div className="nav-item"><i className="ri-wifi-line"></i> Amenities</div></a>
        <a href="#location"><div className="nav-item"><i className="ri-map-pin-2-line"></i> Location</div></a>
        <div className="nav-item" onClick={onBrochureClick}><i className="ri-download-2-line"></i> Brochure</div>
      </div>
    </nav>
  );
}

export default Navbar;
