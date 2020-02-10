import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { debounce } from "lodash";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./mobileNavSearch.css";

export const MobileNavSearch = () => {
  const handleChange = debounce(inputText => {
    dispatch({ type: "CHANGE_INPUT_VALUE", value: inputText });
  }, 500);
  const dispatch = useDispatch();
  return (
    <div className="mobile-search-container">
      <input
        className="search-query"
        name="q"
        placeholder="Search..."
        type="text"
        defaultValue=""
        onChange={e => handleChange(e.target.value)}
      />
      <NavLink to="/projects" className="mobile-searсh-button">
        <FontAwesomeIcon icon={faSearch} size="lg" color="#515151" />
      </NavLink>
    </div>
  );
};
