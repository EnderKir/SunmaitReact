import React from "react";
import { NavLink } from "./NavLink";
import { NavSearch } from "./NavSearch";
export class NavBar extends React.Component {
  render() {
    return (<ul className="navbar">
      <NavLink inner="Projects" classFlag={'active'} />
      <NavLink inner="Guides" />
      <NavLink inner="Blog" />
      <NavLink inner="Training &amp; Certification" />
      <NavSearch openSearchDropdown={this.props.openSearchDropdown} searchFlag={this.props.searchFlag} closeSearchDropdown={this.props.closeSearchDropdown} />
    </ul>);
  }
}
