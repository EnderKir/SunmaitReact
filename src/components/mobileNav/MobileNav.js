import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MobileMenu } from "../mobileMenu/MobileMenu";
import "./mobileNav.css"
export function MobileNav(props) {
  return (
    <div className="mobile-nav">
      {props.mobileFlag ? <MobileMenu /> : null}
      <div className="mobile-menu-icon" onClick={props.openMobileMenu}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div>
      <div className="icon icon-spring-logo-mobile"></div>
    </div>
  );
}
