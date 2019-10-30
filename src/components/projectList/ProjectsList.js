import React from "react";
import { ProjectItem } from "../projectItem/ProjectItem";
export function ProjectsList(props) {
  const projectList = props.projectsArray.map((project, i) => {
    return <ProjectItem key={i} project={project} />;
  });
  return projectList;
}
