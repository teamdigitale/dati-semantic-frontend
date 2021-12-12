import sprite from "../../../../assets/images/sprite.svg";
import * as PropTypes from "prop-types";
import React from "react";
import rowStyle from "../metadata/MetadataRow.module.css";

const AssetIriRow = (props) => {
  return (
    <div className="row" data-testid="asset-iri-row">
      <div className={"col-3 strong " + rowStyle.propertyName}>URI</div>
      <div className="col-8">
        <span className={rowStyle.propertyValue}>{props.assetIri}</span>
      </div>
      <div className="col-1">
        <div
          className="btn btn-sm pt-0"
          onClick={() => window.open(props.assetIri)}
        >
          <svg
            className="icon icon-primary icon-sm"
            data-testid="external-link-icon"
          >
            <use href={sprite + "#it-external-link"} />
          </svg>
        </div>
      </div>
    </div>
  );
};

AssetIriRow.propTypes = {
  assetIri: PropTypes.string.isRequired,
};

export default AssetIriRow;
