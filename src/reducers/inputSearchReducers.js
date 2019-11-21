import { CHANGE_INPUT_VALUE } from "../const/inputSearchAction";

const initialState = {
  inputValue: ""
};

export function inputSearchReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return { ...state, inputValue: action.value };
    default:
      return state;
  }
}
