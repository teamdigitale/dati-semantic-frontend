import React from "react";
import { Link } from "react-router-dom";
import {
  getAssetLabel,
  SUPPORTED_ASSET_TYPES,
} from "../../../services/dataConstants";

const AssetTypes = () => (
  <div data-testid="AssetTypes">
    <div className="row p-3">
      <h2>Sfoglia i dati per tipologia di strumento semantico</h2>
    </div>
    <div className="row" role="list">
      {SUPPORTED_ASSET_TYPES.map((type) => (
        <div key={type} className="col-3">
          <div
            className="p-2 m-1 align-middle border shadow-sm"
            role="listitem"
          >
            <p className="font-weight-bolder clearfix align-content-center">
              {" "}
              <Link to={"/search?type=" + type}>{getAssetLabel(type)}</Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

AssetTypes.propTypes = {};

AssetTypes.defaultProps = {};

export default AssetTypes;
