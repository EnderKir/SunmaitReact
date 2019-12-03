import React from "react";
import { useSelector } from "react-redux";

import { ProjectsContainer } from "../../projectContainer/ProjectsContainer";

import "./projectPage.css";

export const ProjectPage = ({ projectsArray }) => {
  const { loggedFlag } = useSelector(state => ({
    loggedFlag: state.loggedCondition.isLogged
  }));
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
        {projectsArray.length === 0 && <h2>No Matches Found</h2>}
        <div>
          {loggedFlag ? (
            <ProjectsContainer projectsArray={projectsArray} />
          ) : (
            <h2>To view the list of projects you need to Log In</h2>
          )}
        </div>
      </main>
    </div>
  );
};
