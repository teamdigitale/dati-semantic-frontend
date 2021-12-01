import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../services/routes";
import CategoryIcon from "../../common/CategoryIcon/CategoryIcon";
import { AT_TO_LABEL } from "../../../services/dataConstants";
import ExploreGrid from "../ExploreGrid/ExploreGrid";
import { getCategories } from "../../../assets/data/categories";
import ExploreSection from "../ExploreSection/ExploreSection";

const ExploreByType = () => {
  const navigate = useNavigate();

  const searchFor = (type) => {
    navigate(routes.search({ types: [type] }));
  };

  const category = getCategories()[2];

  const typeCells = AT_TO_LABEL.map((ttl) => ({
    key: ttl.type,
    icon: <CategoryIcon category={category} className="mt-5" />,
    label: ttl.label,
    onClick: () => searchFor(ttl.type),
  }));

  return (
    <ExploreSection title="Esplora gli strumenti semantici per tipo">
      <ExploreGrid cells={typeCells} />
    </ExploreSection>
  );
};

ExploreByType.propTypes = {};

ExploreByType.defaultProps = {};

export default ExploreByType;
