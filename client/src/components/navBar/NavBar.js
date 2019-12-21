import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { NavSearch } from "../navSearchButton/NavSearchButton";

import "./navBar.css";

export const NavBar = () => {
  const { loggedFlag } = useSelector(state => ({
    loggedFlag: state.loggedCondition.isLogged
  }));
  const dispatch = useDispatch();
  return (
    <div>
      {loggedFlag ? (
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
              className="navbar-link logIn_button"
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
