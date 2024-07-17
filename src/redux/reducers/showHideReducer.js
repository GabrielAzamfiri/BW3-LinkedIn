import { SHOW_EXPERIENCES, SHOW_INFO_PROFILE } from "../actions";

const initialState = {
  profileInfo: true,
  experieces: false,
};

const showHideReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_EXPERIENCES:
      return {
        ...state,
        profileInfo: false,
        experieces: true,
      };
    case SHOW_INFO_PROFILE:
      return {
        ...state,
        profileInfo: true,
        experieces: false,
      };

    default:
      return state;
  }
};

export default showHideReducer;
