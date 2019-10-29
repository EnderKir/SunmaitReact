import React from "react";
export function NavLink(props) {
  return (
    <li
      key={props.inner}
      className={[props.classFlag, "navbar-link"].join(" ")}
    >
      <a href="/#">{props.inner}</a>
    </li>
  );
}
