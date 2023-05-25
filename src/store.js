import { configureStore } from "@reduxjs/toolkit";
import factsReducer from "./slices/facts";

export const store = configureStore({
  reducer: {
    facts: factsReducer,
  },
});