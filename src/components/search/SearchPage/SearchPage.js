import React from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

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
                  <h4>cerca tra i vocabolari</h4>
                  <span>{query.get("type")}</span>
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
