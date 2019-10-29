import React from "react";
import { NavLink } from "./NavLink";
import { NavSearch } from "./NavSearch";
export function NavBar(props) {
  return (
    <ul className="navbar">
      <NavLink inner="Projects" classFlag={"active"} path='/'/>
      <NavLink inner="Guides" path="/guides"/>
      <NavLink inner="Blog" path="/blog"/>
      <NavLink inner="Training &amp; Certification" path="trainingAndCertifation"/>
      <NavSearch
        openSearchDropdown={props.openSearchDropdown}
        searchFlag={props.searchFlag}
        closeSearchDropdown={props.closeSearchDropdown}
      />
    </ul>
  );
}
