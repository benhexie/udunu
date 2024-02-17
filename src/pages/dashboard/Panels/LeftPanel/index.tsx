import { Fragment } from "react";
import "../Panels.css";
import "./LeftPanel.css";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";

const LeftPanel = ({ showPanels }: { showPanels: boolean }) => {
  const { search } = useLocation();
  const { id } = useParams();
  return (
    <Fragment>
      {showPanels && (
        <div className="dashboard__panel left">
          <header className="dashboard__panel__header dashboard__panel__nav">
            <NavLink to={{ pathname: `/projects/${id}`, search }} end>
              Pages
            </NavLink>
            <NavLink to={{ pathname: `/projects/${id}/controls`, search }}>
              Controls
            </NavLink>
          </header>
          <Outlet />
        </div>
      )}
    </Fragment>
  );
};

export default LeftPanel;
