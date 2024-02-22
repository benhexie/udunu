import React from "react";
import "./styles.css";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import App from "./App";
import { useDispatch } from "react-redux";
import { droppedGizmo } from "./redux/actions";

const MainProxy = () => {
  const dispatch = useDispatch();

  const dragEndHandler = (result: DropResult) => {
    dispatch(droppedGizmo(result));
  };

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DragDropContext>
  );
};

export default MainProxy;
