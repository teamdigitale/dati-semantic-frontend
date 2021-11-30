import React, { useCallback } from "react";
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

  const allSelected = SUPPORTED_ASSET_TYPES.length === types.length;
  const noneSelected = types.length === 0;
  const someSelected = !(allSelected || noneSelected);

  const indeterminateSetter = useCallback(
    (el) => {
      if (el && someSelected) {
        el.indeterminate = true;
      }
    },
    [someSelected]
  );

  const rotateAllSelection = () => {
    if (someSelected || noneSelected) {
      onTypesUpdate(SUPPORTED_ASSET_TYPES);
      return;
    }

    if (allSelected) {
      onTypesUpdate([]);
    }
  };

  return (
    <div data-testid="AssetTypeFilter">
      <h6 className="filter-section-title">Tipologie</h6>
      <div className="it-list-wrapper">
        <ul className="it-list" role="listbox">
          <li key="all">
            <div className="form-check">
              <input
                type="checkbox"
                id="all-types"
                checked={allSelected}
                role="option"
                onChange={rotateAllSelection}
                ref={indeterminateSetter}
              />
              <label htmlFor="all-types">Tutte</label>
            </div>
          </li>
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
