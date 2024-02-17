import "./Pages.css";
import { DiCss3, DiJavascript, DiNpm } from "react-icons/di";
import { FaList, FaRegFolder, FaRegFolderOpen } from "react-icons/fa";
import TreeView, { INode, flattenTree } from "react-accessible-treeview";
import { Fragment, FunctionComponent } from "react";
import { IFlatMetadata } from "react-accessible-treeview/dist/TreeView/utils";

const Pages = () => {
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
      {
        name: ".npmignore",
      },
      {
        name: "package.json",
      },
      {
        name: "webpack.config.js",
      },
    ],
  };

  const data: INode<IFlatMetadata>[] = flattenTree(fileStructure);

  const FolderIcon: FunctionComponent<{ isOpen: boolean }> = ({ isOpen }) =>
    isOpen ? (
      <FaRegFolderOpen color="e8a87c" className="icon" />
    ) : (
      <FaRegFolder color="e8a87c" className="icon" />
    );

  const FileIcon: FunctionComponent<{ filename: string }> = ({ filename }) => {
    const extension = filename.slice(filename.lastIndexOf(".") + 1);
    switch (extension) {
      case "js":
        return <DiJavascript color="yellow" className="icon" />;
      case "css":
        return <DiCss3 color="turquoise" className="icon" />;
      case "json":
        return <FaList color="yellow" className="icon" />;
      case "npmignore":
        return <DiNpm color="red" className="icon" />;
      default:
        return null;
    }
  };

  function DirectoryTreeView() {
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
              <div {...getNodeProps()} style={{ paddingLeft: 8 * (level - 1) }}>
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

  return (
    <Fragment>
      <DirectoryTreeView />
    </Fragment>
  );
};

export default Pages;
