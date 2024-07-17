import { MY_PROFILE } from "./index";

export const setToken = (token) => ({
  type: "SET_TOKEN",
  payload: token,
});

export const setUserInfo = (userInfo) => ({
  type: "SET_USER_INFO",
  payload: userInfo,
});

export const fetchUserInfo = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: MY_PROFILE, payload: data });
      } else {
        throw new Error("Failed to fetch user info");
      }
    } catch (error) {
      console.error(error);
    }
  };
};
