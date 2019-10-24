import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
export class MobileNavLink extends React.Component {
  render() {
    return (<div className="navbar-link">
      <a href="/#">
        {this.props.inner}
        <FontAwesomeIcon icon={faChevronRight} size="lg" color="" />
      </a>
    </div>);
  }
}
