import { useNavigate } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  const navigate = useNavigate();

  return <div onClick={() => navigate("/projects/1")}>Projects</div>;
};

export default Projects;
