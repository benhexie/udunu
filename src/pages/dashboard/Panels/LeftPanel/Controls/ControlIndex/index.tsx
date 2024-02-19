import { Fragment, useState } from "react";
import { TbCaretDownFilled, TbCaretUpFilled } from "react-icons/tb";
import {
  ContainerGizmo,
  SectionGizmo,
} from "../../../../../../components/gizmos/layout";
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";

const ControlIndex = () => {
  const [showLayout, setShowLayout] = useState(true);

  return (
    <Fragment>
      <div className="dashboard__panel__section">
        <div className="dashboard__panel__subheader">
          <div
            className="dashboard__panel__subheader__dropdown"
            onClick={() => setShowLayout(!showLayout)}
          >
            {showLayout ? <TbCaretUpFilled /> : <TbCaretDownFilled />}
            <h4>Layout</h4>
          </div>
        </div>
        <Droppable
          droppableId="layout-gizmos-droppable"
          type="LAYOUT"
          direction="horizontal"
        >
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={`dashboard__panel__section__content ${
                showLayout ? "" : "hidden"
              }`}
            >
              <Draggable draggableId="container-gizmo" index={0}>
                {(
                  provided: DraggableProvided,
                  snapshot: DraggableStateSnapshot,
                ) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <ContainerGizmo />
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="section-gizmo" index={1}>
                {(
                  provided: DraggableProvided,
                  snapshot: DraggableStateSnapshot,
                ) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <SectionGizmo />
                  </div>
                )}
              </Draggable>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </Fragment>
  );
};

export default ControlIndex;
