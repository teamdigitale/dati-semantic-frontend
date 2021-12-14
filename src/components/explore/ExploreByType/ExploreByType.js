import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../services/routes";
import { AT_TO_LABEL } from "../../../services/dataConstants";
import ExploreGrid from "../ExploreGrid/ExploreGrid";
import ExploreSection from "../ExploreSection/ExploreSection";

const ExploreByType = () => {
  const navigate = useNavigate();

  const searchFor = (type) => {
    navigate(routes.search({ types: [type] }));
  };

  const typeCells = AT_TO_LABEL.map((ttl) => ({
    key: ttl.type,
    label: ttl.label,
    onClick: () => searchFor(ttl.type),
  }));

  return (
    <ExploreSection title="Esplora gli strumenti semantici per tipo">
      <ExploreGrid
        cells={typeCells}
        optionalClass={"btn-primary text-white "}
      />
    </ExploreSection>
  );
};

ExploreByType.propTypes = {};

ExploreByType.defaultProps = {};

export default ExploreByType;
