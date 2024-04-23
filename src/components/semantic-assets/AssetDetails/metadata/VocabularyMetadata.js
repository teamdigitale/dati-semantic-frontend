import CommonMetadataGroup from "./CommonMetadataGroup";
import getDetailsPropTypes from "../DetailsPropTypes";
import sprite from "../../../../assets/images/sprite.svg";
import React from "react";
import rowStyle from "./MetadataRow.module.css";

const VocabularyMetadata = ({ details }) => {
  return (
    <div data-testid="vocab-metadata">
      <CommonMetadataGroup details={details} />
      {details.endpointUrl && (
        <div className={"row " + rowStyle.column} data-testid="asset-iri-row">
          <div className={"col-12 col-lg-3 strong " + rowStyle.propertyName}>
            Indirizzo dell&apos;endpoint
          </div>
          <div className="col-12 col-lg-9">
            <div className="row">
              <div
                className={
                  "col-xl-10 col-8 font-monospace " + rowStyle.propertyLink
                }
              >
                <a
                  href={details.endpointUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={rowStyle.assetLink}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    pointerEvents: "none"
                  }}
                >
                  {details.endpointUrl}
                </a>
              </div>
              <div className="col-xl-2 col-4 text-end">
                <a
                  aria-label="Vai all'endpoint (si apre in un'altra scheda)"
                  className="btn btn-sm pt-0 px-1"
                  href={details.endpointUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="icon icon-primary icon-sm"
                    data-testid="external-link-icon-for-endpoint-url"
                  >
                    <use href={sprite + "#it-external-link"} />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

VocabularyMetadata.propTypes = { ...getDetailsPropTypes() };

export default VocabularyMetadata;
