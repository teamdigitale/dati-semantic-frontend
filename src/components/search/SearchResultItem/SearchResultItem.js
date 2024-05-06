/* eslint-disable react/no-unknown-property */
import React from "react";
import { arrayOf, oneOf, shape, string } from "prop-types";
import {
  AT_SCHEMA,
  SUPPORTED_ASSET_TYPES
} from "../../../services/dataConstants";
import { getDetailsPageUrl } from "../../../services/vocabService";
import { getCategories } from "../../../assets/data/categories";
import AssetTypeChip from "../AssetTypeChip/AssetTypeChip";
import styles from "./SearchResultItem.module.css";
import { truncate } from "../../../services/stringUtils";
import ModifiedOnOrVersion from "../../common/ModifiedOnOrVersion/ModifiedOnOrVersion";
import sprite from "../../../assets/images/sprite.svg";
import { isMobile } from "../../common/ResponsiveViews";
import { useModalOrientation } from "../../common/ModalChangeOrientation/useModalOrientation";

const SearchResultItem = ({ item }) => {
  const { ModalOrientation, handleOpenModal } = useModalOrientation({
    redirectUrl: item.assetIri
  });
  const categories = getCategories().filter(
    (c) => item.themes.indexOf(c.uri) > -1
  );

  const handleRedirectUri = (url) =>
    window.open(url, "_blank", "noopener noreferrer");

  return (
    <>
      <div
        className="card-wrapper card-space mt-1 pb-1 px-1"
        data-testid="SearchResultItem"
      >
        <div className={"card card-bg mx-0 rounded " + styles.smallerFooter}>
          <div
            role="listitem"
            aria-label="result-item"
            id="searchResultCard"
            className="card-body text-decoration-none d-flex flex-column justify-content-between"
          >
            <div>
              <div
                className={
                  "size-sm d-flex flex-row flex-wrap flex-sm-row " +
                  styles.topmostHeader
                }
              >
                <div>
                  <AssetTypeChip type={item.type} isSearchChip />
                </div>
                <ModifiedOnOrVersion
                  type={item.type}
                  versionInfo={item.versionInfo}
                  modifiedOn={item.modifiedOn}
                  size={"small"}
                  status={item.status && item.status[0]}
                />
              </div>
              <div
                className="d-flex flex-row align-items-center"
                style={{ minHeight: "40px" }}
              >
                <span
                  className={
                    "border border-secondary rounded-circle d-inline-flex me-2"
                  }
                >
                  <svg
                    className={"icon icon-sm icon-secondary"}
                    alt="avatar Titolare"
                  >
                    <use href={sprite + "#it-user"}></use>
                  </svg>
                </span>
                <span className={styles.itemInfoLabel + " "}>
                  {item.rightsHolder.summary}
                </span>
              </div>

              <div
                className={
                  "h4 card-title link-primary mt-4 " + styles.itemTitle
                }
                role="navigation"
                tabIndex={0}
                aria-label="redirect to detail"
                onClick={() => {
                  // e.preventDefault();
                  if (item.type == AT_SCHEMA && isMobile()) {
                    handleOpenModal();
                    return;
                  }
                  window.location.href = getDetailsPageUrl(item.assetIri);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    window.location.href = getDetailsPageUrl(item.assetIri);
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                {item.title}
              </div>
              <p className={"card-text " + styles.itemDescription}>
                {truncate(item.description, 250)}
              </p>
            </div>
            <div className={styles.itemInfo}>
              {item.type !== AT_SCHEMA && (
                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <span className={`${styles.captionCategories} fw-semibold`}>
                      URI:
                    </span>{" "}
                    <span
                      onClick={() => handleRedirectUri(item.assetIri)}
                      style={{ cursor: "pointer", overflowWrap: "anywhere" }}
                      role="link"
                      aria-label="redirect to uri"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleRedirectUri(item.assetIri);
                        }
                      }}
                      className={`link-primary px-1 pe-3 ${styles.assetIri}`}
                    >
                      {item.assetIri}
                    </span>
                  </div>
                  <span
                    onClick={() => handleRedirectUri(item.assetIri)}
                    style={{ cursor: "pointer" }}
                    className="ms-3"
                    role="link"
                    aria-label="redirect to uri"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleRedirectUri(item.assetIri);
                      }
                    }}
                  >
                    <svg
                      className={" icon icon-sm icon-primary"}
                      alt="redirect to URI"
                    >
                      <use href={sprite + "#it-external-link"}></use>
                    </svg>{" "}
                  </span>
                </div>
              )}
              {categories.length != 0 && (
                <div className="mt-4">
                  <div key={categories[0].key}>
                    <span className={`${styles.captionCategories} fw-semibold`}>
                      {categories[0].label}
                      {categories.length > 1 && (
                        <span
                          className="ms-2 badge rounded-pill fw-semibold"
                          style={{
                            backgroundColor: "#D9DADB",
                            color: "#5C6F82",
                            fontSize: "16px"
                          }}
                        >
                          {`+${categories.length - 1}`}
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ModalOrientation />
    </>
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
      summary: string.isRequired
    }).isRequired
  }).isRequired
};

SearchResultItem.defaultProps = {};

export default SearchResultItem;
