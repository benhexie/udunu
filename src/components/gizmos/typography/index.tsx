import "./typography.css";
import { RxText, RxHeading } from "react-icons/rx";
import { IoIosLink } from "react-icons/io";

export const TextGizmo = () => {
  return (
    <div className="gizmo__wrapper">
      <div className="gizmo text">
        <RxText className="icon" />
      </div>
      <span>Text</span>
    </div>
  );
};

export const HeadingGizmo = () => {
  return (
    <div className="gizmo__wrapper">
      <div className="gizmo heading">
        <RxHeading className="icon" />
      </div>
      <span>Heading</span>
    </div>
  );
};

export const LinkGizmo = () => {
  return (
    <div className="gizmo__wrapper">
      <div className="gizmo link">
        <IoIosLink className="icon" />
      </div>
      <span>Link</span>
    </div>
  );
};
