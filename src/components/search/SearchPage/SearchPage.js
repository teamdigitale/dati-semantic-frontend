import React, { useCallback, useEffect, useState } from "react";
import { search } from "../../../services/searchService";
import SearchResults from "../SearchResults/SearchResults";
import FilterPanel from "../FilterPanel/FilterPanel";
import { useLocation, useNavigate } from "react-router-dom";
import { DIGITALE_DOCS_URL, routes } from "../../../services/routes";
import Pagination, {
  DEFAULT_OFFSET,
  PAGE_SIZE,
} from "../Pagination/Pagination";
import IntroSection from "../../common/IntroSection/IntroSection";
import SearchResultAlert from "../SearchResultAlert/SearchResultAlert";
import BreadCrumbs from "../../common/BreadCrumbs/BreadCrumbs";
import BREADCRUMBS from "../../../services/BreadCrumbsConst";

const showItems = (isLoading, error, searchResult) => {
  const routNav = useNavigate();
  function goToError() {
    routNav("/errore");
  }
  if (isLoading) {
    return <h2>Caricamento...</h2>;
  }
  if (error) {
    console.log("error :>> ", error);

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
        {!error && !isLoading && searchResult?.totalCount ? (
          <h2 role="status">{searchResult?.totalCount} risultati</h2>
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

  const onFilterUpdate = useCallback((newFilter) => {
    navigate(
      routes.search({ ...newFilter, limit: PAGE_SIZE, offset: DEFAULT_OFFSET })
    );
  }, []);

  return (
    <React.Fragment>
      <div className="row mx-0 px-0 my-1">
        <div className="col-lg-12 pl-5">
          <BreadCrumbs arrayBread={BREADCRUMBS.RICERCA} />
        </div>
      </div>
      <div data-testid="SearchPage" className="mt-5">
        <div className="container main-container pl-4 pr-4">
          <div className="row">
            <div className="col-12 col-lg-4 col-md-4" role="search">
              <FilterPanel filter={filter} onFilterUpdate={onFilterUpdate} />
            </div>
            <div className="col-12 col-lg-8 col-md-8">
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
        <IntroSection
          title="CONTRIBUISCI"
          subtitle="Scopri come contribuire"
          primaryButtonText="Maggiori informazioni"
          primaryButtonLink={DIGITALE_DOCS_URL}
        />
      </div>
    </React.Fragment>
  );
};

SearchPage.propTypes = {};

SearchPage.defaultProps = {};

export default SearchPage;
