import { Fragment, useState } from "react";
import "../Panels.css";
import Pages from "./Pages";
import Controls from "./Controls";

const LeftPanel = ({ showPanels }: { showPanels: boolean }) => {
  const [page, setPage] = useState("pages");

  return (
    <Fragment>
      {showPanels && (
        <div className="dashboard__panel left">
          <header className="dashboard__panel__header dashboard__panel__nav">
            <span
              onClick={() => setPage("pages")}
              className={page === "pages" ? "active" : ""}
            >
              Pages
            </span>
            <span
              onClick={() => setPage("controls")}
              className={page === "controls" ? "active" : ""}
            >
              Controls
            </span>
          </header>
          {(() => {
            switch (page) {
              case "controls":
                return <Controls />;
              default:
                return <Pages />;
            }
          })()}
        </div>
      )}
    </Fragment>
  );
};

export default LeftPanel;
