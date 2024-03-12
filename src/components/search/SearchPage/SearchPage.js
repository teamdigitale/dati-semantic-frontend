import React, { useCallback, useEffect, useState } from "react";
import { search } from "../../../services/searchService";
import FilterPanel from "../FilterPanel/FilterPanel";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../../services/routes";
import { DEFAULT_OFFSET, PAGE_SIZE } from "../Pagination/Pagination";

import BREADCRUMBS from "../../../services/BreadCrumbsConst";
import EndSection from "../../common/EndSection/EndSection";
import IntroSection from "../../common/IntroSection/IntroSection";
import { ResultCount } from "./partials/ResultCount";
import { List } from "./partials/List";
import { PaginationList } from "./partials/PaginationList";
import { OrderFilter } from "../OrderFilter/OrderFilter";

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [areFiltersActive, setAreFiltersActive] = useState(false);
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

  const updateFilterStatus = (newFilterStatus) => {
    setAreFiltersActive(newFilterStatus);
  };

  const onFilterUpdate = useCallback((newFilter) => {
    navigate(
      routes.search({
        ...newFilter,
        limit: PAGE_SIZE,
        offset: DEFAULT_OFFSET
      })
    );

    document
      .getElementById("searchAnchor")
      ?.scrollIntoView({ behavior: "smooth" });
    updateFilterStatus(true);
  }, []);

  useEffect(() => {
    document.title = "Search - Catalogo Nazionale Dati";
  });

  return (
    <>
      <IntroSection
        title="Cerca nel catalogo nazionale 
        della semantica dei dati"
        subtitle="Cerca e utilizza tra decine di asset semantici. Puoi cercare per parola chiave, filtrare i risultati per categoria o strumento semantico, o titolare."
        type=""
        isSearch={true}
        arrayBread={BREADCRUMBS.SEARCHPAGE}
      />
      <div className="container-fluid schemaPadding">
        <div className="col-12 mb-5" role="search">
          <FilterPanel filter={filter} onFilterUpdate={onFilterUpdate} />
        </div>
        <hr />
      </div>
      <div data-testid="SearchPage" className="mt-5">
        <div className="container-fluid schemaPadding">
          <div className="row mx-0">
            <div className="col-12 px-0" id="searchAnchor">
              <div className="d-flex direction-row align-items-end justify-content-between">
                <ResultCount
                  isLoading={isLoading}
                  error={error}
                  totalCount={searchResult?.totalCount}
                />
                <OrderFilter
                  orderQuery={filter}
                  onOrderChange={onFilterUpdate}
                />
              </div>
              <List
                isLoading={isLoading}
                error={error}
                searchResultData={searchResult?.data}
                areFiltersActive={areFiltersActive}
              />
              <PaginationList
                isLoading={isLoading}
                error={error}
                searchResult={searchResult}
                filter={filter}
              />
            </div>
          </div>
        </div>
        <EndSection type={2} />
      </div>
    </>
  );
};

SearchPage.propTypes = {};

SearchPage.defaultProps = {};

export default SearchPage;
