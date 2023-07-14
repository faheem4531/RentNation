import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: null,
  role: null,
  loading: false,
  error: null,
};

export const authenticationReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});
export const { setIsLoggedIn } = authenticationReducer.actions;
export default authenticationReducer.reducer;
