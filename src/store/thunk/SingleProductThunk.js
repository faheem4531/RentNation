import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const getProductById = createAsyncThunk(
  "singleProductReducer/getProduct",
  async (id) => {
    console.log("iddddd check", id);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/product/${id}`
      );
      console.log("prrrrrrrrrrrrresponse", response);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
