import React from "react";
export class ProjectItem extends React.Component {
  render() {
    return (
      <div className="project">
        <div className="project-logo-container">
          <div
            className={[this.props.project.iconClass, "icon"].join(" ")}
          ></div>
        </div>
        <div className="project-title">{this.props.project.projectTitle}</div>
        <p className="project-description">
          {this.props.project.projectDescription}
        </p>
      </div>
    );
  }
}
