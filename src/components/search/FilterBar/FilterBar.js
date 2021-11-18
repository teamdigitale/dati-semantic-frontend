import React from "react";
import { string } from "prop-types";
import AssetTypeFilter from "../AssetTypeFilter/AssetTypeFilter";
import CategoryFilter from "../CategoryFilter/CategoryFilter";

const showAssetTypeFilter = (type) => {
  const types = !type ? [] : [type];

  return <AssetTypeFilter types={types} />;
};

const showCategoryFilter = (theme) => {
  const themes = !theme ? [] : [theme];

  return <CategoryFilter themes={themes} />;
};

const FilterBar = ({ type, theme }) => {
  return (
    <div id="facet-pane">
      <div className="row d-flex justify-content-center p-3">
        <div className="col">
          <h4>Ricerca</h4>
          {showAssetTypeFilter(type)}
          {showCategoryFilter(theme)}
        </div>
      </div>
    </div>
  );
};

FilterBar.propTypes = {
  type: string,
  theme: string,
  pattern: string,
};

FilterBar.defaultProps = {
  type: "",
  theme: "",
  pattern: "",
};

export default FilterBar;
