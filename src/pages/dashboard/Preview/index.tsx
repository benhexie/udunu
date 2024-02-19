import "./Preview.css";
import { useSelector } from "react-redux";
import { LegacyRef, useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import {
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";

const extToLangMap: { [key: string]: string } = {
  html: "html",
  js: "javascript",
  jsx: "javascript",
  ts: "typescript",
  tsx: "typescript",
  css: "css",
  java: "java",
  py: "python",
  json: "json",
  xml: "xml",
  md: "markdown",
};

const Preview = ({
  screenRef,
  screenType,
}: {
  screenRef: LegacyRef<HTMLDivElement>;
  screenType: string;
}) => {
  const acceptedPreviewExtensions = ["html", "js", "jsx", "ts", "tsx"];
  const currentPage = useSelector((state: any) => state.project.currentPage);
  const [pageContent, setPageContent] = useState("");
  const [editor, setEditor] = useState<JSX.Element | null>(null);
  const leftPanelVisibility = useSelector(
    (state: any) => state.dashboard.settings.leftPanelVisibility,
  );
  const rightPanelVisibility = useSelector(
    (state: any) => state.dashboard.settings.rightPanelVisibility,
  );

  useEffect(() => {
    if (currentPage) {
      setEditor(getEditor());
    }
  }, [currentPage]);

  function getEditor(pageChanged = true) {
    return (
      <Editor
        width={`100%`}
        height={`100%`}
        theme="vs-dark"
        className="editor2"
        value={pageContent}
        loading={pageChanged ? "Loading..." : ""}
        onMount={(editor) => {
          editor.focus();
        }}
        onChange={(value: string | undefined) => setPageContent(value || "")}
        language={
          extToLangMap[currentPage.slice(currentPage.lastIndexOf(".") + 1)] ||
          "plaintext"
        }
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          // wordWrap: "on",
          wrappingIndent: "indent",
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    );
  }

  function refreshEditor() {
    setEditor(<></>);
    setTimeout(() => setEditor(getEditor(false)), 0);
  }

  useEffect(() => {
    if (currentPage) refreshEditor();
  }, [leftPanelVisibility, rightPanelVisibility]);

  useEffect(() => {
    window.onresize = () => {
      if (currentPage) refreshEditor();
    };
  }, []);

  return (
    <div className="dashboard__preview">
      {(() => {
        if (acceptedPreviewExtensions.includes(currentPage.split(".").pop())) {
          return (
            <div
              className={`dashboard__preview__screen ${screenType}`}
              id="screen"
              ref={screenRef}
            >
              <Droppable droppableId="droppable-preview" type="PREVIEW">
                {(
                  provided: DroppableProvided,
                  snapshot: DroppableStateSnapshot,
                ) => (
                  <div
                    {...provided.droppableProps}
                    className={`dashboard__preview__screen__content ${screenType}`}
                    id="screen-content"
                    ref={provided.innerRef}
                  >
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          );
        }
        if (currentPage) return <>{editor}</>;
        return <></>;
      })()}
    </div>
  );
};

export default Preview;
