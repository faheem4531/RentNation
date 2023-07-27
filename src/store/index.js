import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./reducers/HomeReducer";
import SingleProductReducer from "./reducers/SingleProductReducer";
import AuthReducer from "./reducers/AuthReducer";
import AdditionalUserReducer from "./reducers/AdditionalUserReducer";
import ProfileReducer from "./reducers/ProfileReducer";
import OrdersReducer from "./reducers/OrdersReducer";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    home: HomeReducer,
    singleProduct: SingleProductReducer,
    AdditionalUserReducer: AdditionalUserReducer,
    profile: ProfileReducer,
    order: OrdersReducer,
  },
});
