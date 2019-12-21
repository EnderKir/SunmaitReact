import React from "react";

import { ProjectItem } from "../projectItem/ProjectItem";

export const ProjectsList = ({ projectsArray }) => {
  const projectList = projectsArray.map((project, i) => {
    return <ProjectItem key={i} project={project} />;
  });
  // if (projectList.length > 0) {
  //   return projectList;
  // } else {
  //   return <h2 style={{ justifyItems: "center" }}>No Mathes</h2>;
  // }
  return projectList;
};
