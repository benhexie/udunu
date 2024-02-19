import { ActionInterface } from "./types/action";

interface InitalState {
  currentPage: string;
  layout: any[];
}

const initialState: InitalState = {
  currentPage: "",
  layout: [],
};

export const currentPageReducer = (
  state = initialState,
  action: ActionInterface,
) => {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };

    case "SET_LAYOUT":
        return {
            ...state,
            layout: action.payload,
        };

    default:
      return state;
  }
};
