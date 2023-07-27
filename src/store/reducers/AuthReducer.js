import { createSlice } from "@reduxjs/toolkit";
import {
  loginAction,
  signupAction,
  forgetAction,
  addressAction,
} from "../thunk/AuthThunk";

const initialState = {
  data: JSON.parse(localStorage.getItem("userData")),
  loading: false,
  error: null,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      localStorage.clear();
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(loginAction.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(loginAction.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(signupAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(signupAction.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(signupAction.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(forgetAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(forgetAction.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(forgetAction.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addressAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(addressAction.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(addressAction.pending, (state) => {
      state.loading = true;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
