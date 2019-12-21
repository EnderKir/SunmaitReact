import { LOGGED_IN } from "../const/loggedInActions";
import { LOGGED_OUT } from "../const/loggedInActions";

const initialState = {
  isLogged: false
};

export function loggedInReducer(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return { ...state, isLogged: true };
    case LOGGED_OUT:
      return { ...state, isLogged: false };
    default:
      return state;
  }
}