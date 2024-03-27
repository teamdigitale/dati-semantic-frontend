import React, { useCallback, useEffect, useState } from "react";
import { search } from "../../../services/searchService";
import FilterPanel from "../FilterPanel/FilterPanel";
import { useLocation } from "react-router-dom";
import { routes } from "../../../services/routes";
import { useFilter } from "../../common/FilterContext/context";
import BREADCRUMBS from "../../../services/BreadCrumbsConst";

import EndSection from "../../common/EndSection/EndSection";
import IntroSection from "../../common/IntroSection/IntroSection";
import { ResultCount } from "./partials/ResultCount";
import { List } from "./partials/List";
import { PaginationList } from "./partials/PaginationList";
import { OrderFilter } from "../OrderFilter/OrderFilter";
import { ShowOnDesktop, ShowOnMobile } from "../../common/ResponsiveViews";
import PatternFilter from "../PatternFilter/PatternFilter";
import { FilterModalMobile } from "../FilterPanel/FilterModalMobile";
import { getRightsHolders } from "../../../services/rightsHoldersService";

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { search: urlSearch } = useLocation();
  const { onFilterDispatch, areFiltersActive } = useFilter();
  const [rightsHoldersList, setRightsHoldersList] = useState([]);

  const filter = routes.searchUrlToFilter(urlSearch);

  const onPatternFilter = (newValue) => {
    onFilterDispatch({ ...filter, pattern: newValue });
  };

  const onPatternUpdate = useCallback(onPatternFilter, [filter]);

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

  const getLangLabel = (name) => {
    if (name) {
      if (typeof name == "object") {
        if (Object.keys(name).length == 0) return null;
        if (Reflect.has(name, "it")) return name["it"];
        if (Reflect.has(name, "en")) return name["en"];
        if (Reflect.has(name, "DEFAULT")) return name["DEFAULT"];
      } else if (typeof name == "string") return name;
    }

    return null;
  };

  useEffect(() => {
    const fetchRightsHolders = async () => {
      try {
        const result = await getRightsHolders();
        const formattedRightsHolders = result.map((obj) => {
          return {
            label: getLangLabel(obj.name) ?? obj.identifier,
            key: obj.identifier
          };
        });
        setRightsHoldersList(formattedRightsHolders);
      } catch (e) {
        throw new Error(e);
      }
    };
    fetchRightsHolders();
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
      <div className="container-fluid schemaPadding" id="searchAnchor">
        <div className="col-12 pb-lg-4" role="search">
          <div className="row mx-0 d-flex justify-content-center">
            <div className="px-0">
              <PatternFilter
                pattern={filter?.pattern ?? ""}
                onPatternUpdate={onPatternUpdate}
              />
            </div>
          </div>
          <ShowOnDesktop>
            <FilterPanel
              filter={filter}
              rightsHoldersList={rightsHoldersList}
            />
          </ShowOnDesktop>
        </div>
        <ShowOnDesktop>
          <hr className="my-2" />
        </ShowOnDesktop>
      </div>
      <div data-testid="SearchPage" className="mt-5">
        <div className="container-fluid schemaPadding">
          <div className="row mx-0">
            <div className="col-12 px-0">
              <div className="d-flex direction-row align-items-center align-items-lg-end justify-content-between">
                <ResultCount
                  isLoading={isLoading}
                  error={error}
                  totalCount={searchResult?.totalCount}
                />
                <div className="d-flex flex-row">
                  <ShowOnMobile>
                    <button
                      className="btn link btn-outline-primary p-3"
                      style={{ fontSize: "14px" }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalLongFixed"
                    >
                      Filtri
                    </button>
                  </ShowOnMobile>
                  <OrderFilter
                    orderQuery={filter}
                    onOrderChange={onFilterDispatch}
                  />
                </div>
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
      <FilterModalMobile
        filter={filter}
        rightsHoldersList={rightsHoldersList}
      />
    </>
  );
};

SearchPage.propTypes = {};

SearchPage.defaultProps = {};

export default SearchPage;
