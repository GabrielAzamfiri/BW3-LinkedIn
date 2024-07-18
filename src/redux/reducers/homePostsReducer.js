import { EPIC_POSTS } from "../actions";

const initialState = {
  posts: [],
};

const homePostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EPIC_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};

export default homePostsReducer;
