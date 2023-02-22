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
        <div className="row" data-testid="asset-iri-row">
          <div className={"col-3 strong " + rowStyle.propertyName}>
            Indirizzo dell&apos;endpoint
          </div>
          <div className="col-8">
            <div className={"text-monospace " + rowStyle.propertyLink}>
              <a
                href={details.endpointUrl}
                target="_blank"
                rel="noreferrer"
                className={rowStyle.assetLink}
              >
                {details.endpointUrl}
              </a>
            </div>
          </div>
          <div className="col-1">
            <a
              aria-label="Vai all'endpoint (si apre in un'altra scheda)"
              className="btn btn-sm pt-0"
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
      )}
    </div>
  );
};

VocabularyMetadata.propTypes = { ...getDetailsPropTypes() };

export default VocabularyMetadata;
