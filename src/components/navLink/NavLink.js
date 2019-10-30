import React from "react";
import { Link } from 'react-router-dom'
import "./navLink.css"
export function NavLink(props) {
  return (
    <li
      key={props.inner}
      className={[props.classFlag, "navbar-link"].join(" ")}
    >
      <Link to={props.path}>{props.inner}</Link>
    </li>
  );
}
