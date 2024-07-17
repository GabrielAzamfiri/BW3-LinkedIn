import { SEARCH_QUERY, SEARCH_RESULTS, SEARCH_LOADING, SEARCH_ERROR } from "../actions";

const initialState = {
  query: "",
  results: [],
  loading: false,
  error: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_QUERY:
      return {
        ...state,
        query: action.payload,
        results: [],
      };
    case SEARCH_RESULTS:
      return {
        ...state,
        results: action.payload,
        loading: false,
        error: null,
      };
    case SEARCH_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
