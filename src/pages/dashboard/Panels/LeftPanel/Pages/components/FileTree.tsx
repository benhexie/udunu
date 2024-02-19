import { FunctionComponent } from "react";
import TreeView, { INode, flattenTree } from "react-accessible-treeview";
import { IFlatMetadata } from "react-accessible-treeview/dist/TreeView/utils";
import { FaRegFolderOpen, FaRegFolder } from "react-icons/fa6";
import FileIcon from "./FileIcon";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../../../../../redux/action";

interface FileStructure {
  name: string;
  children?: FileStructure[];
}

const fileStructure: FileStructure = {
  name: "",
  children: [
    {
      name: "src",
      children: [{ name: "index.js" }, { name: "styles.css" }],
    },
    {
      name: "node_modules",
      children: [
        {
          name: "react-accessible-treeview",
          children: [{ name: "index.js" }],
        },
        { name: "react", children: [{ name: "index.js" }] },
      ],
    },
    { name: ".npmignore" },
    { name: "package.json" },
    { name: "webpack.config.js" },
  ],
};

const data: INode<IFlatMetadata>[] = flattenTree(fileStructure);

const FolderIcon: FunctionComponent<{ isOpen: boolean }> = ({ isOpen }) =>
  isOpen ? (
    <FaRegFolderOpen color="e8a87c" className="icon" />
  ) : (
    <FaRegFolder color="e8a87c" className="icon" />
  );

function FileTree() {
  const dispatch = useDispatch();

  return (
    <div className="dashboard__panel__content pages">
      <div className="directory">
        <TreeView
          data={data}
          aria-label="directory tree"
          nodeRenderer={({
            element,
            isBranch,
            isExpanded,
            getNodeProps,
            level,
          }) => (
            <div
              {...getNodeProps()}
              style={{ paddingLeft: 8 * (level - 1) }}
              onClick={(e: any) => {
                if (!isBranch) dispatch(setCurrentPage(element.name));
                getNodeProps().onClick(e);
              }}
            >
              {isBranch ? (
                <FolderIcon isOpen={isExpanded} />
              ) : (
                <FileIcon filename={element.name} />
              )}

              {element.name}
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default FileTree;
