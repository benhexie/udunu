import { useNavigate, useParams } from "react-router-dom";
import "./SetupOverlay.css";
import { Fragment, useEffect, useState } from "react";
import { FaFolder } from "react-icons/fa6";
import { MdOutlineWebAsset } from "react-icons/md";
import { invoke } from "@tauri-apps/api";
import getFolderContent from "../../../utils/getFolderContent";
import { FileStructure } from "../../../types/currentProject";
import { setFileTree } from "../../../redux/actions";
import { useDispatch } from "react-redux";

const SetupOverlay = () => {
  const navigate = useNavigate();
  const framework = useParams().framework || "";
  const remoteUrl = decodeURIComponent(useParams().url || "");
  const [folder, setFolder] = useState<string | null>(null);
  const [projectName, setProjectName] = useState<string>("");
  const [isCloning, setIsCloning] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [nameVerified, setNameVerified] = useState<boolean>(false);
  const dispatch = useDispatch();
  const availableFrameworks = [
    "blank",
    // "react",
    // "vue",
    // "angular",
    // "svelte"
  ];

  useEffect(() => {
    setError("");
    setNameVerified(false);
    if (!folder || !projectName) return;
    (async () => {
      const [error, message] = (await invoke("check_name_availability", {
        folder,
        name: projectName,
      })) as [boolean, string];

      if (error) return setError(message);
      setError("");
      setNameVerified(true);
    })();
  }, [folder, projectName]);

  const badRequest = (): boolean => {
    if (!folder) {
      setError("Please select a folder");
      return true;
    }
    if (!projectName) {
      setError("Please enter a project name");
      return true;
    }
    if (!nameVerified) {
      setError("Project name already exists in folder");
      return true;
    }
    return false;
  };

  const createProject = async () => {
    if (badRequest()) return;
    const [error, message] = (await invoke("create_project", {
      framework,
      folder,
      name: projectName,
    })) as [boolean, string];
    if (error) {
      console.error(message);
      return;
    }
    navigate(`/project/${projectName}`);
  };

  const cloneRepo = async () => {
    if (badRequest()) return;
    // const name = ((): string => {
    //   if (remoteUrl.endsWith(".git")) {
    //     return remoteUrl.split("/")?.pop()?.replace(".git", "") || "";
    //   }
    //   return remoteUrl.split("/").pop() || "";
    // })();
    const localUrl = `${folder}/${projectName}`;
    setIsCloning(true);
    const [error, message] = (await invoke("clone_remote_repo", {
      remoteUrl,
      localUrl,
    })) as [boolean, string];
    console.log({ error, message });

    if (error) {
      setError(message);
      return;
    }
    const data = (await getFolderContent(localUrl)) as FileStructure[];
    dispatch(
      setFileTree({
        name: projectName,
        metadata: {
          path: localUrl,
        },
        children: data,
      }),
    );
    setIsCloning(false);
    navigate(`/project/${projectName}`);
  };

  return (
    <Fragment>
      {(remoteUrl || availableFrameworks.includes(framework)) && (
        <div className="project__setup" onClick={() => navigate(-1)}>
          <div
            className="project__setup__container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="projects__import">
              <label
                className="projects__import__label projects__import__label--local"
                onClick={async () => setFolder(await invoke("get_folder_path"))}
              >
                <FaFolder />
                <p>{folder ? folder : "Select Folder"}</p>
              </label>
            </div>
            <div className="projects__import">
              <label className="projects__import__label projects__import__label--url">
                <MdOutlineWebAsset />
                <input
                  type="text"
                  placeholder="Project Name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </label>
              {error && (
                <p
                  style={{
                    color: "red",
                    textAlign: "start",
                    fontSize: "1rem",
                  }}
                >
                  {error}
                </p>
              )}
              <button
                onClick={remoteUrl ? cloneRepo : createProject}
                disabled={isCloning}
              >
                {((): string => {
                  if (isCloning) return "Cloning...";
                  if (remoteUrl) return "Clone";
                  return "Create";
                })()}
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default SetupOverlay;
