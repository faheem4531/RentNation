import { createSlice } from "@reduxjs/toolkit";
import { getHomeData } from "../thunk/HomeThunk";

const homeReducer = createSlice({
  name: "homeReducer",
  initialState: {
    category: [],
    isLoggedIn: false,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHomeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getHomeData.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload;
      })
      .addCase(getHomeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default homeReducer.reducer;
