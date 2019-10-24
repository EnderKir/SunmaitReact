import React from "react";
import { SearchDropdown } from "./SearchDropdown";
import { MobileNav } from "./MobileNav";
import { BodyContainer } from "./BodyContainer";
import { Header } from "./Header";
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchDropdownOpen: false,
      isMobileMenuOpen: false
    };
  }
  openSearchDropdown = () => {
    if (!this.state.isSearchDropdownOpen) {
      this.setState({
        isSearchDropdownOpen: !this.state.isSearchDropdownOpen
      });
    }
  };
  closeSearchDropdown = () => {
    if (this.state.isSearchDropdownOpen) {
      this.setState({
        isSearchDropdownOpen: !this.state.isSearchDropdownOpen
      });
    }
  };
  openMobileMenu = () => {
    if (!this.state.isMobileMenuOpen) {
      this.setState({
        isMobileMenuOpen: !this.state.isMobileMenuOpen
      });
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    }
  };
  closeMobileMenu = e => {
    if (this.state.isMobileMenuOpen) {
      if (!e.target.closest(".mobile-navigation")) {
        this.setState({
          isMobileMenuOpen: !this.state.isMobileMenuOpen
        });
        document.getElementsByTagName("html")[0].style.overflow = "";
      }
    }
  };
  render() {
    return (
      <div onClick={this.closeMobileMenu}>
        <Header
          openSearchDropdown={this.openSearchDropdown}
          searchFlag={this.state.isSearchDropdownOpen}
          closeSearchDropdown={this.closeSearchDropdown}
        />
        {this.state.isSearchDropdownOpen ? <SearchDropdown /> : null}
        <MobileNav
          openMobileMenu={this.openMobileMenu}
          mobileFlag={this.state.isMobileMenuOpen}
        />
        <BodyContainer />
      </div>
    );
  }
}
