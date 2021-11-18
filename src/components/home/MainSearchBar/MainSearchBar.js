import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainSearchBar = () => {
  const [pattern, setPattern] = useState("");
  const navigate = useNavigate();

  const searchForPattern = (event) => {
    navigate(`search?pattern=${encodeURIComponent(pattern)}`);
    event.preventDefault();
  };

  const updatePattern = (event) => {
    setPattern(event.target.value);
  };

  return (
    <div data-testid="MainSearchBar">
      <div className="row p-3">
        <h2>Ricerca all&apos;interno del catalogo</h2>
      </div>
      <div className="row form-group">
        <div className="col-12">
          <form onSubmit={searchForPattern}>
            <input
              type="text"
              className="form-control"
              id="pattern"
              value={pattern}
              onChange={updatePattern}
            />
            <label htmlFor="pattern">Testo</label>
          </form>
        </div>
      </div>
    </div>
  );
};

MainSearchBar.propTypes = {};

MainSearchBar.defaultProps = {};

export default MainSearchBar;
