import { useLocation } from "react-router-dom";
import "./Projects.css";
import { NavLink } from "react-router-dom";

const Projects = () => {
  const { search } = useLocation();

  return (
    <NavLink to={{ pathname: "/projects/1", search }} end>
      Projects
    </NavLink>
  );
};

export default Projects;
