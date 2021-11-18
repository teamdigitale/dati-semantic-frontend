import React, { useState } from "react";
import { string } from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import debounce from "lodash.debounce";

const TextFilter = ({ pattern }) => {
  const [value, setValue] = useState(pattern);
  const navigate = useNavigate();
  const { search } = useLocation();

  let updateFilter = (pattern) => {
    const query = new URLSearchParams(search);
    query.set("pattern", pattern);
    navigate(`/search?${query.toString()}`);
  };

  updateFilter = debounce(updateFilter, 500, {
    leading: false,
    trailing: true,
  });

  const updateValue = (event) => {
    let newValue = event.target.value;
    setValue(newValue);
    updateFilter(newValue);
  };

  return (
    <div data-testid="TextFilter">
      <div className="form-group">
        <input
          type="text"
          value={value}
          className="form-control"
          id="text-pattern"
          onChange={updateValue}
        />
        <label htmlFor="text-pattern">Testo</label>
      </div>
    </div>
  );
};

TextFilter.propTypes = {
  pattern: string,
};

TextFilter.defaultProps = {
  pattern: "",
};

export default TextFilter;
