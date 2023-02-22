import React, { useCallback, useState } from "react";
import ExploreSection from "../ExploreSection/ExploreSection";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../services/routes";
import { Icon } from "design-react-kit";
import "./ExploreByText.css";

const ExploreByText = () => {
  const [pattern, setPattern] = useState("");
  const navigate = useNavigate();

  const doSubmit = useCallback(
    (e) => {
      navigate(routes.search({ pattern: pattern }));
      e.preventDefault();
    },
    [pattern]
  );

  const onPatternChange = useCallback((e) => setPattern(e.target.value), []);

  return (
    <ExploreSection title="Cerca nel catalogo per parola chiave">
      <div className="pt-3 container-fluid schemaPadding" role="form">
        <form role="search" onSubmit={doSubmit}>
          <div className="form-row ml-md-4 pr-md-4 ml-1 pr-2">
            <div className="form-group col-md-7 p-2">
              <div className="search-group input-group">
                {/* <span className="input-group-append">
                  <div className="input-group-text bg-transparent">
                    <Icon icon="it-search" size="sm" alt="" />
                  </div>
                </span> */}
                <input
                  aria-label="catalogo"
                  type="search"
                  className="form-control"
                  placeholder="es. persona, economia, attività"
                  value={pattern}
                  onChange={onPatternChange}
                />
                <span className="autocomplete-icon" aria-hidden="true">
                  <div className="input-group-prepend">
                    <Icon icon="it-search" size="sm" />
                  </div>
                </span>
              </div>
            </div>
            <div className="form-group col-md-3 p-2 d-flex justify-content-center">
              <button type="submit" className="btn btn-primary w-75 mx-auto">
                Cerca
              </button>
            </div>
          </div>
        </form>
      </div>
    </ExploreSection>
  );
};

ExploreByText.propTypes = {};

ExploreByText.defaultProps = {};

export default ExploreByText;
