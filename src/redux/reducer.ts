import { combineReducers } from "@reduxjs/toolkit";

interface DashboardAction {
  type: string;
  payload: any;
}

interface DashboardState {
  screenType: string;
  zoom: number;
}

const dashboardInitialState: DashboardState = {
  screenType: "web",
  zoom: 0,
};

let zoomClickedOnce = false;
const dashboardReducer = (
  state: DashboardState = dashboardInitialState,
  action: DashboardAction,
) => {
  switch (action.type) {
    case "SET_SCREEN_TYPE":
      return {
        ...state,
        screenType: (() => {
          if (!action.payload || action.payload === "web") return "web";
          if (action.payload === "tablet") return "tablet";
          if (action.payload === "mobile") return "mobile";
          return state.screenType;
        })(),
      };

    case "UPDATE_ZOOM":
      return {
        ...state,
        zoom: (() => {
          const zoom = state.zoom + action.payload;
          if (zoom < 0 && zoomClickedOnce) return 0;
          zoomClickedOnce = true;
          return zoom;
        })(),
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});
