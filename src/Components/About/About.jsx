import React from "react";
import "./About.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import javascript from "../../Assets/Images/javascript-development.jpg";
import node from "../../Assets/Images/Node.js-Development.png";
import react from "../../Assets/Images/React-JS-Development.png";
import postgres from "../../Assets/Images/postgres-development.jpg";

const About = () => {
  return (
    <div className="about-page__wrapper">
      <Navbar />
      <div className="hero-section">
        <div className="page-intro">
          <h1>About Me</h1>
          <span>I am a fullstack developer with 3+ years of experience</span>
        </div>
      </div>
      <div className="tech-stack__details">
        <div className="about-me__left">
          <ul>
            <li>
              Skilled in both front-end and back-end development, with expertise
              in popular technologies such as <strong>React</strong>,{" "}
              <strong>Node JS</strong>,<strong>Express</strong>, and{" "}
              <strong>Postgresql</strong>.
            </li>
            <li>
              Proven ability to develop responsive, user-friendly web
              applications from start to finish, including designing and
              implementing RESTful APIs and integrating with third-party
              services.
            </li>
            <li>
              Proficient in writing clean, maintainable code that is optimized
              for performance and scalability, and adheres to industry-standard
              coding practices and security protocols.
            </li>
            <li>
              Strong problem-solving and analytical skills, with a passion for
              learning new technologies and finding innovative solutions to
              complex challenges.
            </li>
            <li>
              Committed to delivering high-quality work on time and within
              budget, with a focus on customer satisfaction and continuous
              improvement.
            </li>
          </ul>
        </div>
        <div className="about-me__right">
          <div className="tech-images">
            <img className="javascript" src={javascript} alt="Javascript" />
            <img className="node" src={node} alt="Node" />
            <img className="react" src={react} alt="React" />
            <img className="postgres" src={postgres} alt="PostgreSql" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
