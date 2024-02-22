import { FileStructure } from "../../types/currentProject";

export const setCurrentPage = (page: string) => {
  return {
    type: "SET_CURRENT_PAGE",
    payload: page,
  };
};

export const setFileTree = (fileTree: FileStructure) => {
  return {
    type: "SET_FILE_TREE",
    payload: fileTree,
  };
};

export const updateFileTree = (
  name: string,
  path: string,
  children: FileStructure[],
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

export const updateFetchedPaths = (path: string) => {
  return {
    type: "UPDATE_FETCHED_PATHS",
    payload: path,
  };
};

export const updateImportedAssets = (assets: string[]) => {
  return {
    type: "UPDATE_IMPORTED_ASSETS",
    payload: assets,
  };
};
