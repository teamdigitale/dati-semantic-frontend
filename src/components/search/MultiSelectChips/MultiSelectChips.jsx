import React, { useEffect } from "react";
import { Dropdown } from "bootstrap-italia";
import sprite from "../../../assets/images/sprite.svg";
import { arrayOf, func, shape, string } from "prop-types";
import { sortObjectsByAlphabeticalKey } from "../../../services/arrayUtils";
import "./MultiSelectChips.css";

export const MultiSelectChips = ({
  keysAndLabels = [],
  selection = [],
  filter = [],
  onSelectionUpdate,
  labbledById,
  label = ""
}) => {
  const idMultiSelectFilter = `multiSelect-${labbledById}`;
  const idDropDown = `dropdownMenu-${labbledById}`;
  const idMultiSelectInput = `multiSelectInput-${labbledById}`;

  const dropdownElementList = [].slice.call(
    document.querySelectorAll(".dropdown-toggle")
  );
  const dropdownElement = dropdownElementList
    .map(function (dropdownToggleEl) {
      return new Dropdown(dropdownToggleEl);
    })
    .find((el) => el._element.id == idMultiSelectFilter);

  const addToSelection = (toBeAdded) => () => {
    const arr = [...selection, toBeAdded];
    onSelectionUpdate(arr);
    dropdownElement.show();
  };

  const removeFromSelection = (toBeRemove) => () => {
    const arr = selection.filter((el) => el !== toBeRemove);
    onSelectionUpdate(arr);
  };

  const optionArray = sortObjectsByAlphabeticalKey(
    keysAndLabels,
    "label"
  ).moveItemsToFront((item) => filter.includes(item.key));

  useEffect(() => {
    if (filter.length > 0) onSelectionUpdate(filter);
  }, []);

  useEffect(() => {
    if (dropdownElement) {
      document.addEventListener("click", (e) => {
        const isMultiSelectFilterClicked = e.target.closest(
          `#${idMultiSelectFilter}`
        );
        const isDropdownOpen = dropdownElement._isShown();

        if (e.target.closest(".link-list-wrapper")) return;

        if (
          !isMultiSelectFilterClicked &&
          !e.target.closest(".link-list-wrapper")
        ) {
          dropdownElement.hide();
        } else if (isMultiSelectFilterClicked && !isDropdownOpen) {
          dropdownElement.show();
        } else if (isDropdownOpen) {
          dropdownElement.hide();
        }
      });
    }

    return () => {
      document.removeEventListener("click", (e) => {
        const isMultiSelectFilterClicked = e.target.closest(
          `#${idMultiSelectFilter}`
        );
        const isDropdownOpen = dropdownElement._isShown();

        if (e.target.closest(".link-list-wrapper")) return;

        if (
          !isMultiSelectFilterClicked &&
          !e.target.closest(".link-list-wrapper")
        ) {
          dropdownElement.hide();
        } else if (isMultiSelectFilterClicked && !isDropdownOpen) {
          dropdownElement.show();
        } else if (isDropdownOpen) {
          dropdownElement.hide();
        }
      });
    };
  }, [!!dropdownElement]);

  return (
    <>
      <div className="d-grid" data-testid="MultiSelectFilter">
        <table style={{ captionSide: "unset" }}>
          <caption
            htmlFor="multiSelect"
            className="caption-title text-uppercase fw-semibold"
          >
            {label}
          </caption>
        </table>
        <div
          id={idMultiSelectFilter}
          aria-labelledby={labbledById}
          className="dropdown dropdown-toggle px-0
            bg-red border-bottom border-secondary
            container-fluid row align-items-end"
        >
          <div
            id={idMultiSelectInput}
            className="d-flex flex-row g-2 justify-content-between"
          >
            <div className="d-grid row justify-content-start py-2 pe-2">
              {selection.length > 0 ? (
                <span className="fw-semibold text-truncate">
                  {selection.length == 1
                    ? "1 opzione selezionata"
                    : `${selection.length} opzioni selezionate`}
                </span>
              ) : (
                <span className="">{"Scegli un'opzione"}</span>
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
          <div
            id={idDropDown}
            data-testid={idDropDown}
            className={`dropdown-menu w-100 p-0`}
          >
            <div className="link-list-wrapper">
              <ul id={`wrapperList-${labbledById}`} className="link-list">
                {optionArray.map((option) => {
                  const checked = selection.includes(option.key);
                  const id = "check-" + option.key;
                  const toggleSelection = checked
                    ? removeFromSelection(option.key)
                    : addToSelection(option.key);

                  return (
                    <li
                      className="form-check optionsDropdown px-2 py-2 mt-0"
                      key={option.key}
                    >
                      <input
                        type="checkbox"
                        id={id}
                        checked={checked}
                        data-testid="option"
                        onChange={toggleSelection}
                      />
                      <label
                        style={{
                          fontSize: "16px",
                          width: "100%",
                          height: "100%",
                          marginBottom: 0
                        }}
                        className={`${
                          checked ? "fw-semibold" : "fw-normal"
                        } text-wrap`}
                        htmlFor={id}
                      >
                        {option.label}
                      </label>
                    </li>
                  );
                })}
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
  filter: arrayOf(string),
  onSelectionUpdate: func,
  labbledById: string,
  type: string
};

MultiSelectChips.defaultProps = {};
