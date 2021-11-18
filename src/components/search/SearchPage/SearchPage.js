import React, { useEffect, useState } from "react";
import { search } from "../../../services/searchService";
import SearchResults from "../SearchResults/SearchResults";
import FilterPanel from "../FilterPanel/FilterPanel";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../../services/routes";

const showItems = (isLoading, items) => {
  if (isLoading) {
    return <h2>Caricamento...</h2>;
  }
  return <SearchResults items={items} />;
};

const onThemeUpdate = (filter, navigate) => (themes) => {
  filter.themes = themes;
  navigate(routes.search(filter));
};

const SearchPage = () => {
  const [items, setItems] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { search: urlSearch } = useLocation();
  const navigate = useNavigate();

  const filter = routes.searchUrlToFilter(urlSearch);

  useEffect(() => {
    const doSearch = async () => {
      setLoading(true);
      const results = await search(filter);
      setItems(results.data);
      setLoading(false);
    };
    doSearch();
  }, [urlSearch]);

  return (
    <div data-testid="SearchPage">
      <div className="container main-container pl-4 pr-4">
        <div className="row">
          <div className="col-12 col-lg-4 col-md-4 primary-bg-a2" role="search">
            <FilterPanel
              {...filter}
              onThemeUpdate={onThemeUpdate(filter, navigate)}
            />
          </div>
          <div className="col-12 col-lg-8 col-md-8">
            {showItems(isLoading, items)}
          </div>
        </div>
      </div>
    </div>
  );
};

SearchPage.propTypes = {};

SearchPage.defaultProps = {};

export default SearchPage;
