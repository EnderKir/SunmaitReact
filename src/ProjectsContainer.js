import React from "react";
import { ProjectsList } from "./ProjectsList";
export class ProjectsContainer extends React.Component {
  render() {
    return (
      <div className="projects" id="projects">
        <ProjectsList projectsArray={this.props.projectsArray} />
      </div>
    );
  }
}
