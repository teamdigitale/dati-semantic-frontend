import React from "react";
import PropTypes, { func } from "prop-types";
import {
  getAssetLabel,
  SUPPORTED_ASSET_TYPES,
} from "../../../services/dataConstants";

const AssetTypeFilter = ({ types, onTypesUpdate }) => {
  const addToSelection = (toBeAdded) => () => {
    onTypesUpdate([...types, toBeAdded]);
  };

  const removeFromSelection = (toBeRemoved) => () => {
    onTypesUpdate(types.filter((t) => t !== toBeRemoved));
  };

  const displayOption = (t) => {
    const checked = types.includes(t);
    const id = "check-" + t;
    const toggleSelection = checked
      ? removeFromSelection(t)
      : addToSelection(t);
    return (
      <li key={t}>
        <div className="form-check">
          <input
            type="checkbox"
            id={id}
            checked={checked}
            role="option"
            onChange={toggleSelection}
          />
          <label htmlFor={id}>{getAssetLabel(t)}</label>
        </div>
      </li>
    );
  };

  return (
    <div data-testid="AssetTypeFilter">
      <h6 className="filter-section-title">Tipologie</h6>
      <div className="it-list-wrapper">
        <ul className="it-list" role="listbox">
          {SUPPORTED_ASSET_TYPES.map((t) => displayOption(t))}
        </ul>
      </div>
    </div>
  );
};

AssetTypeFilter.propTypes = {
  types: PropTypes.arrayOf(PropTypes.oneOf(SUPPORTED_ASSET_TYPES)).isRequired,
  onTypesUpdate: func.isRequired,
};

AssetTypeFilter.defaultProps = {};

export default AssetTypeFilter;
