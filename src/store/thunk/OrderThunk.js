import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const orderData = createAsyncThunk("order/getOrder", async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/order`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const damageReportData = createAsyncThunk(
  "damageReport/damageReportData",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/damageReport`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
