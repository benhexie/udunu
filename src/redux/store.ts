import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer.ts";

export const store = configureStore({
  reducer: rootReducer,
});