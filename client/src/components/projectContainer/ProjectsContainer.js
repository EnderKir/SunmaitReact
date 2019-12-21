import React from "react";

import { ProjectsList } from "../projectList/ProjectsList";

import "./projectsContainer.css";

export const ProjectsContainer = ({ projectsArray }) => {
  return (
    <div className="projects" id="projects">
      <ProjectsList projectsArray={projectsArray} />
    </div>
  );
};
