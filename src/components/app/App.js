import React, { useState } from "react";
import { SearchDropdown } from "../searchDropdown/SearchDropdown";
import { MobileNav } from "../mobileNav/MobileNav";
import { ProjectPage } from "../pages/projectPage/ProjectPage";
import { BlogPage } from "../pages/blogPage/BlogPage";
import { TrainingPage } from "../pages/trainingPage/TrainingPage";
import { Header } from "../header/Header";
import { GuidesPage } from "../pages/guidesPage/GuidesPage";
import { HomePage } from "../pages/homePage/HomePage";
import { NoMatchPage } from "../pages/noMatchPage/NoMatchPage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// Спросить у Вадима: 1)как правильно сделать Навигацию с activeClass
// 2) Как сделать, чтобы при открытии списка не переключались на новую сраницу, а оставались на той же
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
          <Route exact path="/projects" component={ProjectPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/guides" component={GuidesPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/trainingAndCertifation" component={TrainingPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </div>
    </Router>
  );
}
