import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { toast } from "react-toastify";

export const getProfileData = createAsyncThunk(
  "profile/getProfileData",
  async () => {
    try {
      const CurrentUserId = localStorage.getItem("userId");
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/${CurrentUserId}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const editProfile = createAsyncThunk(
  "profile/editProfile",
  async ({ data, navigate }) => {
    try {
      const CurrentUserId = localStorage.getItem("userId");
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/users/updateUserAndProfile/${CurrentUserId}`,
        data
      );
      navigate("/profile");
      return response?.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const myTickets = createAsyncThunk("tickets/myTickets", async () => {
  try {
    const CurrentUserId = localStorage.getItem("userId");
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/ticket/getByUser/${CurrentUserId}`
    );
    return response?.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const addTicket = createAsyncThunk(
  "tickets/addTicket",
  async (data, { dispatch }) => {
    try {
      const CurrentUserId = localStorage.getItem("userId");
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/ticket`,
        { ...data, userId: CurrentUserId }
      );
      console.log("response", response);
      dispatch(myTickets());
      return response?.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const resetPassseord = createAsyncThunk(
  "profile/resetPassseord",
  async ({ data, navigate }) => {
    try {
      if (data.newPassword === data.confirmPasswrod) {
        const resetPasswordData = {
          oldPassword: data.oldPassword,
          newPassword: data.newPassword,
        };
        const CurrentUserId = localStorage.getItem("userId");
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/users/resetPassword/${CurrentUserId}`,
          resetPasswordData
        );
        navigate("/profile");
        return response?.data;
      } else {
        console.log("asdasdasdasdasda glt");
        toast("Confirm password is not correct", { type: "error" });
      }
    } catch (error) {
      toast(error.response.data.message, { type: "error" });
      throw new Error(error.response.data.message);
    }
  }
);
