import "./basic.css";
import { CiViewTable } from "react-icons/ci";
import { IoIosList } from "react-icons/io";
import { RxInput } from "react-icons/rx";

export const ButtonGizmo = () => {
  return (
    <div className="gizmo__wrapper">
      <div className="gizmo button">
        <div>Click!</div>
      </div>
      <span>Button</span>
    </div>
  );
};

export const InputGizmo = () => {
  return (
    <div className="gizmo__wrapper">
      <div className="gizmo input">
        <RxInput className="icon" />
      </div>
      <span>Input</span>
    </div>
  );
};

export const ListGizmo = () => {
  return (
    <div className="gizmo__wrapper">
      <div className="gizmo list">
        <IoIosList className="icon" />
      </div>
      <span>List</span>
    </div>
  );
};

export const TableGizmo = () => {
  return (
    <div className="gizmo__wrapper">
      <div className="gizmo table">
        <CiViewTable className="icon" />
      </div>
      <span>Table</span>
    </div>
  );
};
