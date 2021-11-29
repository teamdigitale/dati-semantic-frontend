import React, { useEffect, useState } from "react";
import { search } from "../../../services/searchService";
import SearchResults from "../SearchResults/SearchResults";
import { useQuery } from "../../../hooks/useQuery";
import FilterPanel from "../FilterPanel/FilterPanel";

const showItems = (isLoading, items) => {
  if (isLoading) {
    return <h2>Caricamento...</h2>;
  }
  return <SearchResults items={items} />;
};

const SearchPage = () => {
  const [items, setItems] = useState(null);
  const [isLoading, setLoading] = useState(true);
  let query = useQuery();

  useEffect(() => {
    const doSearch = async () => {
      setLoading(true);
      const results = await search({
        type: query.get("type"),
        pattern: query.get("pattern"),
      });
      setItems(results.data);
      setLoading(false);
    };
    doSearch();
  }, [query]);

  return (
    <div data-testid="SearchPage">
      <div className="container main-container pl-4 pr-4">
        <div className="row">
          <div className="col-12 col-lg-4 col-md-4" role="search">
            <FilterPanel />
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
