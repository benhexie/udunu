import { DropResult } from "react-beautiful-dnd";
import { FileStructure, assetInterface } from "../../types/currentProject";

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

export const updateImportedAssets = (assets: assetInterface[]) => {
  return {
    type: "UPDATE_IMPORTED_ASSETS",
    payload: assets,
  };
};

export const droppedGizmo = (gizmo: DropResult) => {
  return {
    type: "DROPPED_GIZMO",
    payload: gizmo,
  };
}

export const updateGizmoLayout = (layout: string) => {
  return {
    type: "UPDATE_GIZMO_LAYOUT",
    payload: layout,
  };
}