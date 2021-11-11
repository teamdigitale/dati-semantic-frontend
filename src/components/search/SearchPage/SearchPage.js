import React from "react";
import { useLocation } from "react-router-dom";
import AssetTypeFilter from "../AssetTypeFilter/AssetTypeFilter";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const assetTypeFilter = (type) => {
  if (!type) {
    return;
  }

  return <AssetTypeFilter types={[type]} />;
};

const SearchPage = () => {
  let query = useQuery();
  return (
    <div data-testid="SearchPage">
      <div className="container main-container pl-4 pr-4">
        <div className="row">
          <div className="col-12 col-lg-4 col-md-4 primary-bg-a2" role="search">
            <div id="cv-facet-pane">
              <div className="row d-flex justify-content-center p-3">
                <div className="col">
                  <h4>Ricerca</h4>
                  {assetTypeFilter(query.get("type"))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 col-md-8">
            <div className="border bg-secondary text-white p-3 m-5">
              Immetti un criterio di ricerca
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SearchPage.propTypes = {};

SearchPage.defaultProps = {};

export default SearchPage;
