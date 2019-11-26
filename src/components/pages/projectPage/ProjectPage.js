import React from "react";

import { ProjectsContainer } from "../../projectContainer/ProjectsContainer";

import "./projectPage.css";

export const ProjectPage = ({ projectsArray }) => {
  return (
    <div className="body-container">
      <main className="main-body">
        <h1>Main Projects</h1>
        <p className="about">
          From configuration to security, web apps to big data – whatever the
          infrastructure needs of your application may be, there is a{" "}
          <strong>Spring Project</strong> to help you build it. Start small and
          use just what you need – <strong>Spring is modular by design</strong>.
        </p>
        {(projectsArray.length === 0 && <h2>No Matches Found</h2>)}
        <ProjectsContainer projectsArray={projectsArray} />
      </main>
    </div>
  );
};
