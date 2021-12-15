import React from "react";
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
    return (
      <div className={"col-4"}>
        <button
          className={"btn btn-primary " + styles.typeButton}
          onClick={() => searchFor(type)}
        >
          {getAssetPluralLabel(type)}
        </button>
      </div>
    );
  };

  return (
    <ExploreSection title="Esplora gli strumenti semantici per tipo">
      <div className={"row ml-4 pl-5 mt-4 mb-5 pb-3"} role="list">
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
