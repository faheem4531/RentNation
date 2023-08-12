import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const getHomeData = createAsyncThunk("homeReducer/getData", async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/category`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
