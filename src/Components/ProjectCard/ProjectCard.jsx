import React from "react";
import "./ProjectCard.css";
import cryptoverse from "../../Assets/Images/Cryptoverse.png";
import amazon from "../../Assets/Images/amazon.png";
import todo from "../../Assets/Images/todo.png";
import weather from "../../Assets/Images/weather.png";
import fitnessShrine from "../../Assets/Images/fitnessShrine.png";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card__container">
      <div className="thumbnail__container">
        {project.title === "Amazon Clone" ? (
          <img src={amazon} alt="Amazon Clone" />
        ) : (
          ""
        )}
        {project.title === "Cryptoverse" ? (
          <img src={cryptoverse} alt="Cryptoverse" />
        ) : (
          ""
        )}
        {project.title === "Todo App" ? <img src={todo} alt="Todo app" /> : ""}
        {project.title === "42Degree" ? (
          <img src={weather} alt="Weather application" />
        ) : (
          ""
        )}
        {project.title === "Fitness Shrine" ? (
          <img src={fitnessShrine} alt="Fitness Shrine" />
        ) : (
          ""
        )}
      </div>
      <div className="project-details">
        <h2>{project.title}</h2>
        <span>{project.description}</span>
      </div>
      <div className="btn-action">
        <a href={project.siteUrl} target="__blank">
          <button className="btn btn-view">View</button>
        </a>
        <a href={project.source} target="__blank">
          <button className="btn btn-source">Source</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
