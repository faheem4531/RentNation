import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./reducers/HomeReducer";
import SingleProductReducer from "./reducers/SingleProductReducer";

export const store = configureStore({
  reducer: {
    home: HomeReducer,
    singleProduct: SingleProductReducer,
  },
});
