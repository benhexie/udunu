import "./Dashboard.css";
import LeftPanel from "./Panels/LeftPanel";
import RightPanel from "./Panels/RightPanel";
import { useEffect, useRef, useState } from "react";
import LeftNav from "./Navs/LeftNav";
import TopNav from "./Navs/TopNav";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateZoom, setZoom, togglePanelsVisibility } from "../../redux/action";
import Preview from "./Preview";

const Dashboard = () => {
  const [showPanels, setShowPanels] = useState(true);
  const screenRef = useRef<HTMLDivElement>(null);
  const screenType =
    useSelector((state: any) => state.dashboard.screenType) || "web";
  const zoom = useSelector((state: any) => state.dashboard.zoom);
  const dispatch = useDispatch();

  useEffect(() => {
    if (screenRef.current && zoom) {
      screenRef.current.style.scale = zoom;
    }
  }, [screenType, zoom]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "\\") {
        e.preventDefault();
        dispatch(togglePanelsVisibility());
      }
      if (screenRef.current) {
        if (e.ctrlKey && e.key === "0") {
          e.preventDefault();
          if (screenType === "web") dispatch(setZoom(0.7));
          if (screenType === "tablet") dispatch(setZoom(0.8));
          if (screenType === "mobile") dispatch(setZoom(1.2));
        }
      }
      if (e.ctrlKey && (e.key === "+" || e.key === "=")) {
        e.preventDefault();
        dispatch(updateZoom(0.1));
      }
      if (e.ctrlKey && e.key === "-") {
        e.preventDefault();
        dispatch(updateZoom(-0.1));
      }
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
          <LeftPanel />
          <Preview screenRef={screenRef} screenType={screenType} />
          <RightPanel />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
