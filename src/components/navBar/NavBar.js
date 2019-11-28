import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { NavSearch } from "../navSearchButton/NavSearchButton";

import "./navBar.css";

export const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      {false ? (
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
            <NavLink
              to="/guides"
              className="navbar-link"
              activeClassName="active"
            >
              Guides
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className="navbar-link"
              activeClassName="active"
            >
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
      ) : (
        <ul className="navbar">
          <li>
            <a
              href="/#"
              className="navbar-link"
              onClick={() => dispatch({ type: "OPEN_MODAL_LOG" })}
            >
              Log In
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};
