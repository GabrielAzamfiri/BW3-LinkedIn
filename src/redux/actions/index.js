export const MY_PROFILE = "MY_PROFILE";

// export const myProfileAction = data => ({ type: MY_PROFILE, payload: data });

export const myProfileAction = () => {
  return async dispatch => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          // chiave di autenticazione
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0Y2NmODE5NmQ3YjAwMTVkNmI1MjMiLCJpYXQiOjE3MjEwMjc4MzIsImV4cCI6MTcyMjIzNzQzMn0.bPE2_KluKpUL7tntcvUDLXOKht7ySvsZvq0ydXmbl3o",
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
