import React from "react";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { MobileMenu } from "../mobileMenu/MobileMenu";

import "./mobileNav.css";

export const MobileNav = () => {
  const { mobileFlag } = useSelector(state => ({
    mobileFlag: state.mobileMenuCondition.isMobileMenuOpen
  }));
  return (
    <div className="mobile-nav">
      <MobileMenu mobileFlag={mobileFlag} />
      <div className="mobile-icon-container">
        <div
          className="mobile-menu-icon"
          style={{ marginLeft: mobileFlag ? "275px" : "" }}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
        <div
          className="icon icon-spring-logo-mobile"
          style={{ marginLeft: mobileFlag ? "7%" : "" }}
        ></div>
      </div>
    </div>
  );
};
