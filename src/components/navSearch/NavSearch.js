import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export function NavSearch(props) {
  return (
    <li key={"sIcon"} className="navbar-link">
      {props.searchFlag ? (
        <Link to="/#" onClick={props.closeSearchDropdown}>
          {props.inner}
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </Link>
      ) : (
        <Link to="/#" onClick={props.openSearchDropdown}>
          {props.inner}
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </Link>
      )}
    </li>
  );
}
