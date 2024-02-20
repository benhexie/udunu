import { ActionInterface } from "../../types/action";
import { FileStructure } from "../../types/currentProject";

interface InitalState {
  currentPage: string;
  layout: any[];
  fileTree: FileStructure;
  fetchedPaths: string[];
}

const initialState: InitalState = {
  currentPage: "",
  layout: [],
  fetchedPaths: [],
  fileTree: {
    metadata: {
      path: "",
    },
    name: "",
    children: [],
    isBranch: true,
  },
};

export const currentProjectReducer = (
  state = initialState,
  action: ActionInterface,
) => {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };

    case "SET_LAYOUT":
      return {
        ...state,
        layout: action.payload,
      };

    case "SET_FILE_TREE":
      return {
        ...state,
        fileTree: {
          ...action.payload,
          children: sortChildren(action.payload.children || []),
        }
      };

    case "UPDATE_FILE_TREE":
      return (() => {
        const { name, path, children } = action.payload;

        const fileTree = JSON.parse(JSON.stringify(state.fileTree));
        fileTreeUpdate(fileTree, name, path, sortChildren(children));

        return {
          ...state,
          fileTree,
        };
      })();

    case "UPDATE_FETCHED_PATHS":
      return {
        ...state,
        fetchedPaths: [...state.fetchedPaths, action.payload],
      };
      

    default:
      return state;
  }
};

const fileTreeUpdate = (
  fileTree: FileStructure,
  name: string,
  path: string,
  children: FileStructure[],
) => {
  const refinedPath = path.replace(fileTree.metadata.path, "");
  const pathArray = refinedPath.split("/").filter((p) => p);

  const updateFileTree = (node: FileStructure, pathIndex: number) => {
    const currentFolder = pathArray[pathIndex];
    const child = (node.children || []).find((c) => c.name === currentFolder);
    if (!child) {
      return; // Path does not exist in the file structure
    }
    if (pathIndex === pathArray.length - 1) {
      child.name = name;
      child.metadata.path = path;
      child.children = children; // Set children at the last path element
      return;
    }
    if (child.children) {
      updateFileTree(child, pathIndex + 1); // Recursively traverse the file structure
    }
  };

  updateFileTree(fileTree, 0);
};

const sortChildren = (children: FileStructure[]): FileStructure[] => {
  return children.sort((a, b) => {
    if (a.isBranch && !b.isBranch) return -1;
    else if (!a.isBranch && b.isBranch) return 1;
    else {
      const startsWithSpecialA = /^[^A-Za-z0-9]/.test(a.name);
      const startsWithSpecialB = /^[^A-Za-z0-9]/.test(b.name);

      if (startsWithSpecialA && !startsWithSpecialB) return 1;
      else if (!startsWithSpecialA && startsWithSpecialB) return -1;
      else return a.name.localeCompare(b.name);
    }
  });
}