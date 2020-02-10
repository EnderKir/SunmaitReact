import React from "react";

import "./projectItem.css";

export const ProjectItem = ({ project }) => {
  return (
    <div className="project">
      <div className="project-logo-container">
        <div className={[project.iconClass, "icon"].join(" ")}></div>
      </div>
      <div className="project-title">{project.projectTitle}</div>
      <p className="project-description">{project.projectDescription}</p>
    </div>
  );
};
