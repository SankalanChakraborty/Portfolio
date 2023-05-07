import React from "react";
import "./Projects.css";
import { projects } from "../Utils/Projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="projects__wrapper">
        <div className="hero-section">
          <h1>My Projects</h1>
        </div>
        <div className="my-projects__container">
          {projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
