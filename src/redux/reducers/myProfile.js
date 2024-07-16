import { MY_PROFILE } from "../actions";

const initialState = {
  profile: null,
};

const myProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case MY_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
};

export default myProfileReducer;
