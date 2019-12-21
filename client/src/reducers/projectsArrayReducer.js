import { LOAD_PROJECTS } from "../const/projectsArrayAction";

const initialState = {
  projectsArray: []
};

export function projectsArrayReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROJECTS:
      return { ...state, projectsArray: action.value };
    default:
      return state;
  }
}
