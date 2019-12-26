import {
  CHANGE_NAME_VALUE,
  CHANGE_PASSWORD_VALUE,
  CHANGE_PASSWORD_CONF_VALUE,
  CHANGE_EMAIL_VALUE
} from "../const/registerValueActions";

const initialState = {
  nameValue: "",
  passwordValue: "",
  emailValue: "",
  passwordConfValue: ""
};

export function registerValueReducer(state = initialState, action) {
  switch (action.type) {
    case  CHANGE_NAME_VALUE:
      return { ...state, nameValue: action.value };
    case CHANGE_PASSWORD_VALUE:
      return { ...state, passwordValue: action.value };
    case  CHANGE_PASSWORD_CONF_VALUE:
      return { ...state, passwordConfValue: action.value };
    case CHANGE_EMAIL_VALUE:
      return { ...state, emailValue: action.value };
    default:
      return state;
  }
}
