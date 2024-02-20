import { FunctionComponent, useEffect, useState } from "react";
import TreeView, { INode, flattenTree } from "react-accessible-treeview";
import { IFlatMetadata } from "react-accessible-treeview/dist/TreeView/utils";
import { FaRegFolderOpen, FaRegFolder } from "react-icons/fa6";
import FileIcon from "./FileIcon";
import { useDispatch } from "react-redux";
import { setCurrentPage, updateFetchedPaths, updateFileTree } from "../../../../../../redux/actions";
import { FileStructure } from "../../../../../../types/currentProject";
import { useSelector } from "react-redux";
import getFolderContent from "../../../../../../utils/getFolderContent";

function FileTree() {
  const dispatch = useDispatch();
  const fileStructure: FileStructure = useSelector(
    (state: any) => state.project.fileTree,
  );
  const fetchedPaths: string[] = useSelector(
    (state: any) => state.project.fetchedPaths,
  );
  
  const [fileTreeData, setFileTreeData] = useState<INode<IFlatMetadata>[]>([]);

  useEffect(() => {
    const data: INode<IFlatMetadata>[] = flattenTree(fileStructure);   
    setFileTreeData(data);
  }, [fileStructure]);

  const FolderIcon: FunctionComponent<{ isOpen: boolean }> = ({ isOpen }) =>
    isOpen ? (
      <FaRegFolderOpen color="e8a87c" className="icon" />
    ) : (
      <FaRegFolder color="e8a87c" className="icon" />
    );
    

  return (
    <div className="dashboard__panel__content pages">
      <div className="directory">
        {fileTreeData.length > 0 && (
          <TreeView
            data={fileTreeData}
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
                onClick={async (e: any) => {
                  const name = element.name;
                  const path = element.metadata?.path as string;
                  if (!isBranch) dispatch(setCurrentPage(name));
                  else {
                    if (!isExpanded) {
                      if (!fetchedPaths.includes(path)) {
                        const children: FileStructure[] = await getFolderContent(path) as FileStructure[]; 
                        dispatch(updateFetchedPaths(path));                   
                        dispatch(updateFileTree(name, path, children));
                      }
                    }
                  }
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
        )}
      </div>
    </div>
  );
}

export default FileTree;
