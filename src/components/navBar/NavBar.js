import React from "react";
import { NavLink } from "../navLink/NavLink";
import { NavSearch } from "../navSearch/NavSearch";
import "./navBar.css";
export function NavBar(props) {
  return (
    <ul className="navbar">
      <NavLink inner="Projects" path="/projects" classFlag='active'/>
      <NavLink inner="Guides" path="/guides" />
      <NavLink inner="Blog" path="/blog" />
      <NavLink
        inner="Training &amp; Certification"
        path="/trainingAndCertifation"
      />
      <NavSearch
        openSearchDropdown={props.openSearchDropdown}
        searchFlag={props.searchFlag}
        closeSearchDropdown={props.closeSearchDropdown}
      />
    </ul>
  );
}
