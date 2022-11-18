import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../services/routes";
import {
  AT_ONTOLOGY,
  AT_SCHEMA,
  AT_VOCABULARY,
  getAssetPluralLabel,
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
      <div className={"col-sm d-flex justify-content-center"} role="listitem">
        <button
          className={"btn btn-primary " + styles.typeButton}
          onClick={onTypeClick}
        >
          {getAssetPluralLabel(type)}
        </button>
      </div>
    );
  };

  return (
    <ExploreSection title="Esplora per strumenti semantici">
      <div className={"row mx-0 mt-4 mb-5 pb-3"} role="list">
        {renderType(AT_ONTOLOGY)}
        {renderType(AT_VOCABULARY)}
        {renderType(AT_SCHEMA)}
      </div>
    </ExploreSection>
  );
};

ExploreByType.propTypes = {};

ExploreByType.defaultProps = {};

export default ExploreByType;
