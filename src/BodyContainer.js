import React from "react";
import { projectsArray } from "./projectsArray";
import { ProjectsContainer } from "./ProjectsContainer";
export class BodyContainer extends React.Component {
  render() {
    return (
      <div className="body-container">
        <main className="main-body">
          <h1>Main Projects</h1>
          <p className="about">
            From configuration to security, web apps to big data – whatever the
            infrastructure needs of your application may be, there is a{" "}
            <strong>Spring Project</strong> to help you build it. Start small
            and use just what you need –{" "}
            <strong>Spring is modular by design</strong>.
          </p>
          <ProjectsContainer projectsArray={projectsArray} />
        </main>
      </div>
    );
  }
}
