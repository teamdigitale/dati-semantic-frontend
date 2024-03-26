import React, { useState } from "react";
import { func } from "prop-types";
import sprite from "../../../assets/images/sprite.svg";
import "./PatternFilter.css";
import { isMobile } from "../../common/ResponsiveViews";

const PatternFilter = ({ onPatternUpdate }) => {
  const [value, setValue] = useState("");

  const title = "Cerca per parola chiave";

  return (
    <div className="mt-4" data-testid="FilterPatternSection">
      <h2 className={`titlePattern`} id={title.split(" ").join("_")}>
        {title}
      </h2>
      <div
        className="row col-12 col-lg-8 ms-0"
        data-testid="PatternFilter"
        role="form"
      >
        <form
          role="search"
          className="px-0"
          aria-labelledby="Ricerca_nel_Catalogo"
          onSubmit={(e) => {
            onPatternUpdate(value);
            e.preventDefault();
            if (!isMobile) setValue("");
          }}
        >
          <div className="form-group mb-0 mb-lg-5">
            <div className="input-group position-relative">
              <span
                className="position-absolute"
                style={{ zIndex: 8, top: 6, left: 6 }}
                aria-hidden="true"
              >
                <svg className="icon icon-sm" fill="#5d7083">
                  <use href={sprite + "#it-search"}></use>
                </svg>
              </span>
              <input
                role="searchbox"
                type="text"
                className="form-control"
                style={{ paddingLeft: "2.2rem" }}
                id="pattern-input"
                placeholder="Scrivi qui una o più parole chiave"
                name="pattern-input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <div className="input-group-append">
                <button
                  type="submit"
                  style={{ fontSize: "14px" }}
                  className="btn btn-primary"
                  data-testid="submit"
                >
                  Cerca
                </button>
              </div>
            </div>
            <small id="pattern-input-help-text" className="form-text">
              {'*Inserisci parole chiave, ad esempio "tipologie nave"'}
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

PatternFilter.propTypes = {
  onPatternUpdate: func.isRequired
};

PatternFilter.defaultProps = {};

export default PatternFilter;
