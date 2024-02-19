import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/index.ts";

export const store = configureStore({
  reducer: rootReducer,
});