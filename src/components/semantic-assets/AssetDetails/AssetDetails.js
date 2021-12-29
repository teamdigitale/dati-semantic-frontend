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
import IntroSection from "../../common/IntroSection/IntroSection";
import { DIGITALE_DOCS_URL, routes } from "../../../services/routes";
import SwaggerUI from "swagger-ui-react";

const AssetDetails = ({ details }) => {
  const accessUrl = details.distributions.map((u) => u.accessUrl).pop();
  const downloadUrl = details.distributions.map((u) => u.downloadUrl).pop();
  return (
    <div>
      <div
        className={"row " + styles.detailsContainer}
        data-testid="asset-details-container"
      >
        <div className="container">
          <div className="row ml-5 p-5 mr-5 ">
            <div className="col-12">
              <AssetDetailsSummary
                themes={details.themes}
                type={details.type}
                title={details.title}
                description={details.description}
                modifiedOn={details.modifiedOn}
                versionInfo={details.versionInfo}
              />
              <div className="row pb-5" />
              <AssetDetailsButtons
                type={details.type}
                assetIri={details.assetIri}
                vocabUrl={routes.apiDocs(details.assetIri)}
                accessUrl={accessUrl}
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
                          <div>
                            <SchemaMetadata
                              rightsHolder={details.rightsHolder}
                              issuedOn={details.issuedOn}
                              keyClasses={details.keyClasses}
                            />
                            <div
                              className={"mt-5"}
                              data-testid="schema-details"
                            >
                              <div className="category-top">
                                <div
                                  className={
                                    "category " + styles.metadataHeader
                                  }
                                >
                                  schema
                                </div>
                              </div>
                              <hr className="border-black" />
                              <SwaggerUI url={downloadUrl} />
                            </div>
                          </div>
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
      <IntroSection
        title="CONTRIBUISCI"
        subtitle="Scopri come contribuire"
        primaryButtonText="Maggiori informazioni"
        primaryButtonLink={DIGITALE_DOCS_URL}
      />
    </div>
  );
};

AssetDetails.propTypes = { ...getDetailsPropTypes() };

AssetDetails.defaultProps = {};

export default AssetDetails;
