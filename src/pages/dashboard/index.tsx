import "./Dashboard.css";
import "./Controls.css";
import "./Preview.css";
import LeftPanel from "./Panels/LeftPanel";
import RightPanel from "./Panels/RightPanel";
import { useEffect, useRef, useState } from "react";
import LeftNav from "./Navs/LeftNav";
import TopNav from "./Navs/TopNav";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [showPanels, setShowPanels] = useState(true);
  const screenRef = useRef<HTMLDivElement>(null);
  const screenType =
    useSelector((state: any) => state.dashboard.screenType) || "web";
  const zoom = useSelector((state: any) => state.dashboard.zoom);

  useEffect(() => {
    if (screenRef.current && zoom) {
      screenRef.current.style.scale = zoom;      
    }
  }, [screenType, zoom]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      if (e.ctrlKey && e.key === "\\") setShowPanels((prev) => !prev);
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
        <TopNav screen={screenRef.current} />
        <main className="dashboard__main">
          <LeftPanel showPanels={showPanels} />
          <div className="dashboard__preview">
            <div
              className={`dashboard__preview__screen ${screenType}`}
              id="screen"
              ref={screenRef}
            />
          </div>
          <RightPanel showPanels={showPanels} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
