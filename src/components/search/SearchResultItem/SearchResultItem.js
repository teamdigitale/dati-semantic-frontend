import React from "react";
import { arrayOf, oneOf, shape, string } from "prop-types";
import { SUPPORTED_ASSET_TYPES } from "../../../services/dataConstants";
import { getDetailsPageUrl } from "../../../services/vocabService";
import { getCategories } from "../../../assets/data/categories";
import AssetTypeChip from "../AssetTypeChip/AssetTypeChip";
import styles from "./SearchResultItem.module.css";
import { truncate } from "../../../services/stringUtils";

const SearchResultItem = ({ item }) => {
  const categories = getCategories().filter(
    (c) => item.themes.indexOf(c.uri) > -1
  );
  return (
    <div className="card-wrapper card-space" data-testid="SearchResultItem">
      <div className="card card-bg my-2">
        <a
          className="card-body stretched-link text-decoration-none"
          href={getDetailsPageUrl(item.assetIri)}
        >
          <div
            className={
              "size-sm d-flex justify-content-between align-items-center " +
              styles.topmostHeader
            }
          >
            <div>
              <AssetTypeChip type={item.type} />
            </div>
            <div>
              Modified on: <strong>{item.modified ?? "n/a"}</strong>
            </div>
          </div>
          <div className="category-top clearfix">
            {categories.map((c) => (
              <div key={c.key} className="category">
                {c.label}
              </div>
            ))}
          </div>
          <h4 className={"card-title primary-color " + styles.itemTitle}>
            {item.title}
          </h4>
          <p className={"card-text " + styles.itemDescription}>
            {truncate(item.description, 250)}
          </p>
          <div className={styles.itemInfo}>
            <div>
              <span className={styles.itemInfoLabel}>URI:</span>{" "}
              <span className={styles.itemInfoValue}>{item.assetIri}</span>
            </div>
            <div>
              <span className={styles.itemInfoLabel}>Titolare:</span>{" "}
              <span className={styles.itemInfoValue}>
                {item.rightsHolder.summary}
              </span>
            </div>
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
