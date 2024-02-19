import { combineReducers } from "@reduxjs/toolkit";
import { dashboardReducer } from "./dashboardReducer";
import { currentPageReducer } from "./currentPageReducer";

export const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  page: currentPageReducer,
});
