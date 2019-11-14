import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from "react-redux";

import { SearchDropdown } from "../searchDropdown/SearchDropdown";
import { MobileNav } from "../mobileNav/MobileNav";
import { ProjectPage } from "../pages/projectPage/ProjectPage";
import { BlogPage } from "../pages/blogPage/BlogPage";
import { TrainingPage } from "../pages/trainingPage/TrainingPage";
import { Header } from "../header/Header";
import { GuidesPage } from "../pages/guidesPage/GuidesPage";
import { HomePage } from "../pages/homePage/HomePage";
import { NoMatchPage } from "../pages/noMatchPage/NoMatchPage";

export const App = () => {
  const dispatch = useDispatch();
  const { searchFlag, mobileFlag } = useSelector(state => ({
      searchFlag: state.searchDropdownCondition.isSearchDropdownOpen,
      mobileFlag: state.mobileMenuCondition.isMobileMenuOpen
    })),
    withProps = (Component, props) => {
      return function(matchProps) {
        return <Component {...props} {...matchProps} />;
      };
    },
    handleClick = e => {
      const domNode = ReactDOM.findDOMNode(this);
      if (!mobileFlag) {
        if (e.target.getAttribute("data-icon") === "bars") {
          document.body.classList.add("stop-scrolling");
          dispatch({ type: "CHANGE_MOBILE_MENU_CONDITION" });
        }
      } else {
        if ((!domNode || !domNode.contains(e.target)))  {
          document.body.classList.remove("stop-scrolling");
          dispatch({ type: "CHANGE_MOBILE_MENU_CONDITION" });
        }
      }
    };
  return (
    <Router>
      <div onClick={e => handleClick(e)}>
        <Header />
        <SearchDropdown />
        <MobileNav />
        <Switch>
          <Route
            exact
            path="/projects"
            component={withProps(ProjectPage, {
              searchFlag: searchFlag
            })}
          />
          <Route
            exact
            path="/"
            component={withProps(HomePage, {
              searchFlag: searchFlag
            })}
          />
          <Route
            exact
            path="/guides"
            component={withProps(GuidesPage, {
              searchFlag: searchFlag
            })}
          />
          <Route
            exact
            path="/blog"
            component={withProps(BlogPage, {
              searchFlag: searchFlag
            })}
          />
          <Route
            exact
            path="/trainingAndCertifation"
            component={withProps(TrainingPage, {
              searchFlag: searchFlag
            })}
          />
          <Route
            component={withProps(NoMatchPage, {
              searchFlag: searchFlag
            })}
          />
        </Switch>
      </div>
    </Router>
  );
};
