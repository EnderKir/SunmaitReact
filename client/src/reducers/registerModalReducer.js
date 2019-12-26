import { OPEN_REGISTER_MODAL } from "../const/registerModalActions";
import { CLOSE_REGISTER_MODAL } from "../const/registerModalActions";

const initialState = {
  isRegisterModalOpen: false
};

export function registerModalReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_REGISTER_MODAL:
      return { ...state, isRegisterModalOpen: true };
    case CLOSE_REGISTER_MODAL:
      return { ...state, isRegisterModalOpen: false };
    default:
      return state;
  }
}