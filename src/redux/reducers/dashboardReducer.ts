import { ActionInterface } from "./types/action";

let zoomClickedOnce = false;

interface InitalState {
  screenType: string;
  zoom: number;
  projectPath: string;
  settings: {
    leftPanelVisibility: boolean;
    rightPanelVisibility: boolean;
  };
}

const initialState: InitalState = {
  screenType: "web",
  zoom: 0,
  projectPath: "",
  settings: {
    leftPanelVisibility: true,
    rightPanelVisibility: true,
  },
};

export const dashboardReducer = (
  state = initialState,
  action: ActionInterface,
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

    case "SET_ZOOM":
      return {
        ...state,
        zoom: (() => {
          if (action.payload < 0) return 0;
          return action.payload;
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

    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };

    case "SET_LEFT_PANEL_VISIBILITY":
      return {
        ...state,
        leftPanelVisibility: action.payload,
      };

    case "SET_RIGHT_PANEL_VISIBILITY":
      return {
        ...state,
        rightPanelVisibility: action.payload,
      };

    case "TOGGLE_PANELS_VISIBILITY":
      return (() => {
        const { leftPanelVisibility, rightPanelVisibility } = state.settings;
        if (leftPanelVisibility || rightPanelVisibility) {
          return {
            ...state,
            settings: {
              leftPanelVisibility: false,
              rightPanelVisibility: false,
            },
          };
        }
        return {
          ...state,
          settings: {
            leftPanelVisibility: true,
            rightPanelVisibility: true,
          },
        };
      })();

    default:
      return state;
  }
};
