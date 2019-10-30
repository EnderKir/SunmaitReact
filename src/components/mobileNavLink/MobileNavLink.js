import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export function MobileNavLink(props) {
  return (
    <div className="navbar-link">
      <Link to={props.path}>
        {props.inner}
        <FontAwesomeIcon icon={faChevronRight} size="lg" color="" />
      </Link>
    </div>
  );
}
