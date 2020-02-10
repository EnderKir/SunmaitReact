import { combineReducers } from "redux";

import { searchDropdownReducer } from "./searchDropdownReducer";
import { mobileMenuReducer } from "./mobileMenuReducer";
import { inputSearchReducer } from "./inputSearchReducers";
import { modalLogReducer } from "./modalLogReducer";
import { loggedInReducer } from "./loggedInReducer";
import { logInValueReducer } from "./logInValueReducer";
import { projectsArrayReducer } from "./projectsArrayReducer";
import { registerModalReducer } from "./registerModalReducer";
import { registerValueReducer } from "./registerValueReducer";
import errorReducer from "./errorReducer";

export const rootReducer = combineReducers({
  searchDropdownCondition: searchDropdownReducer,
  mobileMenuCondition: mobileMenuReducer,
  inputSearchValue: inputSearchReducer,
  loggedCondition: loggedInReducer,
  modalLogCondition: modalLogReducer,
  loginData: logInValueReducer,
  projectsArray: projectsArrayReducer,
  registerModalCondition: registerModalReducer,
  registerData: registerValueReducer,
  errors: errorReducer
});
