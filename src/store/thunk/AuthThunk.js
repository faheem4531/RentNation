import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAction = createAsyncThunk(
  "users/login",
  async ({ data, navigate, closeModal }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/login`,
        data
      );
      const userData = JSON.stringify(response?.data);
      localStorage.setItem("accessToken", response?.data?.accessToken);
      localStorage.setItem("userId", response?.data?.user?.id);
      localStorage.setItem("userData", userData);
      navigate("/");
      closeModal();
      return response?.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const signupAction = createAsyncThunk(
  "users/signup",
  async ({ data }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users`,
        data
      );
      localStorage.setItem("accessToken", response?.data?.accessToken);
      localStorage.setItem("userId", response?.data?.user?.id);
      return response?.data?.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const forgetAction = createAsyncThunk(
  "users/forget",
  async ({ data, navigate }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users`,
        data
      );
      navigate("");
      return response?.data?.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const addressAction = createAsyncThunk(
  "users/address",
  async ({ data, navigate, closeModal }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users`,
        data
      );
      navigate("/");
      closeModal();
      return response?.data?.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);
