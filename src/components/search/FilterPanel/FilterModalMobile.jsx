import React, { useCallback, useEffect } from "react";
import sprite from "../../../assets/images/sprite.svg";
import MultiCheckBoxFilter from "../MultiCheckBoxFilter/MultiCheckBoxFilter";
import { themesArray, typesArray } from "../../../services/filterFormatter";
import FilterPanelSection from "../FilterPanelSection/FilterPanelSection";
import { array, arrayOf, oneOf, shape, string } from "prop-types";
import { SUPPORTED_ASSET_TYPES } from "../../../services/dataConstants";
import { getCategories } from "../../../assets/data/categories";
import { useFilter } from "../../common/FilterContext/context";
import RightsHoldersFilter from "../RightsHoldersFilter/RightsHoldersFilter";

const SUPPORTED_THEMES = getCategories().map((c) => c.key);

export const FilterModalMobile = ({ filter, rightsHoldersList }) => {
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
    onFilterDispatch,
    updateFilter
  } = useFilter();

  const { types, themes, rightsHolders, sortBy, direction } = {
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

  useEffect(() => {
    if (types.length > 0 || themes.length > 0 || rightsHolders.length > 0)
      updateFilter({ types, themes, rightsHolders });
  }, []);

  return (
    <div
      className="modal position-absolute w-100 h-100 it-dialog-scrollable fade"
      tabIndex="-1"
      role="dialog"
      id="exampleModalLongFixed"
      aria-labelledby="exampleModalLongFixedTitle"
    >
      <div className="modal-dialog modal-dialog-left m-0 h-100" role="document">
        <div className="modal-content h-100" style={{ width: "100vw" }}>
          <div
            className="modal-header"
            style={{ borderBottom: "1px solid #BFDFFF" }}
          >
            <a
              href="#"
              key="delete_all_chips"
              id="deleteAllFilter"
              role="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onFilterDispatch({ sortBy, direction });
                clearFilter({});
              }}
              data-bs-dismiss="modal"
              className="link-primary ms-2"
            >
              Rimuovi tutti i filtri
            </a>
            <button
              className="btn d-flex flex-row align-items-center text-primary p-0"
              type="button"
              data-bs-dismiss="modal"
              onClick={() => clearFilter({})}
              aria-label="Chiudi finestra modale"
            >
              Chiudi
              <svg className="icon icon-lg icon-primary">
                <use href={`${sprite}#it-close`}></use>
              </svg>
            </button>
          </div>
          <div className="modal-body">
            <div className="mt-4">
              <FilterPanelSection title="Strumento semantico">
                <MultiCheckBoxFilter
                  title="Tipologie"
                  labbledById="Filtra_per_Tipologie"
                  keysAndLabels={typesArray}
                  selection={filterState?.types}
                  onSelectionUpdate={onTypesUpdate}
                />
              </FilterPanelSection>
              <FilterPanelSection title="Titolare">
                <RightsHoldersFilter
                  keysAndLabels={rightsHoldersList}
                  rightsHolders={rightsHolders}
                  selection={filterState?.rightsHolders}
                  onRightsHoldersUpdate={onRightsHoldersUpdate}
                  isMobileFilter
                />
              </FilterPanelSection>
              <FilterPanelSection title="Categoria">
                <MultiCheckBoxFilter
                  keysAndLabels={themesArray}
                  title="Categorie"
                  labbledById="Filtra_per_Categorie"
                  selection={filterState?.themes}
                  onSelectionUpdate={onThemesUpdate}
                />
              </FilterPanelSection>
            </div>
          </div>
          <div
            style={{ borderTop: "1px solid #BFDFFF" }}
            className="modal-footer justify-content-center"
          >
            <button
              onClick={handleDispatchFilters}
              className="btn btn-primary btn-sm"
              data-bs-dismiss="modal"
              type="button"
            >
              Mostra risultati
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

FilterModalMobile.propTypes = {
  filter: shape({
    pattern: string,
    types: arrayOf(oneOf(SUPPORTED_ASSET_TYPES)),
    themes: arrayOf(oneOf(SUPPORTED_THEMES))
  }).isRequired,
  rightsHoldersList: array
};
