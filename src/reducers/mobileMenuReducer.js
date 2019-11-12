const CHANGE_MOBILE_MENU_CONDITION = "CHANGE_MOBILE_MENU_CONDITION";

const initialState = {
  isMobileMenuOpen: false
};

export function mobileMenuReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MOBILE_MENU_CONDITION:
      return { ...state, isMobileMenuOpen: !state.isMobileMenuOpen };
    default:
      return state;
  }
}
