import React from "react";
import PropTypes from "prop-types";
import {
  getAssetLabel,
  SUPPORTED_ASSET_TYPES,
} from "../../../services/dataConstants";

const AssetTypeFilter = (props) => (
  <div data-testid="AssetTypeFilter">
    {props.types.map((t) => (
      <div key={t} className="chip chip-simple chip-lg">
        <span className="chip-label">Tipologia: {getAssetLabel(t)}</span>
      </div>
    ))}
  </div>
);

AssetTypeFilter.propTypes = {
  types: PropTypes.arrayOf(PropTypes.oneOf(SUPPORTED_ASSET_TYPES)),
};

AssetTypeFilter.defaultProps = {};

export default AssetTypeFilter;
