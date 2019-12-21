import { OPEN_MODAL_LOG } from "../const/modalLogActions";
import { CLOSE_MODAL_LOG } from "../const/modalLogActions";

const initialState = {
  isModalLogOpen: false
};

export function modalLogReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL_LOG:
      return { ...state, isModalLogOpen: true };
    case CLOSE_MODAL_LOG:
      return { ...state, isModalLogOpen: false };
    default:
      return state;
  }
}
