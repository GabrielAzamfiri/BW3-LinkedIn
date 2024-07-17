export const MY_PROFILE = "MY_PROFILE";
export const EPIC_PROFILES = "EPIC_PROFILES";
export const SELECTED_PROFILE = "SELECTED_PROFILE";
export const EXPEIRENCES = "EXPEIRENCES";
export const PROFILI_SIMILI = "PROFILI_SIMILI";
export const POTRESTI_CONOSCERE = "POTRESTI_CONOSCERE";
export const SHOW_EXPERIENCES = "SHOW_EXPERIENCES";
export const SHOW_INFO_PROFILE = "SHOW_INFO_PROFILE";

export const showExperiencesAction = () => ({ type: SHOW_EXPERIENCES, payload: "" });
export const showInfoProfileAction = () => ({ type: SHOW_INFO_PROFILE, payload: "" });
export const selectProfileAction = profile => ({ type: SELECTED_PROFILE, payload: profile });

export const SEARCH_QUERY = "SEARCH_QUERY";
export const SEARCH_RESULTS = "SEARCH_RESULTS";
export const SEARCH_LOADING = "SEARCH_LOADING";
export const SEARCH_ERROR = "SEARCH_ERROR";

export const SET_TOKEN = "SET_TOKEN";
export const SET_USER_INFO = "SET_USER_INFO";

export * from "./userActions";
export * from "./searchActions";

export const setQuery = (query) => ({
  type: SEARCH_QUERY,
  payload: query,
});

export const myProfileAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          // chiave di autenticazione
          Authorization: `Bearer ${import.meta.env.VITE_FETCH_KEY}`,
        },
      });
      if (response.ok) {
        let data = await response.json();

        dispatch({ type: MY_PROFILE, payload: data });
      } else {
        throw new Error("Errore nel erperimento dei dati 😥");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const profileEsperienzeAction = ProfileID => {
  return async dispatch => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${ProfileID}/experiences`, {
        headers: {
          // chiave di autenticazione
          Authorization: `Bearer ${import.meta.env.VITE_FETCH_KEY}`,
        },
      });
      if (response.ok) {
        let data = await response.json();

        dispatch({ type: EXPEIRENCES, payload: data });
      } else {
        throw new Error("Errore nel erperimento dei dati 😥");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const epicProfilesAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          // chiave di autenticazione
          Authorization: `Bearer ${import.meta.env.VITE_FETCH_KEY}`,
        },
      });
      if (response.ok) {
        let data = await response.json();

        let profiliSimili = [];
        let potrestiConoscere = [];
        for (let i = 0; i < 5; i++) {
          let randomIndex = Math.floor(Math.random() * data.length);
          profiliSimili.push(data[randomIndex]);
        }
        for (let i = 0; i < 5; i++) {
          let randomIndex = Math.floor(Math.random() * data.length);
          potrestiConoscere.push(data[randomIndex]);
        }

        dispatch({ type: EPIC_PROFILES, payload: data });
        dispatch({ type: PROFILI_SIMILI, payload: profiliSimili });
        dispatch({ type: POTRESTI_CONOSCERE, payload: potrestiConoscere });
      } else {
        throw new Error("Errore nel erperimento dei dati 😥");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
