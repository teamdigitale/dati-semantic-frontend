import React, { useCallback, useEffect, useState } from "react";
import { search } from "../../../services/searchService";
import SearchResults from "../SearchResults/SearchResults";
import FilterPanel from "../FilterPanel/FilterPanel";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../../services/routes";
import Pagination, {
  DEFAULT_OFFSET,
  PAGE_SIZE,
} from "../Pagination/Pagination";

import SearchResultAlert from "../SearchResultAlert/SearchResultAlert";
import BREADCRUMBS from "../../../services/BreadCrumbsConst";
import EndSection from "../../common/EndSection/EndSection";
import IntroSection from "../../common/IntroSection/IntroSection";

const showItems = (isLoading, error, searchResult) => {
  const routNav = useNavigate();
  function goToError() {
    routNav("/errore");
  }
  if (isLoading) {
    return <h2>Caricamento...</h2>;
  }
  if (error) {
    goToError();
    return (
      <SearchResultAlert
        title="Errore imprevisto del server"
        message="Ci scusiamo per il disagio, riprovare fra qualche minuto"
      />
    );
  }
  if (!(searchResult.data && searchResult.data.length)) {
    return (
      <SearchResultAlert
        title="Nessun risultato trovato"
        message="La ricerca non ha prodotto nessun risultato, modifica i filtri o prova un'altra chiave di ricerca."
      />
    );
  }

  return (
    <div className="row mt-5">
      <div className="col-12">
        <SearchResults items={searchResult.data} />{" "}
      </div>
    </div>
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
      <div className="row mt-5 mb-4">
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
        {!error && !isLoading && searchResult?.totalCount ? (
          <p className="h2" role="status">
            {searchResult?.totalCount} risultati
          </p>
        ) : (
          ""
        )}
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

  useEffect(() => {
    document.title = "Search - Catalogo Nazionale Dati";
  });

  return (
    <React.Fragment>
      <IntroSection
        title="Cerca nel catalogo nazionale 
        della sematica dei dati"
        subtitle="Cerca e utilizza tra decine di asset semantici. Puoi cercare per parola chiave, filtrare i risultati per categoria o strumento semantico, o titolare."
        type=""
        isSearch={true}
        arrayBread={BREADCRUMBS.SEARCHPAGE}
      />
      <div data-testid="SearchPage" className="mt-5">
        <div className="container-fluid schemaPadding">
          <div className="row mx-0">
            <div className="col-12 col-lg-4 pl-lg-4 col-md-4" role="search">
              <FilterPanel
                filter={filter}
                onFilterUpdate={useCallback((newFilter) => {
                  navigate(
                    routes.search({
                      ...newFilter,
                      limit: PAGE_SIZE,
                      offset: DEFAULT_OFFSET,
                    })
                  );

                  document
                    .getElementById("searchAnchor")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, [])}
              />
            </div>
            <div className="col-12 col-lg-8 col-md-8" id="searchAnchor">
              {renderResultCount(isLoading, error, searchResult)}
              {showItems(isLoading, error, searchResult)}
              {renderPagination(
                isLoading,
                error,
                searchResult,
                filter,
                navigate
              )}
            </div>
          </div>
        </div>
        <EndSection type={1} />
      </div>
    </React.Fragment>
  );
};

SearchPage.propTypes = {};

SearchPage.defaultProps = {};

export default SearchPage;
