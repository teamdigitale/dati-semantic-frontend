import React from "react";
import PropTypes, { func } from "prop-types";
import {
  AT_TO_LABEL,
  SUPPORTED_ASSET_TYPES,
} from "../../../services/dataConstants";
import MultiCheckBoxFilter from "../MultiCheckBoxFilter/MultiCheckBoxFilter";

const keysAndLabels = AT_TO_LABEL.map((ttl) => ({
  key: ttl.type,
  label: ttl.label,
}));

const AssetTypeFilter = ({ types, onTypesUpdate }) => {
  return (
    <MultiCheckBoxFilter
      title="Tipologie"
      keysAndLabels={keysAndLabels}
      selection={types}
      onSelectionUpdate={onTypesUpdate}
    />
  );
};

AssetTypeFilter.propTypes = {
  types: PropTypes.arrayOf(PropTypes.oneOf(SUPPORTED_ASSET_TYPES)).isRequired,
  onTypesUpdate: func.isRequired,
};

AssetTypeFilter.defaultProps = {};

export default AssetTypeFilter;
