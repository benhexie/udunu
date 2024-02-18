export const setScreenType = (screenType: string) => {
  return {
    type: "SET_SCREEN_TYPE",
    payload: screenType,
  };
};

export const updateZoom = (zoom: number) => {
  return {
    type: "UPDATE_ZOOM",
    payload: zoom,
  };
};
