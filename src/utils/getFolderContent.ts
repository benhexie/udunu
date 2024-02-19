import { invoke } from "@tauri-apps/api";

const getFolderContent = async (path: string) => {
  return await invoke("get_folder_content", { path });
};

export default getFolderContent;
