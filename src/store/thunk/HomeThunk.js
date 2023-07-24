import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const getHomeData = createAsyncThunk(
  "home/getData",
  async ({ email, password }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/home`,
        { email, password }
      );
      const token = response.data.token;
      return token;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
