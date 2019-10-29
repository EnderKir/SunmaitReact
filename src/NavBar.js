import React from "react";
import { NavLink } from "./NavLink";
import { NavSearch } from "./NavSearch";
export function NavBar(props) {
  return (
    <ul className="navbar">
      <NavLink inner="Projects" classFlag={"active"} />
      <NavLink inner="Guides" />
      <NavLink inner="Blog" />
      <NavLink inner="Training &amp; Certification" />
      <NavSearch
        openSearchDropdown={props.openSearchDropdown}
        searchFlag={props.searchFlag}
        closeSearchDropdown={props.closeSearchDropdown}
      />
    </ul>
  );
}
