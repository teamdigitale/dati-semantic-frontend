import React from "react";
import PropTypes from "prop-types";
import {
  getAssetLabel,
  SUPPORTED_ASSET_TYPES,
} from "../../../services/dataConstants";

const AssetTypeFilter = (props) => (
  <div data-testid="AssetTypeFilter">
    <div role="label">Tipologia Strumento Semantico</div>
    <ul>
      {props.types.map((t) => (
        <li key="t">{getAssetLabel(t)}</li>
      ))}
    </ul>
  </div>
);

AssetTypeFilter.propTypes = {
  types: PropTypes.arrayOf(PropTypes.oneOf(SUPPORTED_ASSET_TYPES)),
};

AssetTypeFilter.defaultProps = {};

export default AssetTypeFilter;
