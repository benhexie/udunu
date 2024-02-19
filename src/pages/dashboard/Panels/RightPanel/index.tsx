import { Fragment } from "react";
import "../Panels.css";
import "./RightPanel.css";
import { useSelector } from "react-redux";

const RightPanel = () => {
  const rightPanelVisibility = useSelector(
    (state: any) => state.dashboard.settings.rightPanelVisibility,
  );
  return (
    <Fragment>
      {rightPanelVisibility && <div className="dashboard__panel right"></div>}
    </Fragment>
  );
};

export default RightPanel;
