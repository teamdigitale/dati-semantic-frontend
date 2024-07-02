import React, { useEffect, useState } from "react";
import {
  AT_ONTOLOGY,
  AT_SCHEMA,
  AT_VOCABULARY
} from "../../../services/dataConstants";
import styles from "./AssetDetails.module.css";
import AssetDetailsSummary from "./summary/AssetDetailsSummary";
import AssetDetailsButtons from "./summary/AssetDetailsButtons";
import SchemaMetadata from "./metadata/SchemaMetadata";
import VocabularyMetadata from "./metadata/VocabularyMetadata";
import getDetailsPropTypes from "./DetailsPropTypes";
import OntologyMetadata from "./metadata/OntologyMetadata";
import { routes } from "../../../services/routes";
import SwaggerUI from "swagger-ui-react";
import BreadCrumbs from "../../common/BreadCrumbs/BreadCrumbs";
import BREADCRUMBS from "../../../services/BreadCrumbsConst";
import EndSection from "../../common/EndSection/EndSection";
import getAlertMessage from "../../../services/alertService";

const AssetDetails = ({ details }) => {
  const [stoplight, setStoplight] = useState(false);
  const accessUrl = details.distributions?.map((u) => u.accessUrl).pop();
  const downloadUrl = details.distributions?.map((u) => u.downloadUrl).pop();
  const alertMess = getAlertMessage();
  let breadC = Array.from(BREADCRUMBS.DETAILSPAGE);
  breadC[2].label = "";
  breadC[2].label = details?.title;

  const detailSummaryEl = document.getElementById("asset-details-summary");
  const backgroundEl = document.getElementById("background");

  const handleChangeBackground = () => {
    const offset = detailSummaryEl.clientHeight - 100;
    backgroundEl.style.background = `linear-gradient(to bottom, #f0f6fc ${offset}px, white 0)`;
  };

  useEffect(() => {
    if (detailSummaryEl) {
      handleChangeBackground();
      window.addEventListener("resize", handleChangeBackground);
    }

    if (!stoplight) setStoplight(true);

    return () => {
      window.removeEventListener("resize", handleChangeBackground);
    };
  }, [detailSummaryEl, backgroundEl]);

  return (
    <div>
      <div className={"w-100 " + styles.bkg}>
        <div className={"container-fluid "}>
          <div className="mx-0 ps-3">
            <div className={"col-lg-12 " + styles.padding}>
              <BreadCrumbs arrayBread={breadC} />
            </div>
          </div>
        </div>
      </div>

      <div
        className={"row mx-0"}
        id="background"
        data-testid="asset-details-container"
      >
        {alertMess && alertMess != "" ? (
          <div className={"mantainenceAllert"}>
            <div className="container-fluid schemaPadding py-3">
              <div className="alert alert-warning m-0" role="alert">
                <strong>Avviso di manutenzione</strong> - {alertMess}
              </div>
            </div>
          </div>
        ) : null}
        <div className="container-fluid schemaPadding col-12 col-lg-11">
          <div className="py-5">
            <div className="col-12">
              <AssetDetailsSummary
                themes={details.themes}
                type={details.type}
                title={details.title}
                description={details.description}
                modifiedOn={details.modifiedOn}
                versionInfo={details.versionInfo}
                status={details.status && details.status[0]}
              />
              <div className="row pb-5" />
              <AssetDetailsButtons
                type={details.type}
                assetIri={details.assetIri}
                vocabUrl={routes.apiDocs(details.assetIri)}
                accessUrl={accessUrl ?? downloadUrl}
              />
              <div className="row">
                <div className="col-12 px-0 px-lg-2">
                  <div className="card-wrapper">
                    <div className="card card-bg">
                      <div className="card-body px-3 px-lg-5">
                        <div className="category-top">
                          <div
                            className={"category " + styles.metadataHeader}
                            style={{
                              fontWeight: "700",
                              fontSize: "0.8rem",
                              paddingBottom: "0.5rem",
                              width: "100%",
                              borderBottom: "1px solid black"
                            }}
                          >
                            <h2>dettagli</h2>
                          </div>
                        </div>
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
                              <div lang="en">
                                <SwaggerUI url={downloadUrl} />
                              </div>
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
      <EndSection type={2} />
    </div>
  );
};

AssetDetails.propTypes = { ...getDetailsPropTypes() };

export default AssetDetails;
