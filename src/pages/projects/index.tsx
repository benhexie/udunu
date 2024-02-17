import { useLocation, useNavigate } from "react-router-dom";
import "./Projects.css";
import ReactIcon from "../../assets/language-icons/react-icon.svg";
import AngularIcon from "../../assets/language-icons/angular-icon.svg";
import VueIcon from "../../assets/language-icons/vue-icon.svg";
import SvelteIcon from "../../assets/language-icons/svelte-icon.svg";
import { FaGithub, FaUpload } from "react-icons/fa6";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const frameworkClicked = (framework: string) => {
    navigate(`/projects/1`);
  };

  return (
    <div className="projects">
      <nav className="projects__nav">
        <ul>
          <li className="projects__nav__item projects__nav__item--logo">
            <img src="/logo.svg" alt="Logo" />
          </li>
          <li className="projects__nav__item">
            <button>Connect to Github</button>
          </li>
        </ul>
      </nav>
      <div className="projects__header">
        <div className="projects__header__title">
          <h2>Let's build something awesome!</h2>
          <p>
            Import your project or select a framework to start building your
            project
          </p>
        </div>
      </div>
      <div className="projects__container">
        <div className="projects__actions__container projects__import__container">
          <h3>Import Local Project</h3>
          <div className="projects__import">
            <label className="projects__import__label projects__import__label--local">
              <FaUpload />
              <p>Drag and drop your project here</p>
              <input type="file" />
            </label>
          </div>
          <h3>Import from Github</h3>
          <div className="projects__import">
            <label className="projects__import__label projects__import__label--url">
              <FaGithub />
              <input type="text" placeholder="Enter Git URL" />
            </label>
            <button>Import</button>
          </div>
        </div>
        <div className="projects__actions__container projects__frameworks__container">
          <h3>Select Framework</h3>
          <div className="projects__frameworks">
            <div
              className="projects__frameworks__item"
              onClick={() => frameworkClicked("blank")}
            >
              <BiPlus className="projects__frameworks__item__icon" />
              <p>Blank</p>
            </div>
            <div
              className="projects__frameworks__item"
              onClick={() => frameworkClicked("react")}
            >
              <img
                src={ReactIcon}
                alt="React"
                className="projects__frameworks__item__icon"
              />
              <p>React</p>
            </div>
            <div
              className="projects__frameworks__item"
              onClick={() => frameworkClicked("vue")}
            >
              <img
                src={VueIcon}
                alt="Vue"
                className="projects__frameworks__item__icon"
              />
              <p>Vue</p>
            </div>
            <div
              className="projects__frameworks__item"
              onClick={() => frameworkClicked("angular")}
            >
              <img
                src={AngularIcon}
                alt="Angular"
                className="projects__frameworks__item__icon"
              />
              <p>Angular</p>
            </div>
            <div
              className="projects__frameworks__item"
              onClick={() => frameworkClicked("svelte")}
            >
              <img
                src={SvelteIcon}
                alt="Svelte"
                className="projects__frameworks__item__icon"
              />
              <p>Svelte</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="projects__footer">
        <p>
          <Link to="">Terms of Service</Link>
        </p>
        <p>
          <Link to="">Privacy Policy</Link>
        </p>
        <p>
          <Link to="/">Help</Link>
        </p>
      </footer>
    </div>
  );
};

export default Projects;
