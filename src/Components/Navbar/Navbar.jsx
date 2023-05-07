import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const clickHam = () => {
    setClick((prevValue) => (prevValue = true));
  };

  const hideNav = () => {
    setClick((prevValue) => (prevValue = false));
  };

  return (
    <div className="navbar-container">
      <div className="banner">
        <Link to="/">
          <h1>Portfolio</h1>
        </Link>
      </div>
      <div className="nav-links">
        <ul className={click ? "responsive-ul" : "list"}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
        <i
          className={`fa-solid fa-bars ${click ? "hidden" : ""}`}
          onClick={clickHam}
        />
        <i
          className={`fa-solid fa-xmark ${click ? "show" : "hidden"}`}
          onClick={hideNav}
        />
      </div>
    </div>
  );
};

export default Navbar;
