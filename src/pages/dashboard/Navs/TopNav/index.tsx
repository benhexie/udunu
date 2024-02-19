import "../Navs.css";
import "./TopNav.css";
import { AiOutlineMobile } from "react-icons/ai";
import { BsTablet } from "react-icons/bs";
import { GrPersonalComputer } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  HiMiniMagnifyingGlassPlus,
  HiMiniMagnifyingGlassMinus,
} from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { updateZoom, setScreenType } from "../../../../redux/actions";
import { useEffect } from "react";

const TopNav = ({ screen }: { screen: HTMLDivElement | null }) => {
  const { search } = useLocation();
  const view = new URLSearchParams(search).get("view") || "web";
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (screen) {
      dispatch(
        updateZoom(
          parseFloat(getComputedStyle(screen).getPropertyValue("scale")),
        ),
      );
    }
  }, [screen]);

  useEffect(() => {
    if (view) {
      dispatch(setScreenType(view));
    }
  }, [location.search]);

  const scaleUpHandler = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    dispatch(updateZoom(0.1));
  };

  const scaleDownHandler = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    dispatch(updateZoom(-0.1));
  };

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
        <li>
          <NavLink
            to="?view=zoom-in"
            className={({ isActive }) =>
              isActive && view === "zoom-in" ? "active" : ""
            }
            end
            onClick={scaleUpHandler}
          >
            <HiMiniMagnifyingGlassPlus />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="?view=zoom-out"
            className={({ isActive }) =>
              isActive && view === "zoom-out" ? "active" : ""
            }
            end
            onClick={scaleDownHandler}
          >
            <HiMiniMagnifyingGlassMinus />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
