import { Button, Typography } from "@mui/material";
import React from "react";
import "./ProjectStyle.css";
import { AiOutlineProject } from "react-icons/ai";
import { FaRegSmileWink } from "react-icons/fa";
import { Delete } from "@mui/icons-material";
import uday from "../../images/uday_foundation.png";

const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
}) => {
  return (
    <>
      <a href={url} className="projectCard" target="_blank" rel="noreferrer">
        {/* <a href={url} className="projectCard" target="black" rel="noreferrer"> */}
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4">About the Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button>
          <Delete></Delete>
        </Button>
      )}
    </>
  );
};

const Projects = () => {
  const projects = [1, 2];

  return (
    <div className="projects">
      <Typography variant="h3">
        Galaxy of Projects <AiOutlineProject />
      </Typography>
      <div className="projectsWrapper">
        {projects.map((project, index) => (
          <ProjectCard
            url="https://relaxed-dijkstra-bb0497.netlify.app/"
            projectImage={uday}
            projectTitle="Uday Foundation"
            description="This is a website development made for a NGO operating in India."
            technologies="We have used HTML, CSS and Javascript to complete this website."
          />
        ))}
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
