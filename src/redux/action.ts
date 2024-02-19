export const setScreenType = (screenType: string) => {
  return {
    type: "SET_SCREEN_TYPE",
    payload: screenType,
  };
};

export const setZoom = (zoom: number) => {
  return {
    type: "SET_ZOOM",
    payload: zoom,
  };
}

export const updateZoom = (zoom: number) => {
  return {
    type: "UPDATE_ZOOM",
    payload: zoom,
  };
};

export const setCurrentPage = (page: string) => {
  return {
    type: "SET_CURRENT_PAGE",
    payload: page,
  };
};



// SETTINGS
export const setLeftPanelVisibility = (visibility: boolean) => {
  return {
    type: "SET_LEFT_PANEL_VISIBILITY",
    payload: visibility,
  };
}

export const setRightPanelVisibility = (visibility: boolean) => {
  return {
    type: "SET_RIGHT_PANEL_VISIBILITY",
    payload: visibility,
  };
}

export const togglePanelsVisibility = () => {
  return {
    type: "TOGGLE_PANELS_VISIBILITY",
  };
}