import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./searchDropdown.css";

export const SearchDropdown = () => {
  const { searchFlag } = useSelector(state => ({
    searchFlag: state.searchDropdownCondition.isSearchDropdownOpen
  }));
  const dispatch = useDispatch();
  return (
    <div
      className="search-dropdown"
      id="search-dropdown"
      style={{ top: searchFlag ? "72px" : "-100px" }}
    >
      <input
        className="search-query"
        name="q"
        placeholder="Search for documentation, guides, and posts..."
        type="text"
        defaultValue=""
        onChange={e => {
          dispatch({ type: "CHANGE_INPUT_VALUE", value: e.target.value });
        }}
      />
      <button className="searсh-button">
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </button>
    </div>
  );
};
