import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { SearchDropdown } from "../searchDropdown/SearchDropdown";
import { Overlay } from "../overlay/Overlay";
import { MobileNav } from "../mobileNav/MobileNav";
import { ProjectPage } from "../pages/projectPage/ProjectPage";
import { BlogPage } from "../pages/blogPage/BlogPage";
import { TrainingPage } from "../pages/trainingPage/TrainingPage";
import { Header } from "../header/Header";
import { GuidesPage } from "../pages/guidesPage/GuidesPage";
import { HomePage } from "../pages/homePage/HomePage";
import { NoMatchPage } from "../pages/noMatchPage/NoMatchPage";
import { projectsArray } from "../../const/projectsArray";

export const App = () => {
  const { searchFlag, inputSearchValue } = useSelector(state => ({
      searchFlag: state.searchDropdownCondition.isSearchDropdownOpen,
      inputSearchValue: state.inputSearchValue.inputValue
    })),
    withProps = (Component, props) => {
      return function(matchProps) {
        return <Component {...props} {...matchProps} />;
      };
    };
  return (
    <Router>
      <div>
        <Overlay />
        <Header />
        <SearchDropdown />
        <MobileNav />
        <Switch>
          <Route
            exact
            path="/projects"
            component={withProps(ProjectPage, {
              searchFlag: searchFlag,
              projectsArray: projectsArray.filter(project => {
                return (
                  project.projectTitle
                    .toLowerCase()
                    .includes(inputSearchValue.toLowerCase()) ||
                  project.projectDescription
                    .toLowerCase()
                    .includes(inputSearchValue.toLowerCase())
                );
              })
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
