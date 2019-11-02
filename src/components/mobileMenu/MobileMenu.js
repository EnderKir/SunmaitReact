import React from "react";
import { NavLink } from "react-router-dom";
import { MobileNavSearch } from "../mobileNavSearch/MobileNavSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./mobileMenu.css";
export const MobileMenu = ({ mobileFlag }) => {
  return (
    <div
      className="mobile-navigation"
      id="mobile-navigation"
      style={{ left: mobileFlag ? "0" : "-400px" }}
    >
      <MobileNavSearch />
      <NavLink to="/" className="navbar-link" activeClassName="active">
        Home
        <FontAwesomeIcon icon={faChevronRight} size="lg" color="" />
      </NavLink>
      <NavLink to="/projects" className="navbar-link" activeClassName="active">
        Projects
        <FontAwesomeIcon icon={faChevronRight} size="lg" color="" />
      </NavLink>
      <NavLink to="/guides" className="navbar-link" activeClassName="active">
        Guides
        <FontAwesomeIcon icon={faChevronRight} size="lg" color="" />
      </NavLink>
      <NavLink to="/blog" className="navbar-link" activeClassName="active">
        Blog
        <FontAwesomeIcon icon={faChevronRight} size="lg" color="" />
      </NavLink>
      <NavLink
        to="/trainingAndCertifation"
        className="navbar-link"
        activeClassName="active"
      >
        Training &amp; Certification
        <FontAwesomeIcon icon={faChevronRight} size="lg" color="" />
      </NavLink>
    </div>
  );
};
