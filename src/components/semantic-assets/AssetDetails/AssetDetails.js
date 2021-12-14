import React from "react";
import {
  AT_ONTOLOGY,
  AT_SCHEMA,
  AT_VOCABULARY,
} from "../../../services/dataConstants";
import styles from "./AssetDetails.module.css";
import AssetDetailsSummary from "./summary/AssetDetailsSummary";
import AssetDetailsButtons from "./summary/AssetDetailsButtons";
import SchemaMetadata from "./metadata/SchemaMetadata";
import VocabularyMetadata from "./metadata/VocabularyMetadata";
import getDetailsPropTypes from "./DetailsPropTypes";
import OntologyMetadata from "./metadata/OntologyMetadata";

const AssetDetails = ({ details }) => {
  return (
    <div
      className={"row " + styles.detailsContainer}
      data-testid="asset-details-container"
    >
      <div className="container">
        <div className={"row " + styles.detailsWrapper}>
          <div className="col-12">
            <AssetDetailsSummary
              themes={details.themes}
              type={details.type}
              title={details.title}
              description={details.description}
              modifiedOn={details.modifiedOn}
            />
            <div className="row pb-5" />
            <AssetDetailsButtons
              type={details.type}
              vocabUrl={details.endpointUrl}
              accessUrl={details.distributionUrls.filter((u) => u).pop()}
            />
            <div className="row">
              <div className="col-12">
                <div className="card-wrapper">
                  <div className="card card-bg">
                    <div className="card-body px-5">
                      <div className="category-top">
                        <div className={"category " + styles.metadataHeader}>
                          dettagli
                        </div>
                      </div>
                      <hr className="border-black" />
                      {details.type === AT_VOCABULARY && (
                        <VocabularyMetadata details={details} />
                      )}
                      {details.type === AT_ONTOLOGY && (
                        <OntologyMetadata details={details} />
                      )}
                      {details.type === AT_SCHEMA && (
                        <SchemaMetadata
                          rightsHolder={details.rightsHolder}
                          issuedOn={details.issuedOn}
                          keyClasses={details.keyClasses}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AssetDetails.propTypes = { ...getDetailsPropTypes() };

AssetDetails.defaultProps = {};

export default AssetDetails;
