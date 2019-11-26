import React from "react";
import { NavLink } from "react-router-dom";

import { NavSearch } from "../navSearchButton/NavSearchButton";

import "./navBar.css";

export const NavBar = () => {
  return (
    <ul className="navbar">
      <li>
        <NavLink
          to="/projects"
          className="navbar-link"
          activeClassName="active"
        >
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
      <NavSearch />
    </ul>
  );
};

