import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "new",
  email: "",
  password: "",
  city: "",
  country: "",
  state: "",
  addressModel: false,
  signupModel: false,
  signinModel: false,
  forgetModal: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    updateCity: (state, action) => {
      state.city = action.payload;
    },
    updateCountry: (state, action) => {
      state.country = action.payload;
    },
    updateState: (state, action) => {
      state.state = action.payload;
    },
    updateAddressMode: (state, action) => {
      state.addressModel = action.payload;
    },
    updateSignupMode: (state, action) => {
      state.signupModel = action.payload;
    },
    updateSigninMode: (state, action) => {
      state.signinModel = action.payload;
    },
    updateForgetMode: (state, action) => {
      state.forgetModal = action.payload;
    },

    // Add other field update reducers
  },
});

export const {
  updateName,
  updateEmail,
  updatePassword,
  updateCity,
  updateCountry,
  updateState,
  updateAddressMode,
  updateSignupMode,
  updateSigninMode,
  updateForgetMode,
} = userSlice.actions;
export default userSlice.reducer;
