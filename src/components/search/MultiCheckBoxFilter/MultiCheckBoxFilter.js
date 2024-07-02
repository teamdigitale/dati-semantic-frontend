import React from "react";
import { arrayOf, func, shape, string } from "prop-types";
// import { hash } from "../../../services/stringUtils";

const MultiCheckBoxFilter = ({
  // title,
  keysAndLabels,
  filter,
  selection = [],
  onSelectionUpdate,
  labbledById
}) => {
  const filtersList = selection;

  const addToSelection = (toBeAdded) => () => {
    onSelectionUpdate([...filtersList, toBeAdded]);
  };

  const removeFromSelection = (toBeRemoved) => () => {
    onSelectionUpdate(filtersList.filter((v) => v !== toBeRemoved));
  };

  const displayOption = (key, label) => {
    const checked = selection.includes(key);
    const id = "check-mobile-" + key;
    const toggleSelection = checked
      ? removeFromSelection(key)
      : addToSelection(key);
    return (
      <li key={key}>
        <div className="form-check">
          <input
            type="checkbox"
            id={id}
            checked={checked}
            data-testid="option"
            onChange={toggleSelection}
          />
          <label
            className={`${checked ? "fw-semibold" : "fw-normal"}`}
            htmlFor={id}
          >
            {label}
          </label>
        </div>
      </li>
    );
  };

  // const allSelected = keysAndLabels.length == selection.length;
  // const noneSelected = selection.length == 0;
  // const someSelected = !(allSelected || noneSelected);

  // const rotateAllSelection = () => {
  //   if (someSelected || noneSelected) {
  //     onSelectionUpdate(keysAndLabels.map((kl) => kl.key));
  //     return;
  //   }

  //   if (allSelected) {
  //     onSelectionUpdate([]);
  //   }
  // };

  // let allId = "all-" + hash(title);
  return (
    <div data-testid="MultiCheckBoxFilter">
      <div className="it-list-wrapper">
        <ul
          className="it-list"
          data-testid="listbox"
          aria-labelledby={labbledById}
        >
          {/* <li key={allId}>
            <div className="form-check">
              <input
                type="checkbox"
                id={allId}
                checked={allSelected}
                aria-checked={
                  allSelected ? "true" : someSelected ? "mixed" : "false"
                }
                className={someSelected ? "semi-checked" : ""}
                data-testid="option"
                onChange={rotateAllSelection}
              />
              <label htmlFor={allId}>Tutte</label>
            </div>
          </li> */}
          {keysAndLabels
            .moveItemsToFront((item) => filter.includes(item.key))
            .map((v) => displayOption(v.key, v.label))}
        </ul>
      </div>
    </div>
  );
};

MultiCheckBoxFilter.propTypes = {
  title: string.isRequired,
  keysAndLabels: arrayOf(
    shape({
      key: string.isRequired,
      label: string
    })
  ).isRequired,
  selection: arrayOf(string),
  filter: arrayOf(string),
  onSelectionUpdate: func.isRequired,
  labbledById: string
};

export default MultiCheckBoxFilter;
