import { createSlice } from "@reduxjs/toolkit";
import { getProductById } from "../thunk/SingleProductThunk";

const SingleProductReducer = createSlice({
  name: "singleProductReducer",
  initialState: {
    product: {},
    isLoggedIn: false,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default SingleProductReducer.reducer;
