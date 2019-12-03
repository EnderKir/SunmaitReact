import { combineReducers } from "redux";

import { searchDropdownReducer } from "./searchDropdownReducer";
import { mobileMenuReducer } from "./mobileMenuReducer";
import { inputSearchReducer } from "./inputSearchReducers";
import { modalLogReducer } from "./modalLogReducer";
import { loggedInReducer } from "./loggedInReducer";
import { logInValueReducer } from "./logInValueReducer";

export const rootReducer = combineReducers({
  searchDropdownCondition: searchDropdownReducer,
  mobileMenuCondition: mobileMenuReducer,
  inputSearchValue: inputSearchReducer,
  modalLogCondition: modalLogReducer,
  loggedCondition: loggedInReducer,
  loginData:  logInValueReducer
});
