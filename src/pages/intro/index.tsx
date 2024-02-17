import { useNavigate } from "react-router-dom";
import "./Intro.css";

const Intro = () => {
  const navigate = useNavigate();

  return <div onClick={() => navigate("/projects")}>Intro</div>;
};

export default Intro;
