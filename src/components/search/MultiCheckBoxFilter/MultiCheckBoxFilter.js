import React, { useCallback } from "react";
import { arrayOf, func, shape, string } from "prop-types";
import { hash } from "../../../services/stringUtils";

const MultiCheckBoxFilter = ({
  title,
  keysAndLabels,
  selection,
  onSelectionUpdate,
}) => {
  const addToSelection = (toBeAdded) => () => {
    onSelectionUpdate([...selection, toBeAdded]);
  };

  const removeFromSelection = (toBeRemoved) => () => {
    onSelectionUpdate(selection.filter((v) => v !== toBeRemoved));
  };

  const displayOption = (key, label) => {
    const checked = selection.includes(key);
    const id = "check-" + key;
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
            role="option"
            onChange={toggleSelection}
          />
          <label htmlFor={id}>{label}</label>
        </div>
      </li>
    );
  };

  const allSelected = keysAndLabels.length === selection.length;
  const noneSelected = selection.length === 0;
  const someSelected = !(allSelected || noneSelected);

  const indeterminateSetter = useCallback(
    (el) => {
      if (el && someSelected) {
        el.indeterminate = true;
      }
    },
    [someSelected]
  );

  const rotateAllSelection = () => {
    if (someSelected || noneSelected) {
      onSelectionUpdate(keysAndLabels.map((kl) => kl.key));
      return;
    }

    if (allSelected) {
      onSelectionUpdate([]);
    }
  };

  let allId = "all-" + hash(title);
  return (
    <div data-testid="MultiCheckBoxFilter">
      <h6 className="filter-section-title">{title}</h6>
      <div className="it-list-wrapper">
        <ul className="it-list" role="listbox">
          <li key="all">
            <div className="form-check">
              <input
                type="checkbox"
                id={allId}
                checked={allSelected}
                role="option"
                onChange={rotateAllSelection}
                ref={indeterminateSetter}
              />
              <label htmlFor={allId}>Tutte</label>
            </div>
          </li>
          {keysAndLabels.map((v) => displayOption(v.key, v.label))}
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
      label: string,
    })
  ).isRequired,
  selection: arrayOf(string).isRequired,
  onSelectionUpdate: func.isRequired,
};

MultiCheckBoxFilter.defaultProps = {};

export default MultiCheckBoxFilter;
