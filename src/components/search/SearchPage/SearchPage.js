import React, { useEffect, useState } from "react";
import { search } from "../../../services/searchService";
import SearchResults from "../SearchResults/SearchResults";
import FilterPanel from "../FilterPanel/FilterPanel";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../../services/routes";
import Callout from "../../common/Callout/Callout";
import Pagination, {
  DEFAULT_OFFSET,
  PAGE_SIZE,
} from "../Pagination/Pagination";

const showItems = (isLoading, error, searchResult) => {
  if (isLoading) {
    return <h2>Caricamento...</h2>;
  }
  if (error) {
    return (
      <Callout title="Errore di caricamento" type="danger">
        <p>Non è possibile caricare i dati: </p>
        <samp>{error}</samp>
      </Callout>
    );
  }
  return <SearchResults items={searchResult.data} />;
};

const onFilterUpdate = (navigate) => (newFilter) => {
  navigate(
    routes.search({ ...newFilter, limit: PAGE_SIZE, offset: DEFAULT_OFFSET })
  );
};

const onPageSelect = (navigate) => (filterWithPagination) => {
  navigate(routes.search(filterWithPagination));
};

function hasSearchResult(searchResult) {
  return searchResult && searchResult.data && searchResult.data.length > 0;
}

function renderPagination(isLoading, error, searchResult, filter, navigate) {
  return (
    !error &&
    !isLoading &&
    hasSearchResult(searchResult) && (
      <div className="row mt-5">
        <div className="col-12">
          <Pagination
            page={{
              totalCount: searchResult.totalCount,
              offset: searchResult.offset,
            }}
            filter={filter}
            onPageSelect={onPageSelect(navigate)}
          />
        </div>
      </div>
    )
  );
}

function renderResultCount(isLoading, error, searchResult) {
  return (
    <div className="row" data-testid="results-count">
      <div className="col-12">
        <h2>
          {!error && !isLoading && searchResult?.totalCount
            ? `${searchResult?.totalCount} risultati`
            : ""}
        </h2>
      </div>
    </div>
  );
}

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { search: urlSearch } = useLocation();
  const navigate = useNavigate();

  const filter = routes.searchUrlToFilter(urlSearch);

  useEffect(() => {
    const doSearch = async () => {
      setLoading(true);
      setError(false);
      try {
        const result = await search(filter);
        setSearchResult(result);
      } catch (e) {
        setError(e.message);
      }
      setLoading(false);
    };
    doSearch();
  }, [urlSearch]);

  return (
    <div data-testid="SearchPage" className="mt-5">
      <div className="container main-container pl-4 pr-4">
        <div className="row">
          <div className="col-12 col-lg-4 col-md-4" role="search">
            <FilterPanel
              filter={filter}
              onFilterUpdate={onFilterUpdate(navigate)}
            />
          </div>
          <div className="col-12 col-lg-8 col-md-8">
            {renderResultCount(isLoading, error, searchResult)}
            <div className="row mt-5">
              <div className="col-12">
                {showItems(isLoading, error, searchResult)}
              </div>
            </div>
            {renderPagination(isLoading, error, searchResult, filter, navigate)}
          </div>
        </div>
      </div>
    </div>
  );
};

SearchPage.propTypes = {};

SearchPage.defaultProps = {};

export default SearchPage;
