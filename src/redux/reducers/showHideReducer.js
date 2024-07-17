import { SHOW_HIDE_MAIN_INFO } from "../actions";

const initialState = {
  profileInfo: true,
  experieces: false,
};

const showHideReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_HIDE_MAIN_INFO:
      return {
        ...state,
        profileInfo: false,
        experieces: true,
      };

    default:
      return state;
  }
};

export default showHideReducer;
