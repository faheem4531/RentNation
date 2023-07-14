import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./reducers/HomeReducer";
import AuthenticationReducer from "./reducers/AuthenticationReducer";

export const store = configureStore({
  reducer: {
    home: HomeReducer,
    auth: AuthenticationReducer,
  },
});
