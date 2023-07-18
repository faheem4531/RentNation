import { createSlice } from "@reduxjs/toolkit";
import { loginAction } from "../thunk/LoginThunk";
import SignUp from "../../components/modals/SignUp";

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
    bla: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(loginAction.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(loginAction.pending, (state) => {
      state.loading = true;
    });

    // builder.addCase(signUpAction.fulfilled, (state, action) => {
    //   state.data = action.payload;
    // });
  },
  
});

export const { logout, bla } = loginSlice.actions;

export default loginSlice.reducer;
