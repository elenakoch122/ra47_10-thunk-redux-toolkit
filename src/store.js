import { configureStore } from "@reduxjs/toolkit";
import factsReducer from "./slices/facts";
import photoReducer from "./slices/photo";

export const store = configureStore({
  reducer: {
    facts: factsReducer,
    photo: photoReducer,
  },
});