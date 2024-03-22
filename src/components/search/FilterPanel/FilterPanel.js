import React, { useCallback, useEffect } from "react";
import { array, arrayOf, oneOf, shape, string } from "prop-types";
import { SUPPORTED_ASSET_TYPES } from "../../../services/dataConstants";
import { getCategories } from "../../../assets/data/categories";
import AssetTypeFilter from "../AssetTypeFilter/AssetTypeFilter";
import ThemeFilter from "../ThemeFilter/ThemeFilter";
import RightsHoldersFilter from "../RightsHoldersFilter/RightsHoldersFilter";
import { useFilter } from "../../common/FilterContext/context";
import { filterFormatter } from "../../../services/filterFormatter";
import sprite from "../../../assets/images/sprite.svg";
import "./FilterPanel.css";

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
    setFilter: clearFilter,
    updateFilter,
    onFilterDispatch
  } = useFilter();

  const { types, themes, rightsHolders } = {
    ...defaultFilterValues,
    ...filter
  };

  const filterChips = filterFormatter(filter, rightsHoldersList);

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
    clearFilter({});
  };

  const handleRemoveFilter = (filterToRemove, event) => {
    event.stopPropagation();

    if (filterToRemove.key.includes("all")) {
      onFilterDispatch({ ...filter, [filterToRemove.cat]: [] });
      clearFilter({});
      return;
    }

    if (filterToRemove.cat != "pattern") {
      onFilterDispatch({
        ...filter,
        [filterToRemove.cat]: filter[filterToRemove.cat].filter(
          (el) => el != filterToRemove.key
        )
      });
      clearFilter({
        rightsHolders: filterState.rightsHolders
          ? filterState.rightsHolders.filter((el) => el != filterToRemove.key)
          : []
      });
    } else {
      delete filter.pattern;
      onFilterDispatch(filter);
    }
  };

  const isDisableSubmitButton =
    Object.keys(filterState || {}).length == 0 ? "disabled" : "";

  useEffect(() => {
    if (rightsHolders.length > 0)
      updateFilter({ ...filterState, rightsHolders });
  }, [rightsHolders.length]);

  const renderChips = (chip) => {
    if (chip.key == "removeAll" && filterChips.length > 1)
      return (
        <a
          href="#"
          key="delete_all_chips"
          id="deleteAllFilter"
          role="button"
          onClick={() => {
            onFilterDispatch({});
            clearFilter({});
          }}
          className="link-primary ms-2"
        >
          Annulla filtri
        </a>
      );
    else if (filterChips.length == 1) return;

    return (
      <div
        className="chip m-1 alert chip-primary bg-white"
        id="chipsFilter"
        style={{
          width: "fit-content",
          maxWidth: "100%"
        }}
        key={chip.key}
      >
        <span
          style={{
            height: "100%",
            transform: "none"
          }}
          className="chip-label d-block fw-bold text-truncate"
        >
          {chip.type}: {chip.label}
        </span>
        <button onClick={(e) => handleRemoveFilter(chip, e)}>
          <svg className="icon icon-sm">
            <use href={`${sprite}#it-close`}></use>
          </svg>
          <span className="visually-hidden">Elimina filtro</span>
        </button>
      </div>
    );
  };

  return (
    <div id="filter-panel" data-testid="FilterPanel">
      <div className="row g-4 align-items-end mb-2 justify-content-between">
        <div className="row row-cols-md-3 row-cols-sm-1 col-11">
          <AssetTypeFilter types={types} onTypesUpdate={onTypesUpdate} />
          <RightsHoldersFilter
            keysAndLabels={rightsHoldersList}
            rightsHolders={rightsHolders}
            selection={filterState?.rightsHolders}
            onRightsHoldersUpdate={onRightsHoldersUpdate}
          />
          <ThemeFilter themes={themes} onThemesUpdate={onThemesUpdate} />
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
      <div className="mt-4">{filterChips.map(renderChips)}</div>
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

FilterPanel.defaultProps = {};

export default FilterPanel;
