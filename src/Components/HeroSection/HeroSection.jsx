import React from "react";
import "./HeroSection.css";
import photo from "../../Assets/Images/photo.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section__container">
        <div className="mask">
          <img src={photo} alt="banner" />
        </div>
        <div className="intro">
          <h2>Hello I'm Sankalan Chakraborty</h2>
          <h1>Full Stack Developer</h1>
          <div className="btn-action">
            <Link to="/projects">
              <button className="btn btn-projects">Projects</button>
            </Link>
            <Link to="/contact">
              <button className="btn btn-contact">Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
