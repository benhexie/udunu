import { Fragment } from "react";
import "../Panels.css";
import "./LeftPanel.css";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const LeftPanel = () => {
  const leftPanelVisibility = useSelector(
    (state: any) => state.dashboard.settings.leftPanelVisibility,
  );
  const { search } = useLocation();
  const { id } = useParams();
  return (
    <Fragment>
      {leftPanelVisibility && (
        <div className="dashboard__panel left">
          <header className="dashboard__panel__header dashboard__panel__nav">
            <NavLink to={{ pathname: `/project/${id}`, search }} end>
              Pages
            </NavLink>
            <NavLink to={{ pathname: `/project/${id}/controls`, search }}>
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
