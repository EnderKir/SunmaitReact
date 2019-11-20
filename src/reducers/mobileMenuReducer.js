import { OPEN_MOBILE_MENU } from "../const/mobileMenuActions";
import { CLOSE_MOBILE_MENU } from "../const/mobileMenuActions";

const initialState = {
  isMobileMenuOpen: false
};

export function mobileMenuReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MOBILE_MENU:
      return { ...state, isMobileMenuOpen: true };
    case CLOSE_MOBILE_MENU:
      return { ...state, isMobileMenuOpen: false };
    default:
      return state;
  }
}
