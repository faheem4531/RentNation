import { createSlice } from "@reduxjs/toolkit";
import { signupAction } from "../thunk/SignupThunk";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signupAction.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { logout } = signupSlice.actions;

export default signupSlice.reducer;
