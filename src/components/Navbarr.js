import React from "react";
import { Link, useLocation } from "react-router-dom";
const Navbarr = () => {
  return (
    <header className="nav">
      <div className="nav__logo">
        <span className="nav__logo-main">Game</span>
        <span className="nav__logo-sub">App</span>
      </div>
      <nav className="nav__links">
        <Link to="/" >
          Home
        </Link>
        <Link
          to="/Contact"
          
        >
          Contact
        </Link>
      </nav>
      <button className="nav__cta">Explore</button>
    </header>
  );
};
export default Navbarr;