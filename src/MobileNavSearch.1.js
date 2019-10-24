import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export class MobileNavSearch extends React.Component {
  render() {
    return (<div className="mobile-search-container">
      <input className="search-query" name="q" placeholder="Search..." type="text" defaultValue="" />
      <button className="searсh-button">
        <FontAwesomeIcon icon={faSearch} size="lg" color="" />
      </button>
    </div>);
  }
}
