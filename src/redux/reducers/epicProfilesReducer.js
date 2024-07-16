import { EPIC_PROFILES, POTRESTI_CONOSCERE, PROFILI_SIMILI } from "../actions";

const initialState = {
  profiles: [],
  profiliSimili: [],
  potrestiConoscere: [],
};

const epicProfilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case EPIC_PROFILES:
      return {
        ...state,
        profiles: action.payload,
      };
    case PROFILI_SIMILI:
      return {
        ...state,
        profiliSimili: action.payload,
      };
    case POTRESTI_CONOSCERE:
      return {
        ...state,
        potrestiConoscere: action.payload,
      };

    default:
      return state;
  }
};

export default epicProfilesReducer;
