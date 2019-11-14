import { combineReducers } from "redux";

import { searchDropdownReducer } from "./searchDropdownReducer";
import { mobileMenuReducer } from "./mobileMenuReducer";

export const rootReducer = combineReducers({
  searchDropdownCondition: searchDropdownReducer,
  mobileMenuCondition: mobileMenuReducer,
});