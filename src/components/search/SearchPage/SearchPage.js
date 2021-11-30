import React, { useEffect, useState } from "react";
import { search } from "../../../services/searchService";
import SearchResults from "../SearchResults/SearchResults";
import FilterPanel from "../FilterPanel/FilterPanel";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../../services/routes";
import Callout from "../../common/Callout/Callout";

const showItems = (isLoading, error, items) => {
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
  return <SearchResults items={items} />;
};

const onFilterUpdate = (navigate) => (newFilter) => {
  navigate(routes.search(newFilter));
};

const SearchPage = () => {
  const [items, setItems] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { search: urlSearch } = useLocation();
  const navigate = useNavigate();

  const filter = routes.searchUrlToFilter(urlSearch);

  useEffect(() => {
    const doSearch = async () => {
      setLoading(true);
      try {
        const results = await search(filter);
        setItems(results.data);
      } catch (e) {
        setError(e.message);
      }
      setLoading(false);
    };
    doSearch();
  }, [urlSearch]);

  return (
    <div data-testid="SearchPage">
      <div className="container main-container pl-4 pr-4">
        <div className="row">
          <div className="col-12 col-lg-4 col-md-4" role="search">
            <FilterPanel
              filter={filter}
              onFilterUpdate={onFilterUpdate(navigate)}
            />
          </div>
          <div className="col-12 col-lg-8 col-md-8">
            {showItems(isLoading, error, items)}
          </div>
        </div>
      </div>
    </div>
  );
};

SearchPage.propTypes = {};

SearchPage.defaultProps = {};

export default SearchPage;
