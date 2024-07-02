import React, { useMemo } from "react";
import PropTypes, { func, string } from "prop-types";
import {
  AT_TO_LABEL,
  SUPPORTED_ASSET_TYPES
} from "../../../services/dataConstants";
import { MultiSelectChips } from "../MultiSelectChips/MultiSelectChips";

const AssetTypeFilter = ({ types, onTypesUpdate, selection }) => {
  const keysAndLabels = useMemo(
    () =>
      AT_TO_LABEL.map((ttl) => ({
        key: ttl.type,
        label: ttl.label
      })),
    []
  );

  return (
    <MultiSelectChips
      label="Filtra per Strumento semantico"
      onSelectionUpdate={onTypesUpdate}
      keysAndLabels={keysAndLabels}
      labbledById="Filtra_per_Strumento_sematico"
      selection={selection}
      filter={types}
      type="types"
    />
  );
};

AssetTypeFilter.propTypes = {
  types: PropTypes.arrayOf(PropTypes.oneOf(SUPPORTED_ASSET_TYPES)).isRequired,
  onTypesUpdate: func.isRequired,
  selection: PropTypes.arrayOf(string)
};

export default AssetTypeFilter;
