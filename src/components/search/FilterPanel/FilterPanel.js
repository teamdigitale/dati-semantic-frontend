import React, { useCallback } from "react";
import { array, arrayOf, oneOf, shape, string } from "prop-types";
import { SUPPORTED_ASSET_TYPES } from "../../../services/dataConstants";
import { getCategories } from "../../../assets/data/categories";
import AssetTypeFilter from "../AssetTypeFilter/AssetTypeFilter";
import ThemeFilter from "../ThemeFilter/ThemeFilter";
import RightsHoldersFilter from "../RightsHoldersFilter/RightsHoldersFilter";
import { useFilter } from "../../common/FilterContext/context";

const SUPPORTED_THEMES = getCategories().map((c) => c.key);

const FilterPanel = ({ filter, rightsHoldersList }) => {
  const defaultFilterValues = {
    pattern: "",
    types: [],
    themes: [],
    rightsHolders: []
  };

  const {
    filter: filterState,
    onFilterFieldUpdate,
    onFilterDispatch
  } = useFilter();

  const { types, themes, rightsHolders } = {
    ...defaultFilterValues,
    ...filter
  };

  const onTypesUpdate = useCallback(onFilterFieldUpdate("types"), [
    filterState
  ]);
  const onThemesUpdate = useCallback(onFilterFieldUpdate("themes"), [
    filterState
  ]);
  const onRightsHoldersUpdate = useCallback(
    onFilterFieldUpdate("rightsHolders"),
    [filterState]
  );

  const handleDispatchFilters = () => {
    onFilterDispatch({ ...filter, ...filterState });
  };

  const isDisableSubmitButton =
    Object.keys(filterState || {}).length == 0 ? "disabled" : "";

  return (
    <div id="filter-panel" data-testid="FilterPanel" className="pb-4">
      <div className="row g-4 align-items-end mb-2 justify-content-between">
        <div className="row row-cols-md-3 row-cols-sm-1 col-11">
          <AssetTypeFilter
            types={types}
            selection={filterState?.types}
            onTypesUpdate={onTypesUpdate}
          />
          <RightsHoldersFilter
            keysAndLabels={rightsHoldersList}
            rightsHolders={rightsHolders}
            selection={filterState?.rightsHolders}
            onRightsHoldersUpdate={onRightsHoldersUpdate}
          />
          <ThemeFilter
            themes={themes}
            selection={filterState?.themes}
            onThemesUpdate={onThemesUpdate}
          />
        </div>
        <div className="col-1 d-flex justify-content-end">
          <button
            type="button"
            onClick={handleDispatchFilters}
            className={`btn btn-outline-primary ${isDisableSubmitButton}`}
            aria-disabled={isDisableSubmitButton ? "true" : "false"}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

FilterPanel.propTypes = {
  filter: shape({
    pattern: string,
    types: arrayOf(oneOf(SUPPORTED_ASSET_TYPES)),
    themes: arrayOf(oneOf(SUPPORTED_THEMES))
  }).isRequired,
  rightsHoldersList: array
};

export default FilterPanel;
