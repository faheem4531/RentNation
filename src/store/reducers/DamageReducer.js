import { createSlice } from "@reduxjs/toolkit";
import { damageReportData } from "../thunk/OrderThunk";

const DamageReducer = createSlice({
  name: "damageReducer",
  initialState: {
    damageReportData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(damageReportData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(damageReportData.fulfilled, (state, action) => {
        state.loading = false;
        state.damageReportData = action.payload;
      })
      .addCase(damageReportData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default DamageReducer.reducer;
