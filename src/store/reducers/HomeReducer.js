import { createSlice } from "@reduxjs/toolkit";

const homeReducer = createSlice({
  name: "home",
  initialState: {
    isLoggedIn: false,
    token: null,
    role: null,
    loading: false,
    error: null,
  },
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(login.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(login.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.isLoggedIn = true;
  //       state.token = action.payload.token;
  //       state.role = action.payload.role;
  //     })
  //     .addCase(login.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error.message;
  //     });
  // },
});

export default homeReducer.reducer;
