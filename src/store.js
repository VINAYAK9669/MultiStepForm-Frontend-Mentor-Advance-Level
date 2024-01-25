import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./components/Slices/inputFormSice.js";
import planReducer from "./components/Slices/planSlice.js";
import addOnReducer from "./components/Slices/addOnSlice.js";

export default configureStore({
  reducer: {
    personalInfo: inputReducer,
    planInfo: planReducer,
    addOn: addOnReducer,
  },
});
