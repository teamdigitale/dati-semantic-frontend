import React from "react";
import AssetTypeFilter from "../AssetTypeFilter/AssetTypeFilter";
import { arrayOf, func, oneOf, string } from "prop-types";
import { SUPPORTED_ASSET_TYPES } from "../../../services/dataConstants";
import { getCategories } from "../../../assets/data/categories";

const SUPPORTED_THEMES = getCategories().map((c) => c.key);

const showAssetTypeFilter = (types) => {
  if (!types) {
    return null;
  }

  return <AssetTypeFilter types={types} />;
};

const FilterPanel = ({ pattern, types, themes }) => {
  return (
    <div id="filter-panel" data-testid="FilterPanel">
      <div className="row d-flex justify-content-center p-3">
        <div className="col">
          <h6>Ricerca</h6>
          <div>
            Ricerca testuale, pattern &quot;<strong>{pattern}</strong>&quot;
          </div>
          {showAssetTypeFilter(types)}
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
  onPatternUpdate: func,
  onTypeUpdate: func,
  onThemeUpdate: func,
};

FilterPanel.defaultProps = {};

export default FilterPanel;
