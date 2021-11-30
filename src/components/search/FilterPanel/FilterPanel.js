import React from "react";
import AssetTypeFilter from "../AssetTypeFilter/AssetTypeFilter";
import { arrayOf, func, oneOf, string } from "prop-types";
import { SUPPORTED_ASSET_TYPES } from "../../../services/dataConstants";
import { getCategories } from "../../../assets/data/categories";
import PatternFilter from "../PatternFilter/PatternFilter";

const SUPPORTED_THEMES = getCategories().map((c) => c.key);

const FilterPanel = ({ pattern, types, themes, onFilterUpdate }) => {
  const onPatternUpdate = (newPattern) => {
    if (onFilterUpdate) {
      const filter = { pattern: newPattern, types, themes };
      onFilterUpdate(filter);
    }
  };

  return (
    <div id="filter-panel" data-testid="FilterPanel">
      <div className="row d-flex justify-content-center p-3">
        <div className="col">
          <PatternFilter pattern={pattern} onPatternUpdate={onPatternUpdate} />
          <AssetTypeFilter types={types} />
          <div>
            Filtro per categoria: &quot;<strong>{themes}</strong>&quot;
          </div>
        </div>
      </div>
    </div>
  );
};

FilterPanel.propTypes = {
  pattern: string,
  types: arrayOf(oneOf(SUPPORTED_ASSET_TYPES)),
  themes: arrayOf(oneOf(SUPPORTED_THEMES)),
  onFilterUpdate: func,
};

FilterPanel.defaultProps = {
  types: [],
  themes: [],
  pattern: "",
};

export default FilterPanel;
