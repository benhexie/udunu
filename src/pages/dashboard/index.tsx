import "./Dashboard.css";
import "./Controls.css";
import "./Preview.css";
import LeftPanel from "./Panels/LeftPanel";
import RightPanel from "./Panels/RightPanel";
import { useEffect, useState } from "react";
import LeftNav from "./Navs/LeftNav";
import TopNav from "./Navs/TopNav";

const Dashboard = () => {
  const [showPanels, setShowPanels] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      if (e.ctrlKey && e.key === "/") setShowPanels((prev) => !prev);
    };

    document.body.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="dashboard">
      <LeftNav />
      <div className="dashboard__content">
        <TopNav />
        <main className="dashboard__main">
          <LeftPanel showPanels={showPanels} />
          <div className="dashboard__preview"></div>
          <RightPanel showPanels={showPanels} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
