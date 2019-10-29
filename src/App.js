import React, { useState } from "react";
import { SearchDropdown } from "./SearchDropdown";
import { MobileNav } from "./MobileNav";
import { BodyContainer } from "./BodyContainer";
import { Header } from "./Header";
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
      <BodyContainer />
    </div>
  );
}
