import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../services/routes";
import CategoryIcon from "../../common/CategoryIcon/CategoryIcon";
import {
  getAssetLabel,
  SUPPORTED_ASSET_TYPES,
} from "../../../services/dataConstants";
import ExploreGrid from "../ExploreGrid/ExploreGrid";
import { getCategories } from "../../../assets/data/categories";
import ExploreSection from "../ExploreSection/ExploreSection";

const ExploreByType = () => {
  const navigate = useNavigate();

  const searchFor = (type) => {
    navigate(routes.search({ type: type }));
  };

  const category = getCategories()[2];

  const typeCells = SUPPORTED_ASSET_TYPES.map((t) => ({
    key: t,
    icon: <CategoryIcon category={category} className="mt-5" />,
    label: getAssetLabel(t),
    onClick: () => searchFor(t),
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
