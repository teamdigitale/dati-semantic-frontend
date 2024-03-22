import { node } from "prop-types";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DEFAULT_OFFSET, PAGE_SIZE } from "../../search/Pagination/Pagination";
import { routes } from "../../../services/routes";

const defaultFilterValues = {
  types: [],
  themes: [],
  rightsHolders: []
};

// The Context
const FilterContext = createContext(defaultFilterValues);

const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState({});

  const value = {
    filter,
    setFilter
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

FilterProvider.propTypes = {
  children: node
};

const useFilter = () => {
  const context = useContext(FilterContext);
  const [areFiltersActive, setAreFiltersActive] = useState(false);

  const navigate = useNavigate();

  const { filter, setFilter } = context;

  const updateFilter = (newValue) => {
    setFilter({ ...filter, ...newValue });
  };

  const onFilterFieldUpdate = (field) => (newValue) => {
    updateFilter({ [field]: newValue });
  };

  const updateFilterStatus = (newFilterStatus) => {
    setAreFiltersActive(newFilterStatus);
  };

  const scrollToTopOfElement = () => {
    const anchorElement = document.getElementById("searchAnchor");
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onFilterDispatch = (newFilter) => {
    navigate(
      routes.search({
        ...newFilter,
        limit: PAGE_SIZE,
        offset: DEFAULT_OFFSET
      })
    );

    scrollToTopOfElement();

    updateFilterStatus(true);
  };

  if (context === undefined)
    throw new Error("useFilter must be used within FilterProvider");

  return {
    filter,
    updateFilter,
    onFilterFieldUpdate,
    onFilterDispatch,
    setFilter,
    areFiltersActive
  };
};

export { FilterProvider, useFilter };
