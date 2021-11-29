import React from "react";
import AssetTypeFilter from "../AssetTypeFilter/AssetTypeFilter";
import { useQuery } from "../../../hooks/useQuery";

const showAssetTypeFilter = (type) => {
  if (!type) {
    return null;
  }

  return <AssetTypeFilter types={[type]} />;
};

const FilterPanel = () => {
  let query = useQuery();

  return (
    <div id="filter-panel" data-testid="FilterPanel">
      <div className="row d-flex justify-content-center p-3">
        <div className="col">
          <h6>Ricerca</h6>
          {showAssetTypeFilter(query.get("type"))}
        </div>
      </div>
    </div>
  );
};

FilterPanel.propTypes = {};

FilterPanel.defaultProps = {};

export default FilterPanel;
