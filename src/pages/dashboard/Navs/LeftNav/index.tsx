import "../Navs.css";
import "./LeftNav.css";
import {
  BsDatabaseFill,
  BsFillImageFill,
  BsFillPlusSquareFill,
  BsGearFill,
  BsLayersFill,
} from "react-icons/bs";
import { IoLogoWordpress } from "react-icons/io5";
import { NavLink, useLocation, useParams } from "react-router-dom";

const LeftNav = () => {
  const { search } = useLocation();
  const { id } = useParams();
  return (
    <nav className="dashboard__nav left">
      <ul>
        <li>
          <NavLink to={"/projects"} end>
            <IoLogoWordpress />
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: `/projects/${id}/controls`, search }} end>
            <BsFillPlusSquareFill />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{ pathname: `/projects/${id}/controls/layers`, search }}
            end
          >
            <BsLayersFill />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{ pathname: `/projects/${id}/controls/assets`, search }}
            end
          >
            <BsFillImageFill />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{ pathname: `/projects/${id}/controls/database`, search }}
            end
          >
            <BsDatabaseFill />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{ pathname: `/projects/${id}/controls/settings`, search }}
            end
          >
            <BsGearFill />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default LeftNav;
