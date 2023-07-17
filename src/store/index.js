import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./reducers/HomeReducer";
import LoginReducer from "./reducers/LoginReducer";
import SignupReducer from "./reducers/SignupReducer";

export const store = configureStore({
  reducer: {
    home: HomeReducer,
    login: LoginReducer,
    signup: SignupReducer,
  },
});
