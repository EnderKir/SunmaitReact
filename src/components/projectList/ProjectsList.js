import React from "react";
import { ProjectItem } from "../projectItem/ProjectItem";
export const ProjectsList = ({ projectsArray }) => {
  const projectList = projectsArray.map((project, i) => {
    return <ProjectItem key={i} project={project} />;
  });
  return projectList;
};
