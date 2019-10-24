import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export class SearchDropdown extends React.Component {
  render() {
    return (
      <div className="search-dropdown" id="search-dropdown">
        <input
          className="search-query"
          name="q"
          placeholder="Search for documentation, guides, and posts..."
          type="text"
          defaultValue=""
        />
        <button className="searсh-button">
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </button>
      </div>
    );
  }
}
