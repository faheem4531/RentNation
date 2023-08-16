import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const getProductById = createAsyncThunk(
  "singleProductReducer/getProduct",
  async (id) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/product/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const updateProductView = createAsyncThunk(
  "productView/updateProductView",
  async (payload) => {
    console.log("counter ", payload.counter);
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/product/updateView/${payload.id}`,
        { viewCounter: payload.counter + 1 }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
