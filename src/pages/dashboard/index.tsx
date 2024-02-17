import "./Dashboard.css";
import "./Controls.css";
import "./Preview.css";
import { useNavigate } from "react-router-dom";
import { IoLogoWordpress } from "react-icons/io5";
import {
  BsFillPlusSquareFill,
  BsLayersFill,
  BsFillImageFill,
  BsDatabaseFill,
  BsGearFill,
  BsTablet,
} from "react-icons/bs";
import { GrPersonalComputer } from "react-icons/gr";
import { AiOutlineMobile } from "react-icons/ai";
import LeftPanel from "./Panels/LeftPanel";
import RightPanel from "./Panels/RightPanel";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
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
      <nav className="dashboard__nav left">
        <ul>
          <li onClick={() => navigate("/projects")}>
            <IoLogoWordpress />
          </li>
          <li>
            <BsFillPlusSquareFill />
          </li>
          <li>
            <BsLayersFill />
          </li>
          <li>
            <BsFillImageFill />
          </li>
          <li>
            <BsDatabaseFill />
          </li>
          <li>
            <BsGearFill />
          </li>
        </ul>
      </nav>
      <div className="dashboard__content">
        <nav className="dashboard__nav top">
          <ul className="dashboard__screens">
            <li>
              <GrPersonalComputer />
            </li>
            <li>
              <BsTablet />
            </li>
            <li>
              <AiOutlineMobile />
            </li>
          </ul>
        </nav>
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
