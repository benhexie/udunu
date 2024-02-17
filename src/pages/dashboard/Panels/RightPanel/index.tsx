import { Fragment } from "react";
import "../Panels.css";

const RightPanel = ({ showPanels }: { showPanels: boolean }) => {
  return (
    <Fragment>
      {showPanels && <div className="dashboard__panel right"></div>}
    </Fragment>
  );
};

export default RightPanel;
