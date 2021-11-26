import React, { useState } from "react";
import ExploreSection from "../ExploreSection/ExploreSection";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../services/routes";

const ExploreByText = () => {
  const [pattern, setPattern] = useState("");
  const navigate = useNavigate();

  const doSubmit = () => {
    navigate(routes.search({ pattern: pattern }));
  };

  return (
    <ExploreSection title="Ricerca per testo">
      <div>
        <form onSubmit={doSubmit}>
          <div className="form-row">
            <div className="form-group col-md-9 p-2">
              <input
                type="text"
                className="form-control"
                placeholder="Inserisci il testo da ricercare nel titolo, descrizione o parole chiave"
                value={pattern}
                onChange={(e) => setPattern(e.target.value)}
              />
            </div>
            <div className="form-group col-md-3 p-2">
              <input
                type="submit"
                className="btn btn-primary w-75 mx-auto"
                value="Cerca"
              />
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
