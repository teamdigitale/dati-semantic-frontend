import React, { useState } from "react";
import { func, string } from "prop-types";
import FilterPanelSection from "../FilterPanelSection/FilterPanelSection";
import sprite from "../../../assets/images/sprite.svg";

const PatternFilter = ({ pattern, onPatternUpdate }) => {
  const [value, setValue] = useState(pattern);

  return (
    <FilterPanelSection title="Ricerca nel Catalogo">
      <div className="row" data-testid="PatternFilter" role="form">
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
                  <div className="col-12 col-md-6 col-lg-4">
                    <svg className="icon">
                      <use href={sprite + "#it-search"}></use>
                    </svg>{" "}
                  </div>
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
