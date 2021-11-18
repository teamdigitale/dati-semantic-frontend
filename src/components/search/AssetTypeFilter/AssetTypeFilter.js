import React from "react";
import PropTypes from "prop-types";
import {
  getAssetLabel,
  SUPPORTED_ASSET_TYPES,
} from "../../../services/dataConstants";
import { Icon } from "design-react-kit";
import { Link, useLocation } from "react-router-dom";

const appliedFilter = (types) => (
  <div data-testid="AssetTypeFilter">
    {types.map((t) => (
      <div key={t} className="chip chip-simple chip-lg">
        <span className="chip-label">Tipologia: {getAssetLabel(t)}</span>
      </div>
    ))}
  </div>
);

const filterSelection = (search) => {
  const newLink = (type) => {
    return search ? `/search${search}&type=${type}` : `/search?type=${type}`;
  };

  return (
    <div className="dropdown">
      <div
        className="chip chip-simple chip-lg dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="pr-5">Filtra per tipo</span>
        <Icon icon="it-expand" />
      </div>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <div className="link-list-wrapper">
          <ul className="link-list">
            {SUPPORTED_ASSET_TYPES.map((t) => (
              <li key={t}>
                <Link className="list-item" to={newLink(t)}>
                  <span>{getAssetLabel(t)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const AssetTypeFilter = ({ types }) => {
  const { search } = useLocation();

  if (!!types && Array.isArray(types) && types.length > 0) {
    return appliedFilter(types);
  }

  return filterSelection(search);
};

AssetTypeFilter.propTypes = {
  types: PropTypes.arrayOf(PropTypes.oneOf(SUPPORTED_ASSET_TYPES)),
};

AssetTypeFilter.defaultProps = {};

export default AssetTypeFilter;
