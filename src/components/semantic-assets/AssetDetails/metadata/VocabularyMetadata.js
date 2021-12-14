import CommonMetadataGroup from "./CommonMetadataGroup";
import getDetailsPropTypes from "../DetailsPropTypes";
import MetadataRow from "./MetadataRow";
import sprite from "../../../../assets/images/sprite.svg";
import React from "react";

const VocabularyMetadata = ({ details }) => {
  return (
    <div data-testid="vocab-metadata">
      <CommonMetadataGroup details={details} />
      {details.endpointUrl && (
        <MetadataRow
          name={"Indirizzo dell'endpoint"}
          value={details.endpointUrl}
          externalLink={
            <a
              href={details.endpointUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm pt-0"
            >
              <svg
                className="icon icon-primary icon-sm"
                data-testid="external-link-icon-for-endpoint-url"
              >
                <use href={sprite + "#it-external-link"} />
              </svg>
            </a>
          }
        />
      )}
    </div>
  );
};

VocabularyMetadata.propTypes = { ...getDetailsPropTypes() };

export default VocabularyMetadata;
