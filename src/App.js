import React, { useState } from "react";
import { SearchDropdown } from "./SearchDropdown";
import { MobileNav } from "./MobileNav";
import { ProjectPage } from "./ProjectPage";
import { BlogPage } from "./BlogPage";
import { TrainingPage } from "./TrainingPage";
import { Header } from "./Header";
import { GuidesPage } from "./GuidesPage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
export function App() {
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false),
    openSearchDropdown = () => {
      setIsSearchDropdownOpen({ isSearchDropdownOpen: true });
    },
    closeSearchDropdown = () => {
      setIsSearchDropdownOpen({ isSearchDropdownOpen: false });
    },
    openMobileMenu = () => {
      if (!isMobileMenuOpen.isMobileMenuOpen) {
        setIsMobileMenuOpen({ isMobileMenuOpen: true });
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
      }
    },
    closeMobileMenu = e => {
      if (isMobileMenuOpen.isMobileMenuOpen) {
        if (!e.target.closest(".mobile-navigation")) {
          setIsMobileMenuOpen({ isMobileMenuOpen: false });
          document.getElementsByTagName("html")[0].style.overflow = "";
        }
      }
    };
  return (
    <Router>
      <div onClick={closeMobileMenu}>
        <Header
          openSearchDropdown={openSearchDropdown}
          searchFlag={isSearchDropdownOpen.isSearchDropdownOpen}
          closeSearchDropdown={closeSearchDropdown}
        />
        {isSearchDropdownOpen.isSearchDropdownOpen && <SearchDropdown />}
        <MobileNav
          openMobileMenu={openMobileMenu}
          mobileFlag={isMobileMenuOpen.isMobileMenuOpen}
        />
        <Switch>
          <Route exact path="/" component={ProjectPage} />
          <Route exact path="/guides" component={GuidesPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/trainingAndCertifation" component={TrainingPage} />
        </Switch>
      </div>
    </Router>
  );
}
