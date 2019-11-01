import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MobileMenu } from "../mobileMenu/MobileMenu";
import "./mobileNav.css";
export const MobileNav = ({ mobileFlag, openMobileMenu }) => {
  return (
    <div className="mobile-nav">
      <MobileMenu mobileFlag={mobileFlag} />
      <div className="mobile-icon-container">
        <div className="mobile-menu-icon" onClick={openMobileMenu}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
        <div className="icon icon-spring-logo-mobile"></div>
      </div>
    </div>
  );
};
