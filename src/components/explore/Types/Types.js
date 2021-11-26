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

const Types = () => {
  const navigate = useNavigate();

  const searchFor = (type) => {
    navigate(routes.search({ type: type }));
  };

  const category = getCategories()[2];

  const typeCells = SUPPORTED_ASSET_TYPES.map((t) => ({
    key: t,
    icon: <CategoryIcon category={category} />,
    label: getAssetLabel(t),
    onClick: () => searchFor(t),
  }));

  return (
    <div data-testid="Types">
      <div className="row p-3">
        <h4 className="p-2">Esplora gli strumenti semantici per tipo</h4>
      </div>
      <ExploreGrid cells={typeCells} />
    </div>
  );
};

Types.propTypes = {};

Types.defaultProps = {};

export default Types;
