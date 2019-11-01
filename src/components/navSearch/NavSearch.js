import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export const NavSearch = ({
  searchFlag,
  closeSearchDropdown,
  openSearchDropdown
}) => {
  return (
    <li key={"sIcon"}>
      {searchFlag ? (
        <Link to="#" onClick={closeSearchDropdown} className="navbar-link">
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </Link>
      ) : (
        <Link to="#" onClick={openSearchDropdown} className="navbar-link">
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </Link>
      )}
    </li>
  );
};
