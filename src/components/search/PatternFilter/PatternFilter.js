import React, { useState } from "react";
import { func, string } from "prop-types";

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
        <div className="form-group col-12 col-xl-9">
          <input
            type="text"
            className="form-control"
            placeholder="inserisci la parola"
            role="searchbox"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="form-group col-12 col-xl-3">
          <button type="submit" className="btn btn-primary" role="submit">
            Cerca
          </button>
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
