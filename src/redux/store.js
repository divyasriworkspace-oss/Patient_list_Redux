// Configure and export the Redux store using Redux Toolkit.
import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "./patientSlice";

const store = configureStore({
  devTools:true,
  reducer: patientReducer,
});

export default store;