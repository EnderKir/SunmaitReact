import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { SearchDropdown } from "../searchDropdown/SearchDropdown";
import { ModalLog } from "../modalLog/ModalLog";
import { Overlay } from "../overlay/Overlay";
import { MobileNav } from "../mobileNav/MobileNav";
import { ProjectPage } from "../pages/projectPage/ProjectPage";
import { BlogPage } from "../pages/blogPage/BlogPage";
import { TrainingPage } from "../pages/trainingPage/TrainingPage";
import { Header } from "../header/Header";
import { GuidesPage } from "../pages/guidesPage/GuidesPage";
import { HomePage } from "../pages/homePage/HomePage";
import { NoMatchPage } from "../pages/noMatchPage/NoMatchPage";

export const App = () => {
  const {
      searchFlag,
      inputSearchValue,
      projectsArray,
      modalLogFlag,
    } = useSelector(state => ({
      searchFlag: state.searchDropdownCondition.isSearchDropdownOpen,
      inputSearchValue: state.inputSearchValue.inputValue,
      projectsArray: state.projectsArray.projectsArray,
      modalLogFlag: state.modalLogCondition.isModalLogOpen
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
        {console.log(projectsArray)}
        {modalLogFlag && <ModalLog />}
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
          <Route exact path="/" component={HomePage} />
          <Route exact path="/guides" component={GuidesPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route
            exact
            path="/trainingAndCertifation"
            component={TrainingPage}
          />
          <Route component={NoMatchPage} />
        </Switch>
      </div>
    </Router>
  );
};
