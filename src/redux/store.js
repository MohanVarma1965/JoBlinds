// Importing required functions and utilities from redux toolkit
import { configureStore } from "@reduxjs/toolkit";
// Import the reducer for taxCalculator from the slice
//import taxCalculatorReducer from "./slices/taxCalculator/taxCalculatorSlice";

// Configure the Redux store and combine all reducers
// Currently, only the taxCalculator reducer is added
export const store = configureStore({
  reducer: {},
});
