import React from "react";
import { LogoContainer } from "../logoContainer/LogoContainer";
import { NavBar } from "../navBar/NavBar";
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
