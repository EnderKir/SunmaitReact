import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
export function MobileNavLink(props) {
  return (
    <div className="navbar-link">
      <a href="/#">
        {props.inner}
        <FontAwesomeIcon icon={faChevronRight} size="lg" color="" />
      </a>
    </div>
  );
}
