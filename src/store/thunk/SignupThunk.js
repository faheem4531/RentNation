import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signupAction = createAsyncThunk(
  "users/signup",
  async ({ data, navigate }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users`,
        data
      );
      console.log(response, "response");
      navigate("/profile");
      return response?.data?.data;
    } catch (error) {}
  }
);
