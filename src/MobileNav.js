import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MobileMenu } from "./MobileMenu";
export class MobileNav extends React.Component {
  render() {
    return (
      <div className="mobile-nav">
        {this.props.mobileFlag ? <MobileMenu /> : null}
        <div className="mobile-menu-icon" onClick={this.props.openMobileMenu}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
        <div className="icon icon-spring-logo-mobile"></div>
      </div>
    );
  }
}
