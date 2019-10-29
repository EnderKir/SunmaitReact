import React from "react";
import { LogoContainer } from "./LogoContainer";
import { NavBar } from "./NavBar";
export function Header(props) {
  return (
    <header className="header desktop">
      <LogoContainer />
      <NavBar
        openSearchDropdown={props.openSearchDropdown}
        searchFlag={props.searchFlag}
        closeSearchDropdown={props.closeSearchDropdown}
      />
    </header>
  );
}
