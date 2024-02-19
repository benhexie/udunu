import { FolderItem } from "../../types/currentProject";

export const setCurrentPage = (page: string) => {
  return {
    type: "SET_CURRENT_PAGE",
    payload: page,
  };
};

export const setFileTree = (fileTree: FolderItem) => {
  return {
    type: "SET_FILE_TREE",
    payload: fileTree,
  };
}

export const updateFileTree = (
  name: string,
  path: string,
  children: FolderItem[],
) => {
  return {
    type: "UPDATE_FILE_TREE",
    payload: {
      name,
      path,
      children,
    },
  };
};
