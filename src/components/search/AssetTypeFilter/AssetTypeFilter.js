import React from "react";
import PropTypes from "prop-types";
import {
  getAssetLabel,
  SUPPORTED_ASSET_TYPES,
} from "../../../services/dataConstants";
import { Icon } from "design-react-kit";
import { useLocation } from "react-router-dom";

const appliedFilter = () => (
  <div data-testid="AssetTypeFilter">
    {types.map((t) => (
      <div key={t} className="chip chip-simple chip-lg">
        <span className="chip-label">Tipologia: {getAssetLabel(t)}</span>
      </div>
    ))}
  </div>
);

const filterSelection = (search) => {
  console.log("Search ", search);
  const newLink = (type) => {
    return search ? `/search${search}&type=${type}` : `/search?type=${type}`;
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-dropdown dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Filtra per tipo
        <Icon icon="it-expand" />
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <div className="link-list-wrapper">
          <ul className="link-list">
            {SUPPORTED_ASSET_TYPES.map((t) => (
              <li key={t}>
                <a className="list-item" href={newLink(t)}>
                  <span>{getAssetLabel(t)}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const AssetTypeFilter = (types) => {
  const { search } = useLocation();

  if (!!types && Array.isArray(types) && types.length > 0) {
    return appliedFilter();
  }

  return filterSelection(search);
};

AssetTypeFilter.propTypes = {
  types: PropTypes.arrayOf(PropTypes.oneOf(SUPPORTED_ASSET_TYPES)),
};

AssetTypeFilter.defaultProps = {};

export default AssetTypeFilter;
