import { Fragment, useState } from "react";
import { TbCaretDownFilled, TbCaretUpFilled } from "react-icons/tb";
import {
  AudioGizmo,
  ButtonGizmo,
  ColumnGizmo,
  ContainerGizmo,
  GridGizmo,
  HeadingGizmo,
  ImageGizmo,
  InputGizmo,
  LinkGizmo,
  ListGizmo,
  RowGizmo,
  SectionGizmo,
  TableGizmo,
  TextGizmo,
  VideoGizmo,
} from "../../../../../../components/gizmos";
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
              <Draggable draggableId="row-gizmo" index={2}>
                {(
                  provided: DraggableProvided,
                  snapshot: DraggableStateSnapshot,
                ) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <RowGizmo />
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="column-gizmo" index={3}>
                {(
                  provided: DraggableProvided,
                  snapshot: DraggableStateSnapshot,
                ) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <ColumnGizmo />
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="grid-gizmo" index={4}>
                {(
                  provided: DraggableProvided,
                  snapshot: DraggableStateSnapshot,
                ) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <GridGizmo />
                  </div>
                )}
              </Draggable>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <div className="dashboard__panel__subheader">
          <div
            className="dashboard__panel__subheader__dropdown"
            onClick={() => setShowLayout(!showLayout)}
          >
            {showLayout ? <TbCaretUpFilled /> : <TbCaretDownFilled />}
            <h4>Typography</h4>
          </div>
        </div>
        <Droppable
          droppableId="typography-gizmos-droppable"
          type="TYPOGRAPHY"
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
              <Draggable draggableId="text-gizmo" index={0}>
                {(
                  provided: DraggableProvided,
                  snapshot: DraggableStateSnapshot,
                ) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TextGizmo />
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="heading-gizmo" index={1}>
                {(
                  provided: DraggableProvided,
                  snapshot: DraggableStateSnapshot,
                ) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <HeadingGizmo />
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="link-gizmo" index={2}>
                {(
                  provided: DraggableProvided,
                  snapshot: DraggableStateSnapshot,
                ) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <LinkGizmo />
                  </div>
                )}
              </Draggable>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <div className="dashboard__panel__subheader">
          <div
            className="dashboard__panel__subheader__dropdown"
            onClick={() => setShowLayout(!showLayout)}
          >
            {showLayout ? <TbCaretUpFilled /> : <TbCaretDownFilled />}
            <h4>Basic</h4>
          </div>
        </div>
        <Droppable
          droppableId="basic-gizmos-droppable"
          type="BASIC"
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
              <Draggable draggableId="button-gizmo" index={0}>
                {(
                  provided: DraggableProvided,
                  snapshot: DraggableStateSnapshot,
                ) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <ButtonGizmo />
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="input-gizmo" index={1}>
                {(
                  provided: DraggableProvided,
                  snapshot: DraggableStateSnapshot,
                ) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <InputGizmo />
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="list-gizmo" index={2}>
                {(
                  provided: DraggableProvided,
                  snapshot: DraggableStateSnapshot,
                ) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <ListGizmo />
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="table-gizmo" index={3}>
                {(
                  provided: DraggableProvided,
                  snapshot: DraggableStateSnapshot,
                ) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TableGizmo />
                  </div>
                )}
              </Draggable>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <div className="dashboard__panel__subheader">
          <div
            className="dashboard__panel__subheader__dropdown"
            onClick={() => setShowLayout(!showLayout)}
          >
            {showLayout ? <TbCaretUpFilled /> : <TbCaretDownFilled />}
            <h4>Asset</h4>
          </div>
        </div>
        <Droppable
          droppableId="asset-gizmos-droppable"
          type="ASSET"
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
              <Draggable draggableId="image-gizmo" index={0}>
                {(
                  provided: DraggableProvided,
                  snapshot: DraggableStateSnapshot,
                ) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <ImageGizmo />
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="video-gizmo" index={1}>
                {(
                  provided: DraggableProvided,
                  snapshot: DraggableStateSnapshot,
                ) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <VideoGizmo />
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="audio-gizmo" index={2}>
                {(
                  provided: DraggableProvided,
                  snapshot: DraggableStateSnapshot,
                ) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <AudioGizmo />
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
