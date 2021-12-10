import React from "react";
import { arrayOf, oneOf, shape, string } from "prop-types";
import {
  AT_SCHEMA,
  SUPPORTED_ASSET_TYPES,
} from "../../../services/dataConstants";
import { getDetailsPageUrl } from "../../../services/vocabService";
import { getCategories } from "../../../assets/data/categories";
import AssetTypeChip from "../AssetTypeChip/AssetTypeChip";
import styles from "./SearchResultItem.module.css";
import { truncate } from "../../../services/stringUtils";

const renderVersionOrModifiedOn = (item) => {
  let label, value;
  if (item.type === AT_SCHEMA) {
    label = "Version:";
    value = item.versionInfo ?? "n/a";
  } else {
    label = "Modified on:";
    value = item.modifiedOn ?? "n/a";
  }
  return (
    <div>
      {label} <strong>{value}</strong>
    </div>
  );
};

const SearchResultItem = ({ item }) => {
  const categories = getCategories().filter(
    (c) => item.themes.indexOf(c.uri) > -1
  );
  return (
    <div className="card-wrapper card-space " data-testid="SearchResultItem">
      <div className={"card card-bg my-2 " + styles.smallerFooter}>
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
            {renderVersionOrModifiedOn(item)}
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
              <span className={styles.itemInfoLabel}>{item.assetIri}</span>
            </div>
            <div>
              <span className={styles.itemInfoLabel}>Titolare:</span>{" "}
              <span className={styles.itemInfoLabel} id="rights-holder-name">
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
    modifiedOn: string,
    versionInfo: string,
    themes: arrayOf(string).isRequired,
    rightsHolder: shape({
      summary: string.isRequired,
    }).isRequired,
  }).isRequired,
};

SearchResultItem.defaultProps = {};

export default SearchResultItem;
