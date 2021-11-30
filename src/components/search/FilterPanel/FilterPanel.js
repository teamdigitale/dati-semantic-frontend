import React from "react";
import AssetTypeFilter from "../AssetTypeFilter/AssetTypeFilter";
import { arrayOf, func, oneOf, shape, string } from "prop-types";
import { SUPPORTED_ASSET_TYPES } from "../../../services/dataConstants";
import { getCategories } from "../../../assets/data/categories";
import PatternFilter from "../PatternFilter/PatternFilter";

const SUPPORTED_THEMES = getCategories().map((c) => c.key);

const FilterPanel = ({ filter, onFilterUpdate }) => {
  const defaultFilterValues = { pattern: "", types: [], themes: [] };
  const { pattern, types, themes } = { ...defaultFilterValues, ...filter };
  const onPatternUpdate = (newPattern) => {
    if (onFilterUpdate) {
      onFilterUpdate({ ...filter, pattern: newPattern });
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
  filter: shape({
    pattern: string,
    types: arrayOf(oneOf(SUPPORTED_ASSET_TYPES)),
    themes: arrayOf(oneOf(SUPPORTED_THEMES)),
  }).isRequired,
  onFilterUpdate: func,
};

FilterPanel.defaultProps = {};

export default FilterPanel;