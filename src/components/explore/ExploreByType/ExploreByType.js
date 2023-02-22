import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../services/routes";
import {
  AT_ONTOLOGY,
  AT_SCHEMA,
  AT_VOCABULARY,
  getAssetButtonText,
  getAssetPluralLabel,
  getAssetSubTitle,
} from "../../../services/dataConstants";
import ExploreSection from "../ExploreSection/ExploreSection";
import styles from "./ExploreByType.module.css";

const ExploreByType = () => {
  const navigate = useNavigate();

  const searchFor = (type) => {
    navigate(routes.search({ types: [type] }));
  };

  const renderType = (type) => {
    const onTypeClick = useCallback(() => searchFor(type), [type]);

    return (
      <div className={"col-xl-4"} role="listitem">
        <div
          className={"card-wrapper card-space " + styles.fontExploreByTypeColor}
        >
          <div className="card card-bg">
            <div className="card-body">
              <h3 className="card-title">{getAssetPluralLabel(type)}</h3>
              <div className="row mx-0 ">
                <div className="col-xl-12 mt-2">
                  <p className={styles.fontExploreByTypeColor}>
                    {getAssetSubTitle(type)}
                  </p>
                </div>
              </div>
            </div>
            <div className={"card-footer " + styles.footerBorderExploreByType}>
              <div className="row">
                <div className="col-12 d-flex justify-content-end">
                  <button className={"btn btn-primary"} onClick={onTypeClick}>
                    {getAssetButtonText(type)}
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <ExploreSection title="Esplora per strumenti semantici">
      <div className="container-fluid">
        <div
          className={"row justify-content-between mx-0 mt-4 mb-5 pb-3"}
          role="list"
        >
          {renderType(AT_SCHEMA)}
          {renderType(AT_ONTOLOGY)}
          {renderType(AT_VOCABULARY)}
        </div>
      </div>
    </ExploreSection>
  );
};

ExploreByType.propTypes = {};

ExploreByType.defaultProps = {};

export default ExploreByType;
