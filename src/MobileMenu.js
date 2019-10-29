import React from "react";
import { MobileNavLink } from "./MobileNavLink";
import { MobileNavSearch } from "./MobileNavSearch";
export function MobileMenu() {
  return (
    <div className="mobile-navigation" id="mobile-navigation">
      <MobileNavSearch />
      <MobileNavLink inner="Home" />
      <MobileNavLink inner="Projects" />
      <MobileNavLink inner="Guides" />
      <MobileNavLink inner="Blog" />
      <MobileNavLink inner="Training &amp; Certification" />
    </div>
  );
}
