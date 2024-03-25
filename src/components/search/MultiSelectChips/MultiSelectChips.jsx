import React, { useEffect, useState } from "react";
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
    if (allSelected) {
      onSelectionUpdate(selection.filter((el) => el == option.key));
      setFilterList(option);
      return;
    }

    if (selection.length == keysAndLabels.length - 1) {
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

  useEffect(() => {
    if (selection.length > 0) {
      if (filterList.key == "all" && allSelected) {
        setFilterList(defaultFilter);
        return;
      }

      if (selection.find((e) => e == filterList.key) && !allSelected) {
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
              {filterList.key == "" ? (
                <span className="">{"Scegli un'opzione"}</span>
              ) : (
                <span className="fw-semibold text-truncate">
                  {filterList.label}
                </span>
              )}
            </div>
            <button
              className={`btn ms-2 align-self-end p-0`}
              type="button"
              role="button"
              aria-label={`dropdown-menu-${labbledById}`}
              id={`dropdownMenuButton-${labbledById}`}
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg className="icon-expand icon icon-primary ">
                <use href={`${sprite}#it-expand`}></use>
              </svg>
            </button>
          </div>
          {/* Dropdown with options */}
          <div data-testid="dropdownMenu" className={`dropdown-menu w-100`}>
            <div className="link-list-wrapper">
              <ul className="link-list">
                {/* <button
                  key={"all"}
                  type="button"
                  data-testid="option"
                  style={{
                    display: filterOptions.length != 0 ? "block" : "none"
                  }}
                  onClick={() => handleAllFilter()}
                  className={`btn dropdown-item list-item`}
                >
                  Tutte
                </button> */}
                {sortObjectsByAlphabeticalKey(keysAndLabels, "label").map(
                  (option) => (
                    <button
                      key={option.key}
                      type="button"
                      data-testid="option"
                      style={{
                        display:
                          filterOptions.length == 0
                            ? "block"
                            : selection.includes(option.key)
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
