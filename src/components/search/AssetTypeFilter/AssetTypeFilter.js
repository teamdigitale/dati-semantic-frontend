import React from "react";
import PropTypes from "prop-types";
import {
  getAssetLabel,
  SUPPORTED_ASSET_TYPES,
} from "../../../services/dataConstants";
import { Icon } from "design-react-kit";
import { Link, useLocation, useNavigate } from "react-router-dom";

const appliedFilter = (types, search, navigate) => {
  const removeLink = (type) => {
    const query = new URLSearchParams(search);
    const types = query.getAll("type");
    query.delete("type");
    if (types.length > 1) {
      types.filter((t) => t !== type).forEach((t) => query.append("type", t));
    }
    return `/search?${query.toString()}`;
  };

  return (
    <div data-testid="AssetTypeFilter">
      {types.map((t) => {
        let assetLabel = getAssetLabel(t);
        return (
          <div key={t} className="chip chip-lg">
            <span className="chip-label">Tipologia: {assetLabel}</span>
            <button
              onClick={() => {
                navigate(removeLink(t));
              }}
            >
              <Icon icon="it-close" />
              <span className="sr-only">Rimuovi filtro per {assetLabel}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

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
        <span className="pr-5">Tipologia: nessun filtro</span>
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
  const navigate = useNavigate();

  if (!!types && Array.isArray(types) && types.length > 0) {
    return appliedFilter(types, search, navigate);
  }

  return filterSelection(search);
};

AssetTypeFilter.propTypes = {
  types: PropTypes.arrayOf(PropTypes.oneOf(SUPPORTED_ASSET_TYPES)),
};

AssetTypeFilter.defaultProps = {};

export default AssetTypeFilter;
