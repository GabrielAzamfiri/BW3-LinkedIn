import { EXPEIRENCES, MY_PROFILE, SELECTED_PROFILE } from "../actions";

const initialState = {
  profile: null,
  selectedProfile: null,
  experiences: [],
};

const myProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case MY_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case SELECTED_PROFILE:
      return {
        ...state,
        selectedProfile: action.payload,
      };
    case EXPEIRENCES:
      return {
        ...state,
        experiences: action.payload,
      };

    default:
      return state;
  }
};

export default myProfileReducer;
