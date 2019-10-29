import React from "react";
import { MobileNavLink } from "./MobileNavLink";
import { MobileNavSearch } from "./MobileNavSearch";
export function MobileMenu() {
  return (
    <div className="mobile-navigation" id="mobile-navigation">
      <MobileNavSearch />
      <MobileNavLink inner="Home" path="/home"/>
      <MobileNavLink inner="Projects" path='/'/>
      <MobileNavLink inner="Guides" path='/guides'/>
      <MobileNavLink inner="Blog" path='/blog'/>
      <MobileNavLink inner="Training &amp; Certification" path="/trainingAndCertifation"/>
    </div>
  );
}
