import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const authLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        { email, password }
      );
      const token = response.data.token;
      return token;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
