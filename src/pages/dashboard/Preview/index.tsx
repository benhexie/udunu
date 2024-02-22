import "./Preview.css";
import { useSelector } from "react-redux";
import { LegacyRef, useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import {
  DropResult,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";
import { invoke } from "@tauri-apps/api";
import { updateGizmoLayout } from "../../../redux/actions";
import { useDispatch } from "react-redux";

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
  const [prevPageContent, setPrevPageContent] = useState("");
  const droppedGizmo = useSelector(
    (state: any) => state.project.droppedGizmo,
  ) as DropResult;
  const gizmoLayout = useSelector(
    (state: any) => state.project.gizmoLayout,
  ) as string[];
  const dispatch = useDispatch();

  useEffect(() => {
    if (!droppedGizmo) return;
    dispatch(updateGizmoLayout(droppedGizmo.draggableId));
  }, [droppedGizmo]);

  useEffect(() => {
    if (currentPage) {
      setEditor(getEditor());
    }
  }, [currentPage]);

  useEffect(() => {
    (async () => {
      if (currentPage && prevPageContent === pageContent) {
        try {
          const content = (await invoke("read_file", {
            filePath: currentPage,
          })) as string;
          setPageContent(content);
          setPrevPageContent(content);
          refreshEditor();
        } catch (error: any) {
          console.error(error);
        }
      }
    })();
  }, [currentPage, pageContent]);

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
    setTimeout(() => {
      setEditor(getEditor(false));
    }, 0);
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
              <div className="dashboard__preview__screen_webpage">
                {gizmoLayout.map((gizmo, index) => {
                  if (gizmo === "container-gizmo") {
                    return (
                      <div
                        key={index}
                        className="container-gizmo"
                        style={{
                          width: "200px",
                          height: "200px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          backgroundColor: "blue",
                        }}
                      ></div>
                    );
                  }
                  if (gizmo === "text-gizmo") {
                    return (
                      <p
                        key={index}
                        className="text-gizmo"
                        style={{ color: "black" }}
                      >
                        Text
                      </p>
                    );
                  }
                  if (gizmo === "heading-gizmo") {
                    return (
                      <h1
                        key={index}
                        className="heading-gizmo"
                        style={{ color: "black" }}
                      >
                        Heading
                      </h1>
                    );
                  }
                  if (gizmo === "image-gizmo") {
                    return (
                      <img
                        key={index}
                        className="image-gizmo"
                        src="https://via.placeholder.com/150"
                        alt="Placeholder"
                      />
                    );
                  }
                  if (gizmo === "button-gizmo") {
                    return (
                      <button key={index} className="button-gizmo">
                        Button
                      </button>
                    );
                  }
                  return <></>;
                })}
              </div>
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
