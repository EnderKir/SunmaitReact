import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
export function NavSearch(props) {
  return (
    <li key={"sIcon"} className="navbar-link">
      {props.searchFlag ? (
        <a href="/#" onClick={props.closeSearchDropdown}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </a>
      ) : (
        <a href="/#" onClick={props.openSearchDropdown}>
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </a>
      )}
    </li>
  );
}
