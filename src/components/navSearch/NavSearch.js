import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const NavSearch = () => {
  const dispatch = useDispatch();
  const { searchFlag } = useSelector(state => ({
    searchFlag: state.searchDropdownCondition.isSearchDropdownOpen,
  }));
  return (
    <li key={"sIcon"}>
      {searchFlag ? (
        <Link
          to="#"
          onClick={() => dispatch({ type: "CLOSE_SEARCH_DROPDOWN" })}
          className="navbar-link"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </Link>
      ) : (
        <Link
          to="#"
          onClick={() => dispatch({ type: "OPEN_SEARCH_DROPDOWN" })}
          className="navbar-link"
        >
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </Link>
      )}
    </li>
  );
};
