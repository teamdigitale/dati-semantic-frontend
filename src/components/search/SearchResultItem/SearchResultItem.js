import React from "react";
import { oneOf, shape, string } from "prop-types";
import {
  getAssetLabel,
  SUPPORTED_ASSET_TYPES,
} from "../../../services/dataConstants";
import { Icon } from "design-react-kit";
import { NavLink } from "react-router-dom";
import { getVocabularyUrl } from "../../../services/vocabService";
import { getCategories } from "../../../assets/data/categories";
import CategoryIcon from "../../common/CategoryIcon/CategoryIcon";

const SearchResultItem = ({ item }) => {
  const category = getCategories().find((c) => c.uri === item.themes[0]);
  return (
    <div className="card-wrapper card-space" data-testid="SearchResultItem">
      <div className="card card-bg">
        <div className="card-body">
          <div className="category-top clearfix">
            <div className="category">
              <CategoryIcon
                category={category}
                size="tiny"
                className="float-left"
              />{" "}
              {category.label}{" "}
              <span className="badge badge-secondary">
                {getAssetLabel(item.type)}
              </span>
            </div>
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
  item: shape({
    type: oneOf(SUPPORTED_ASSET_TYPES).isRequired,
    uri: string.isRequired,
    title: string.isRequired,
    desc: string.isRequired,
  }).isRequired,
};

SearchResultItem.defaultProps = {};

export default SearchResultItem;
