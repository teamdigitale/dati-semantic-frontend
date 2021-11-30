import React, { useState } from "react";
import { func, string } from "prop-types";
import { Icon } from "design-react-kit";

const PatternFilter = ({ pattern, onPatternUpdate }) => {
  const [value, setValue] = useState(pattern);

  return (
    <div className="form-row" data-testid="PatternFilter">
      <h6 className="filter-section-title">Cerca per nome</h6>
      <form
        role="search"
        onSubmit={(e) => {
          onPatternUpdate(value);
          e.preventDefault();
        }}
      >
        <div className="form-group mt-3">
          <div className="input-group col-12">
            <div className="input-group-prepend">
              <Icon icon="it-search" size="sm" />
            </div>
            <label htmlFor="pattern-input">Inserisci la parola</label>
            <input
              type="text"
              className="form-control"
              id="pattern-input"
              role="searchbox"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary w-75 mx-auto m-4 p-2"
              role="submit"
            >
              Cerca
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

PatternFilter.propTypes = {
  pattern: string.isRequired,
  onPatternUpdate: func.isRequired,
};

PatternFilter.defaultProps = {};

export default PatternFilter;
