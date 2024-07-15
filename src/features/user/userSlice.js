import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: localStorage.getItem("token") || null,
    userInfo: {},
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setToken, setUserInfo } = userSlice.actions;
export default userSlice.reducer;
