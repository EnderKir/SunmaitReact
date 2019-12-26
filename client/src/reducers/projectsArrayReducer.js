import { GET_PROJECTS } from "../const/projectsArrayAction";

const initialState = {
  projectsArray: []
};

export function projectsArrayReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return { ...state, projectsArray: action.value };
    default:
      return state;
  }
}
