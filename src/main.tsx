import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const dragEndHandler = (result: DropResult) => {
  console.log(result);
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <DragDropContext onDragEnd={dragEndHandler}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </DragDropContext>,
);
