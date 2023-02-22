import React, { useState } from "react";
import { func, string } from "prop-types";
import { Icon } from "design-react-kit";
import FilterPanelSection from "../FilterPanelSection/FilterPanelSection";

const PatternFilter = ({ pattern, onPatternUpdate }) => {
  const [value, setValue] = useState(pattern);

  return (
    <FilterPanelSection title="Ricerca nel Catalogo">
      <div className="form-row" data-testid="PatternFilter" role="form">
        <form
          role="search"
          aria-labelledby="Ricerca_nel_Catalogo"
          onSubmit={(e) => {
            onPatternUpdate(value);
            e.preventDefault();
          }}
        >
          <div className="form-group mt-3 mb-1">
            <div className="align-items-center input-group col-12">
              <input
                type="search"
                className="form-control"
                placeholder="es. persona, economia, attività"
                id="pattern-input"
                role="searchbox"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <span className="autocomplete-icon" aria-hidden="true">
                <div className="input-group-prepend">
                  <Icon icon="it-search" size="sm" />
                </div>
              </span>
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary w-75 mx-auto m-4 p-2"
                data-testid="submit"
              >
                Cerca
              </button>
            </div>
          </div>
        </form>
      </div>
    </FilterPanelSection>
  );
};

PatternFilter.propTypes = {
  pattern: string.isRequired,
  onPatternUpdate: func.isRequired,
};

PatternFilter.defaultProps = {};

export default PatternFilter;
