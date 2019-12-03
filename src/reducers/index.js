import { combineReducers } from "redux";

import { searchDropdownReducer } from "./searchDropdownReducer";
import { mobileMenuReducer } from "./mobileMenuReducer";
import { inputSearchReducer } from "./inputSearchReducers";
import { modalLogReducer } from "./modalLogReducer";
import { loggedInReducer } from "./loggedInReducer";

export const rootReducer = combineReducers({
  searchDropdownCondition: searchDropdownReducer,
  mobileMenuCondition: mobileMenuReducer,
  inputSearchValue: inputSearchReducer,
  modalLogCondition: modalLogReducer,
  loggedCondition: loggedInReducer
});
