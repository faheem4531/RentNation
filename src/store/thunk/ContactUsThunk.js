import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const contactUs = createAsyncThunk(
  "contact/contactUs",
  async ({ data }) => {
    console.log("dayazz", data);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/contactUs/send-email`,
        data
      );
      return response?.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
