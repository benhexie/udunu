import { combineReducers } from "@reduxjs/toolkit";
import { dashboardReducer } from "./dashboardReducer";
import { currentProjectReducer } from "./currentProjectReducer";

export const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  project: currentProjectReducer,
});
