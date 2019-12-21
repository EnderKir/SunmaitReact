import { CHANGE_LOGIN_VALUE, CHANGE_PASSWORD_VALUE } from "../const/loginValueActions";

const initialState = {
  loginValue: "",
  passwordValue: ""
};

export function logInValueReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOGIN_VALUE:
      return { ...state, loginValue: action.value };
    case CHANGE_PASSWORD_VALUE:
      return { ...state, passwordValue: action.value };
    default:
      return state;
  }
}
