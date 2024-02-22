import "../gizmos.css";
import "./layout.css";

export const ContainerGizmo = () => {
  return (
    <div className="gizmo__wrapper">
      <div className="gizmo container">
        <div />
      </div>
      <span>Container</span>
    </div>
  );
};

export const SectionGizmo = () => {
  return (
    <div className="gizmo__wrapper">
      <div className="gizmo section">
        <div />
      </div>
      <span>Section</span>
    </div>
  );
};

export const RowGizmo = () => {
  return (
    <div className="gizmo__wrapper">
      <div className="gizmo row">
        <div />
        <div />
      </div>
      <span>Row</span>
    </div>
  );
};

export const ColumnGizmo = () => {
  return (
    <div className="gizmo__wrapper">
      <div className="gizmo column">
        <div />
        <div />
      </div>
      <span>Column</span>
    </div>
  );
};

export const GridGizmo = () => {
  return (
    <div className="gizmo__wrapper">
      <div className="gizmo grid">
        <div />
        <div />
        <div />
        <div />
      </div>
      <span>Grid</span>
    </div>
  );
};
