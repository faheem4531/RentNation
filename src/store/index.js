import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./reducers/HomeReducer";
import AuthReducer from "./reducers/AuthReducer";
import AdditionalUserReducer from "./reducers/AdditionalUserReducer";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    home: HomeReducer,
    AdditionalUserReducer: AdditionalUserReducer,
  },
});
