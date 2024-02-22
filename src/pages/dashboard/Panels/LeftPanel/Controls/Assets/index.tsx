import { Fragment, ReactNode } from "react";
import { useSelector } from "react-redux";
import { assetInterface } from "../../../../../../types/currentProject";
import { invoke } from "@tauri-apps/api";
import { useDispatch } from "react-redux";
import { updateImportedAssets } from "../../../../../../redux/actions";

const Assets = () => {
  const assets = useSelector((state: any) => state.project.assets);
  const dispatch = useDispatch();

  const handleImportAssets = async () => {
    const [error, message, assets] = (await invoke("get_assets")) as [
      boolean,
      string,
      assetInterface[],
    ];
    if (error) return console.error(message);
    console.log(assets);

    dispatch(updateImportedAssets(assets));
  };

  return (
    <Fragment>
      <div className="dashboard__panel__section assets">
        <button
          className="dashboard__panel__section__button"
          onClick={handleImportAssets}
        >
          Import Assets
        </button>
      </div>
      {assets.length > 0 ? (
        <div className="dashboard__panel__section__content">
          {assets.map((asset: assetInterface, index: number) => (
            <div key={index} className="dashboard__panel__section__item">
              {((): ReactNode => {
                switch (asset.fileType) {
                  case "image":
                    return (
                      <img
                        src={asset.path}
                        alt={asset.name}
                        width={50}
                        height={50}
                      />
                    );
                  case "audio":
                    return (
                      <audio controls>
                        <source src={asset.path} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    );
                  case "video":
                    return (
                      <video width="50" height="50" controls>
                        <source src={asset.path} type="video/mp4" />
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
      ) : (
        <p>No asset has been added</p>
      )}
    </Fragment>
  );
};

export default Assets;
