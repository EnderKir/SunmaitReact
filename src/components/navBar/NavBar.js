import React from "react";
import { NavSearch } from "../navSearch/NavSearch";
import { NavLink } from "react-router-dom";
import "./navBar.css";
export const NavBar = ({
  openSearchDropdown,
  searchFlag,
  closeSearchDropdown
}) => {
  return (
    <ul className="navbar">
      <li>
        <NavLink to="/projects" className="navbar-link" activeClassName="active">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/guides" className="navbar-link" activeClassName="active">
          Guides
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" className="navbar-link" activeClassName="active">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/trainingAndCertifation"
          className="navbar-link"
          activeClassName="active"
        >
          Training &amp; Certification
        </NavLink>
      </li>
      <NavSearch
        openSearchDropdown={openSearchDropdown}
        searchFlag={searchFlag}
        closeSearchDropdown={closeSearchDropdown}
      />
    </ul>
  );
};
