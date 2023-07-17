import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAction = createAsyncThunk(
  "users/login",
  async ({ data, navigate }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users`,
        data
      );
      navigate("/order");
      return response?.data?.data;
    } catch (error) {}
  }
);
