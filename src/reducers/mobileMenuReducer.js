const OPEN_MOBILE_MENU = 'OPEN_MOBILE_MENU';

const initialState = {
  isMobileMenuOpen: false
};

export function mobileMenuReducer(state = initialState, action) {
  if (action.type === OPEN_MOBILE_MENU) {
    if (!state.isMobileMenuOpen) {
      if (action.e.target.getAttribute("data-icon") === "bars") {
        document.body.classList.add('stop-scrolling');
        return { ...state, isMobileMenuOpen: !state.isMobileMenuOpen };
      }
    } else {
      if (!action.e.target.closest(".mobile-navigation")) {
        document.body.classList.remove('stop-scrolling');
        return { ...state, isMobileMenuOpen: !state.isMobileMenuOpen };
      }
    }
  }
  return state;
}
