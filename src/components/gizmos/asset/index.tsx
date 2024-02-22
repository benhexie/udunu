import "./asset.css";
import { CiImageOn } from "react-icons/ci";
import { GoVideo } from "react-icons/go";
import { PiSpeakerHigh } from "react-icons/pi";

export const ImageGizmo = () => {
  return (
    <div className="gizmo__wrapper">
      <div className="gizmo image">
        <CiImageOn className="icon" />
      </div>
      <span>Image</span>
    </div>
  );
};

export const VideoGizmo = () => {
  return (
    <div className="gizmo__wrapper">
      <div className="gizmo video">
        <GoVideo className="icon" />
      </div>
      <span>Video</span>
    </div>
  );
};

export const AudioGizmo = () => {
  return (
    <div className="gizmo__wrapper">
      <div className="gizmo audio">
        <PiSpeakerHigh className="icon" />
      </div>
      <span>Audio</span>
    </div>
  );
};
