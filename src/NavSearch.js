import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
export class NavSearch extends React.Component {
  render() {
    return (
      <li key={"sIcon"} className="navbar-link">
        {this.props.searchFlag ? (
          <a href="/#" onClick={this.props.closeSearchDropdown}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </a>
        ) : (
          <a href="/#" onClick={this.props.openSearchDropdown}>
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </a>
        )}
      </li>
    );
  }
}
