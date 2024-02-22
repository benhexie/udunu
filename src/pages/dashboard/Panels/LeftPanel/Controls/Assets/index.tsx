import { Fragment, ReactNode } from "react";
import { useSelector } from "react-redux";
import { assetInterface } from "../../../../../../types/currentProject";

const Assets = () => {
  const assets = useSelector((state: any) => state.project.assets);
  return (
    <Fragment>
      {assets.length > 0 ? (
        <div className="dashboard__panel__section">
          {assets.map((asset: assetInterface, index: number) => (
            <div key={index} className="dashboard__panel__section__item">
              {((): ReactNode => {
                const path = `file://${asset.path}`;
                switch (asset.type) {
                  case "image":
                    return (
                      <img src={path} alt={asset.name} width={50} height={50} />
                    );
                  case "audio":
                    return (
                      <audio controls>
                        <source src={path} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    );
                  case "video":
                    return (
                      <video width="50" height="50" controls>
                        <source src={path} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    );
                  default:
                    return null;
                }
              })()}
            </div>
          ))}
        </div>
      ) : null}
      <div className="dashboard__panel__section"></div>
    </Fragment>
  );
};

export default Assets;
