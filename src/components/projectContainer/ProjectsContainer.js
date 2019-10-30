import React from "react";
import { ProjectsList } from "../projectList/ProjectsList";
export function ProjectsContainer(props) {
  return (
    <div className="projects" id="projects">
      <ProjectsList projectsArray={props.projectsArray} />
    </div>
  );
}
