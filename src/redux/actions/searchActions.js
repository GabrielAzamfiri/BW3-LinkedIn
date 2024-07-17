import { SEARCH_QUERY, SEARCH_RESULTS, SEARCH_LOADING, SEARCH_ERROR } from "./index";

export const setQuery = (query) => ({
  type: SEARCH_QUERY,
  payload: query,
});

export const fetchSearchResults = (query) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_LOADING });
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_FETCH_KEY}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const filteredResults = data
        .filter(
          (profile) =>
            (profile.name && profile.name.toLowerCase().includes(query.toLowerCase())) ||
            (profile.surname && profile.surname.toLowerCase().includes(query.toLowerCase())) ||
            (profile.title && profile.title.toLowerCase().includes(query.toLowerCase()))
        )
        .slice(0, 5);
      dispatch({ type: SEARCH_RESULTS, payload: filteredResults });
    } catch (error) {
      dispatch({ type: SEARCH_ERROR, payload: error.message });
    }
  };
};
