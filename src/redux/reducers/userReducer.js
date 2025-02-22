import { MY_PROFILE, SET_TOKEN, SET_USER_INFO } from "../actions";

const initialState = {
  token: localStorage.getItem("token") || null,
  userInfo: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case MY_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
