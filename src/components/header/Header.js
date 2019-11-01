import React from "react";
import { LogoContainer } from "../logoContainer/LogoContainer";
import { NavBar } from "../navBar/NavBar";
import "./header.css";
export const Header = ({openSearchDropdown, searchFlag,closeSearchDropdown}) => {
  return (
    <header className="header desktop">
      <LogoContainer />
      <NavBar
        openSearchDropdown={openSearchDropdown}
        searchFlag={searchFlag}
        closeSearchDropdown={closeSearchDropdown}
      />
    </header>
  );
};
