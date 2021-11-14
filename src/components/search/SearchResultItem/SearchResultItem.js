import React from "react";
import PropTypes from "prop-types";
import {
  getAssetLabel,
  SUPPORTED_ASSET_TYPES,
} from "../../../services/dataConstants";
import { Icon } from "design-react-kit";
import { NavLink } from "react-router-dom";
import { getVocabularyUrl } from "../../../services/vocabService";

const SearchResultItem = ({ item }) => {
  return (
    <div className="card-wrapper card-space" data-testid="SearchResultItem">
      <div className="card card-bg">
        <div className="card-body">
          <div className="category-top">
            <a className="category" href="#">
              {getAssetLabel(item.type)}
            </a>
          </div>
          <h5 className="card-title big-heading">{item.title}</h5>
          <p className="card-text">{item.desc}</p>
          {/*<span className="card-signature">rights holder could go here?</span>*/}
          <NavLink className="read-more" to={getVocabularyUrl(item.uri)}>
            <Icon icon="it-arrow-right" />
            <span className="text pl-2">{item.uri}</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

SearchResultItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.oneOf(SUPPORTED_ASSET_TYPES).isRequired,
    uri: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

SearchResultItem.defaultProps = {};

export default SearchResultItem;
