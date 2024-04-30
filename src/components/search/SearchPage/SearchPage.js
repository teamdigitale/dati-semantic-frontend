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
import {
  ShowOnDesktop,
  ShowOnMobile,
  isMobile
} from "../../common/ResponsiveViews";
import PatternFilter from "../PatternFilter/PatternFilter";
import { FilterModalMobile } from "../FilterPanel/FilterModalMobile";
import {
  getLangLabel,
  getRightsHolders
} from "../../../services/rightsHoldersService";
import sprite from "../../../assets/images/sprite.svg";
import { filterFormatter } from "../../../services/filterFormatter";

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { search: urlSearch } = useLocation();
  const {
    onFilterDispatch,
    areFiltersActive,
    setFilter: clearFilter
  } = useFilter();
  const [rightsHoldersList, setRightsHoldersList] = useState([]);

  const filter = routes.searchUrlToFilter(urlSearch);
  const filterChips = filterFormatter(filter, rightsHoldersList);

  const { types, rightsHolders, themes, sortBy, direction } = filter;

  const onPatternFilter = (newValue) => {
    onFilterDispatch({ ...filter, pattern: newValue });
  };

  const onPatternUpdate = useCallback(onPatternFilter, [filter]);

  const handleRemoveFilter = (filterToRemove, event) => {
    event.stopPropagation();

    if (filterToRemove.cat != "pattern") {
      onFilterDispatch({
        ...filter,
        [filterToRemove.cat]: filter[filterToRemove.cat].filter(
          (el) => el != filterToRemove.key
        )
      });
      clearFilter({
        types,
        themes,
        rightsHolders,
        [filterToRemove.cat]: filter[filterToRemove.cat].filter(
          (el) => el != filterToRemove.key
        )
      });
    } else {
      delete filter.pattern;
      onFilterDispatch(filter);
    }
  };

  const renderChips = (chip) => {
    if (chip.key == "removeAll" && filterChips.length > 1)
      return (
        <a
          href="#"
          key="delete_all_chips"
          id="deleteAllFilter"
          role="button"
          style={{ whiteSpace: "nowrap" }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onFilterDispatch({ sortBy, direction });
            clearFilter({});
          }}
          className="link-primary ms-2"
        >
          Annulla filtri
        </a>
      );
    else if (filterChips.length == 1) return;

    return (
      <div
        className="chip m-1 alert chip-primary"
        id="chipsFilter"
        style={{
          width: "fit-content",
          maxWidth: "100%"
        }}
        key={chip.key}
      >
        <span
          style={{
            height: "100%",
            transform: "none"
          }}
          className="chip-label text-truncate"
        >
          {chip.type}: {chip.label}
        </span>
        <button onClick={(e) => handleRemoveFilter(chip, e)}>
          <svg className="icon icon-sm">
            <use href={`${sprite}#it-close`}></use>
          </svg>
          <span className="visually-hidden">Elimina filtro</span>
        </button>
      </div>
    );
  };

  useEffect(() => {
    if (!isMobile())
      clearFilter({
        types,
        themes,
        rightsHolders
      });
  }, []);

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
        title="Cerca tra le risorse semantiche"
        subtitle="Cerca una o più risorse semantiche per parole chiave, filtrando i risultati per strumento semantico, titolare o categoria."
        type=""
        isSearch={true}
        arrayBread={BREADCRUMBS.SEARCHPAGE}
      />
      <div className="container-fluid schemaPadding" id="searchAnchor">
        <div className="col-12 pb-3" role="search">
          <div className="row mx-0 d-flex justify-content-center">
            <div className="px-0">
              <PatternFilter onPatternUpdate={onPatternUpdate} />
            </div>
          </div>
          <ShowOnDesktop>
            <FilterPanel
              filter={filter}
              rightsHoldersList={rightsHoldersList}
            />
            <div>{filterChips.map(renderChips)}</div>
            <hr className="mt-4" />
          </ShowOnDesktop>
        </div>
      </div>
      <div data-testid="SearchPage" className="mt-3">
        <div className="container-fluid schemaPadding">
          <div className="row mx-0">
            <div className="col-12 px-0">
              <div className="d-flex direction-row align-items-center align-items-lg-end justify-content-between pb-4">
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
              <ShowOnMobile>
                <div className="pb-2">{filterChips.map(renderChips)}</div>
                <hr className="mt-2 m-0" />
              </ShowOnMobile>
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
