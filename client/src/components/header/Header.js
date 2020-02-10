import React from "react";

import { LogoContainer } from "../logoContainer/LogoContainer";
import { NavBar } from "../navBar/NavBar";

import "./header.css";

export const Header = () => {
  return (
    <header className="header desktop">
      <LogoContainer />
      <NavBar />
    </header>
  );
};
