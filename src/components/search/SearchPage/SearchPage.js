import React, { useEffect, useState } from "react";
import { search } from "../../../services/searchService";
import SearchResults from "../SearchResults/SearchResults";
import { useQuery } from "../../../hooks/useQuery";
import FilterBar from "../FilterBar/FilterBar";

const showItems = (isLoading, items) => {
  if (isLoading) {
    return <h2>Caricamento...</h2>;
  }
  return <SearchResults items={items} />;
};

const SearchPage = () => {
  const [items, setItems] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const query = useQuery();

  const type = query.get("type");
  const theme = query.get("theme");
  const pattern = query.get("pattern");

  useEffect(() => {
    const doSearch = async () => {
      setLoading(true);
      const results = await search({
        type: type,
        pattern: pattern,
        theme: theme,
      });
      setItems(results);
      setLoading(false);
    };
    doSearch();
  }, [query]);

  return (
    <div data-testid="SearchPage">
      <div className="container main-container pl-4 pr-4">
        <div className="row">
          <div className="col-12 col-lg-4 col-md-4 primary-bg-a2" role="search">
            <FilterBar type={type} theme={theme} pattern={pattern} />
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
