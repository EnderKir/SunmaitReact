import React from "react";
export function ProjectItem(props) {
  return (
    <div className="project">
      <div className="project-logo-container">
        <div
          className={[props.project.iconClass, "icon"].join(" ")}
        ></div>
      </div>
      <div className="project-title">{props.project.projectTitle}</div>
      <p className="project-description">
        {props.project.projectDescription}
      </p>
    </div>
  );
}
