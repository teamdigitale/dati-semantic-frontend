import React, { useState, useEffect } from "react";
import sprite from "../../../assets/images/sprite.svg";
import { arrayOf, func, shape, string } from "prop-types";
import { sortObjectsByAlphabeticalKey } from "../../../services/arrayUtils";
import "./MultiSelectChips.css";

export const MultiSelectChips = ({
  keysAndLabels = [],
  selection = [],
  onSelectionUpdate,
  labbledById,
  label = ""
}) => {
  const defaultFilter = { key: "", label: "" };
  const [filterList, setFilterList] = useState(defaultFilter);

  const allOption = { label: "Tutte", key: "all" };
  const allSelected = keysAndLabels.length == selection.length;

  const filterOptions = keysAndLabels.filter(
    (el) => !selection.includes(el.key)
  );

  const handleAddFilter = (option) => {
    if (filterOptions.length == keysAndLabels.length && selection.length > 0) {
      handleAllFilter();
      return;
    }

    onSelectionUpdate([...selection, option.key]);
    setFilterList(option);
  };

  const handleAllFilter = () => {
    onSelectionUpdate(keysAndLabels.map((kl) => kl.key));
    setFilterList(allOption);
  };

  // const handleRemoveFilter = () => {
  //   setFilterList({ key: "", label: "" });

  //   if (allSelected) {
  //     setOptions(keysAndLabels);
  //   } else {
  //     setOptions(keysAndLabels.filter((el) => !selection.includes(el.key)));
  //   }
  // };

  useEffect(() => {
    if (selection.length > 0) {
      if (filterList.key == "all" && allSelected) {
        setFilterList(defaultFilter);
        return;
      }

      if (selection.find((e) => e == filterList.key)) {
        setFilterList(defaultFilter);
        return;
      }
    }
  }, [selection]);

  return (
    <>
      <div className="d-grid" data-testid="MultiSelectFilter">
        <table>
          <caption
            htmlFor="multiSelect"
            className="caption-title text-uppercase fw-semibold"
          >
            {label}
          </caption>
        </table>
        <div
          id="multiSelect"
          aria-labelledby={labbledById}
          data-bs-toggle="dropdown"
          className="dropdown dropdown-toggle px-0
            bg-red border-bottom border-secondary
            container-fluid row align-items-end"
        >
          {/* Select with chips */}
          <div className="d-flex flex-row g-2 justify-content-between">
            <div className="d-grid row justify-content-start py-2 pe-2">
              {filterList.key == "" && filterOptions.length != 0 ? (
                <span className="">{"Scegli un'opzione"}</span>
              ) : filterOptions.length == 0 ? (
                <span className="fw-semibold text-truncate">
                  {allOption.label}
                </span>
              ) : (
                <span className="fw-semibold text-truncate">
                  {filterList.label}
                </span>
              )}
            </div>
            <button
              className={`btn ms-2 align-self-end p-0 ${
                filterOptions.length > 0 ? "d-block" : "d-none"
              }`}
              type="button"
              id="dropdownMenuButton"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg className="icon-expand icon icon-primary ">
                <use href={`${sprite}#it-expand`}></use>
              </svg>
            </button>
          </div>
          {/* Dropdown with options */}
          <div
            data-testid="dropdownMenu"
            className={`dropdown-menu w-100 ${
              filterOptions.length == 0 ? "d-none" : ""
            }`}
          >
            <div className="link-list-wrapper">
              <ul className="link-list">
                <button
                  key={"all"}
                  type="button"
                  data-testid="option"
                  onClick={() => handleAllFilter()}
                  className={`btn dropdown-item list-item`}
                >
                  Tutte
                </button>
                {sortObjectsByAlphabeticalKey(filterOptions, "label").map(
                  (option) => (
                    <button
                      key={option.key}
                      type="button"
                      data-testid="option"
                      style={{
                        display: selection.includes(option.key)
                          ? "none"
                          : "block"
                      }}
                      onClick={() => handleAddFilter(option)}
                      className={`btn dropdown-item list-item`}
                    >
                      {option.label}
                    </button>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MultiSelectChips.propTypes = {
  label: string.isRequired,
  keysAndLabels: arrayOf(
    shape({
      key: string.isRequired,
      label: string
    })
  ),
  selection: arrayOf(string),
  onSelectionUpdate: func,
  labbledById: string,
  type: string
};

MultiSelectChips.defaultProps = {};
