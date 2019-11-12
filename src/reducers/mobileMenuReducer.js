const OPEN_MOBILE_MENU = 'OPEN_MOBILE_MENU';

const initialState = {
  isMobileMenuOpen: false
};

export function mobileMenuReducer(state = initialState, action) {
  if (action.type === OPEN_MOBILE_MENU) {
    if (!state.isMobileMenuOpen) {
      if (action.e.target.getAttribute("data-icon") === "bars") {
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
        return { ...state, isMobileMenuOpen: !state.isMobileMenuOpen };
      }
    } else {
      if (!action.e.target.closest(".mobile-navigation")) {
        document.getElementsByTagName("html")[0].style.overflow = "";
        return { ...state, isMobileMenuOpen: !state.isMobileMenuOpen };
      }
    }
  }
  return state;
}
