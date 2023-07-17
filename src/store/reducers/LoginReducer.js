import { createSlice } from "@reduxjs/toolkit";
import { loginAction } from "../thunk/LoginThunk";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
