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
import ModifiedOnOrVersion from "../../common/ModifiedOnOrVersion/ModifiedOnOrVersion";

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
            <ModifiedOnOrVersion
              type={item.type}
              versionInfo={item.versionInfo}
              modifiedOn={item.modifiedOn}
              size={"small"}
            />
          </div>
          <div className="category-top clearfix">
            {categories.map((c) => (
              <div key={c.key} className="category">
                {c.label}
              </div>
            ))}
          </div>
          <h2 className={"h4 card-title primary-color " + styles.itemTitle}>
            {item.title}
          </h2>
          <p className={"card-text " + styles.itemDescription}>
            {truncate(item.description, 250)}
          </p>
          <div className={styles.itemInfo}>
            {item.type !== AT_SCHEMA && (
              <div>
                <span className={"font-weight-bold " + styles.itemInfoLabel}>
                  URI:
                </span>{" "}
                <span className={styles.itemInfoLabel}>{item.assetIri}</span>
              </div>
            )}
            <div>
              <span className={"font-weight-bold " + styles.itemInfoLabel}>
                Titolare:
              </span>{" "}
              <span className={styles.itemInfoLabel + " rights-holder-name"}>
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
