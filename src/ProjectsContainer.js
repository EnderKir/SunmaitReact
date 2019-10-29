import React from "react";
import { ProjectsList } from "./ProjectsList";
export function ProjectsContainer(props) {
  return (
    <div className="projects" id="projects">
      <ProjectsList projectsArray={props.projectsArray} />
    </div>
  );
}
