import React from "react";
import { LogoContainer } from "./LogoContainer";
import { NavBar } from "./NavBar";
export class Header extends React.Component {
  render() {
    return (
      <header className="header desktop">
        <LogoContainer />
        <NavBar
          openSearchDropdown={this.props.openSearchDropdown}
          searchFlag={this.props.searchFlag}
          closeSearchDropdown={this.props.closeSearchDropdown}
        />
      </header>
    );
  }
}
