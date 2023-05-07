import React from "react";
import "./Homepage.css";
import HeroSection from "../Components/HeroSection/HeroSection";
import Navbar from "../Components/Navbar/Navbar";

const Homepage = () => {
  return (
    <div className="homepage__container">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Homepage;
