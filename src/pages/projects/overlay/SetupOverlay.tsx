import { useNavigate, useParams } from "react-router-dom";
import "./SetupOverlay.css";
import { Fragment, useState } from "react";
import { FaFolder } from "react-icons/fa6";
import { MdOutlineWebAsset } from "react-icons/md";
import { invoke } from "@tauri-apps/api";

const SetupOverlay = () => {
	const navigate = useNavigate();
	const framework = useParams().framework || "";
	const [folder, setFolder] = useState<string | null>(null);
	const [projectName, setProjectName] = useState<string>("");
	const availableFrameworks = [
		"blank",
		// "react",
		// "vue",
		// "angular",
		// "svelte"
	];

	const createProject = async () => {
		if (!folder) return;
		if (!projectName) return;
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

	return (
		<Fragment>
			{availableFrameworks.includes(framework) && (
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
							<button onClick={createProject}>Create</button>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	);
};

export default SetupOverlay;
