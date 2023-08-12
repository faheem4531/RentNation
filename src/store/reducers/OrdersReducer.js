import { createSlice } from "@reduxjs/toolkit";
import { orderData } from "../thunk/OrderThunk";

const orderReducer = createSlice({
  name: "orderReducer",
  initialState: {
    order: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(orderData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(orderData.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(orderData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default orderReducer.reducer;
