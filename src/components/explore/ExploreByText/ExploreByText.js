import React, { useState } from "react";
import ExploreSection from "../ExploreSection/ExploreSection";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../services/routes";
import { Icon } from "design-react-kit";
import "./ExploreByText.css";

const ExploreByText = () => {
  const [pattern, setPattern] = useState("");
  const navigate = useNavigate();

  const doSubmit = (e) => {
    navigate(routes.search({ pattern: pattern }));
    e.preventDefault();
  };

  return (
    <ExploreSection title="Ricerca all'interno del catalogo">
      <div className="pt-3 ml-4 pl-5">
        <form onSubmit={doSubmit}>
          <div className="form-row">
            <div className="form-group col-md-7 p-2">
              <div className="search-group input-group">
                <span className="input-group-append">
                  <div className="input-group-text bg-transparent">
                    <Icon icon="it-search" size="sm" />
                  </div>
                </span>
                <input
                  type="text"
                  className="form-control search-bar"
                  placeholder="es. persona, economia, attività"
                  value={pattern}
                  onChange={(e) => setPattern(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group col-md-3 p-2">
              <button
                type="submit"
                className="btn btn-primary w-75 mx-auto"
                role="submit"
              >
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
