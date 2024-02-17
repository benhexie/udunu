import "../Navs.css";
import "./TopNav.css";
import { AiOutlineMobile } from "react-icons/ai";
import { BsTablet } from "react-icons/bs";
import { GrPersonalComputer } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const TopNav = () => {
  const { search } = useLocation();
  const view = new URLSearchParams(search).get("view");
  return (
    <nav className="dashboard__nav top">
      <ul className="dashboard__screens">
        <li>
          <NavLink
            to="?view=web"
            className={({ isActive }) =>
              isActive && (!view || view === "web") ? "active" : ""
            }
            end
          >
            <GrPersonalComputer />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="?view=tablet"
            className={({ isActive }) =>
              isActive && view === "tablet" ? "active" : ""
            }
            end
          >
            <BsTablet />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="?view=mobile"
            className={({ isActive }) =>
              isActive && view === "mobile" ? "active" : ""
            }
            end
          >
            <AiOutlineMobile />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
