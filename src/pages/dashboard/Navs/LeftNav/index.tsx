import "../Navs.css";
import "./LeftNav.css";
import {
  BsDatabaseFill,
  BsFillImageFill,
  BsFillPlusSquareFill,
  BsGearFill,
  BsLayersFill,
} from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { NavLink, useLocation, useParams } from "react-router-dom";

const LeftNav = () => {
  const { search } = useLocation();
  const { id } = useParams();
  return (
    <nav className="dashboard__nav left">
      <ul>
        <li>
          <NavLink to={"/project"} end>
            <img src="/logo.svg" alt="Udunu Logo" width={20} />
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: `/project/${id}/controls`, search }} end>
            <BsFillPlusSquareFill />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{ pathname: `/project/${id}/controls/layers`, search }}
            end
          >
            <BsLayersFill />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{ pathname: `/project/${id}/controls/assets`, search }}
            end
          >
            <BsFillImageFill />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{ pathname: `/project/${id}/controls/database`, search }}
            end
          >
            <BsDatabaseFill />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{ pathname: `/project/${id}/controls/settings`, search }}
            end
          >
            <BsGearFill />
          </NavLink>
        </li>
        <li className="exit">
          <NavLink to={"/project"} end>
            <ImExit />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default LeftNav;
