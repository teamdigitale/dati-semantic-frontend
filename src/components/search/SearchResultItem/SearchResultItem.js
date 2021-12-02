import React from "react";
import { arrayOf, oneOf, shape, string } from "prop-types";
import { SUPPORTED_ASSET_TYPES } from "../../../services/dataConstants";
import { getDetailsPageUrl } from "../../../services/vocabService";
import { getCategories } from "../../../assets/data/categories";
import CategoryIcon from "../../common/CategoryIcon/CategoryIcon";
import AssetTypeChip from "../AssetTypeChip/AssetTypeChip";

const SearchResultItem = ({ item }) => {
  const category = getCategories().find((c) => c.uri === item.themes[0]);
  return (
    <div className="card-wrapper card-space" data-testid="SearchResultItem">
      <div className="card card-bg">
        <a
          className="card-body stretched-link text-decoration-none"
          href={getDetailsPageUrl(item.assetIri)}
        >
          <div className="category-top clearfix">
            <AssetTypeChip type={item.type} />
            <div className="category">
              <CategoryIcon
                category={category}
                size="small"
                className="float-left"
              />{" "}
              {category.label}
            </div>
          </div>
          <h5 className="card-title big-heading">{item.title}</h5>
          <p className="card-text text-truncate">{item.description}</p>
          <span className="card-signature">{item.rightsHolder.summary}</span>
          <div>
            <div>{item.assetIri}</div>
          </div>
        </a>
      </div>
    </div>
  );
};

SearchResultItem.propTypes = {
  item: shape({
    type: oneOf(SUPPORTED_ASSET_TYPES).isRequired,
    assetIri: string.isRequired,
    title: string.isRequired,
    description: string.isRequired,
    themes: arrayOf(string).isRequired,
    rightsHolder: shape({
      summary: string.isRequired,
    }).isRequired,
  }).isRequired,
};

SearchResultItem.defaultProps = {};

export default SearchResultItem;
