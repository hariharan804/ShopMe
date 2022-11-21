import { configureStore } from "@reduxjs/toolkit";
import  authReducer  from "./features/AuthSlice";
import ProductReducer from "./features/ProductListSlice";

export const store = configureStore({
  reducer: {  auth: authReducer, productList: ProductReducer,},
  devTools: true,
});
