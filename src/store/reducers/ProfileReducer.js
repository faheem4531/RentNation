import { createSlice } from "@reduxjs/toolkit";
import {
  getProfileData,
  myTickets,
  addTicket,
  resetPassseord,
} from "../thunk/ProfileThunk";

const profileReducer = createSlice({
  name: "profileReducer",
  initialState: {
    user: {},
    tickets: [],
    isLoggedIn: false,
    loading: false,
    error: null,
  },
  reducers: {}, // plane actions
  extraReducers: (builder) => {
    // async actions
    builder
      .addCase(getProfileData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfileData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getProfileData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(myTickets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(myTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets = action.payload;
      })
      .addCase(myTickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(addTicket.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTicket.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addTicket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(resetPassseord.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassseord.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(resetPassseord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default profileReducer.reducer;
