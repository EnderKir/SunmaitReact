import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";

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
import { RegisterModal } from "../register/Register";

export const App = () => {
  const dispatch = useDispatch();
  const checkLog = () => {
    if (localStorage.jwtToken) {
      // Set auth token header auth
      const token = localStorage.jwtToken;
      setAuthToken(token);
      // Decode token and get user info and exp
      const decoded = jwt_decode(token);
      // Set user and isAuthenticated
      dispatch({ type: "LOGGED_IN" });
      // Check for expired token
      const currentTime = Date.now() / 1000; // to get in milliseconds
      if (decoded.exp < currentTime) {
        //Logout user
        dispatch({ type: "LOGGED_OUT" });
        //Redirect to login
        window.location.href = "./login";
      }
    }
  };
  const {
      searchFlag,
      inputSearchValue,
      projectsArray,
      modalLogFlag,
      registerModalFlaf
    } = useSelector(state => ({
      searchFlag: state.searchDropdownCondition.isSearchDropdownOpen,
      inputSearchValue: state.inputSearchValue.inputValue,
      projectsArray: state.projectsArray.projectsArray,
      modalLogFlag: state.modalLogCondition.isModalLogOpen,
      registerModalFlaf: state.registerModalCondition.isRegisterModalOpen
    })),
    withProps = (Component, props) => {
      return function(matchProps) {
        return <Component {...props} {...matchProps} />;
      };
    };
  useEffect(() => checkLog(), []);
  return (
    <Router>
      <div>
        <Overlay />
        {modalLogFlag && <ModalLog />}
        {registerModalFlaf && <RegisterModal />}
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
