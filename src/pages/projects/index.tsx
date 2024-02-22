import { Outlet, useNavigate } from "react-router-dom";
import "./Projects.css";
import ReactIcon from "../../assets/language-icons/react-icon.svg";
import AngularIcon from "../../assets/language-icons/angular-icon.svg";
import VueIcon from "../../assets/language-icons/vue-icon.svg";
import SvelteIcon from "../../assets/language-icons/svelte-icon.svg";
import { FaGithub, FaUpload } from "react-icons/fa6";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { invoke } from "@tauri-apps/api";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFileTree } from "../../redux/actions";
import getFolderContent from "../../utils/getFolderContent";
import { FileStructure } from "../../types/currentProject";

const Projects = () => {
  const navigate = useNavigate();
  const [folder, setFolder] = useState<string>("");
  const [gitURL, setGitURL] = useState<string>("");
  const dispatch = useDispatch();

  const frameworkClicked = (framework: string) => {
    navigate(`/projects/setup/${framework}`);
  };

  useEffect(() => {
    if (folder) {
      (async () => {
        const data = (await getFolderContent(folder)) as FileStructure[];
        const name = folder.split("/").pop() || "";
        dispatch(
          setFileTree({
            name,
            metadata: {
              path: folder,
            },
            children: data,
          }),
        );
        navigate(`/project/${name}`);
      })();
    }
  }, [folder]);

  return (
    <div className="projects">
      <Outlet />
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
            <label
              className="projects__import__label projects__import__label--local"
              onClick={async () => setFolder(await invoke("get_folder_path"))}
            >
              <FaUpload />
              <p>{folder ? folder : "Select Project"}</p>
            </label>
          </div>
          <h3>Import from Github</h3>
          <div className="projects__import">
            <label className="projects__import__label projects__import__label--url">
              <FaGithub />
              <input
                type="text"
                placeholder="Enter Git URL"
                value={gitURL}
                onChange={(e) => setGitURL(e.target.value)}
              />
            </label>
            <button
              onClick={() => {
                navigate(
                  `/projects/setup/github/${encodeURIComponent(gitURL)}`,
                );
              }}
            >
              Import
            </button>
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
          <Link to="/legal/terms">Terms of Service</Link>
        </p>
        <p>
          <Link to="/legal/privacy">Privacy Policy</Link>
        </p>
        <p>
          <Link to="/">Help</Link>
        </p>
      </footer>
    </div>
  );
};

export default Projects;
