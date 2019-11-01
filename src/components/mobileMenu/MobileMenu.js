import React from "react";
import { NavLink } from "react-router-dom";
import { MobileNavSearch } from "../mobileNavSearch/MobileNavSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./mobileMenu.css";
export const MobileMenu = () => {
  return (
    <div className="mobile-navigation" id="mobile-navigation">
      <MobileNavSearch />
      <NavLink to="/home" className="navbar-link" activeClassName="active">
        Home
        <FontAwesomeIcon icon={faChevronRight} size="lg" color="" />
      </NavLink>
      <NavLink to="/" className="navbar-link" activeClassName="active">
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
