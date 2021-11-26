import React from "react";
import { getCategories } from "../../../assets/data/categories";
import CategoryIcon from "../../common/CategoryIcon/CategoryIcon";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../services/routes";
import ExploreGrid from "../ExploreGrid/ExploreGrid";
import ExploreSection from "../ExploreSection/ExploreSection";

const categoryData = getCategories();

const ExploreByCategory = () => {
  const navigate = useNavigate();

  const searchFor = (key) => {
    navigate(routes.search({ theme: key }));
  };

  const categoryCells = categoryData.map((c) => ({
    key: c.key,
    icon: <CategoryIcon category={c} className="mt-5" />,
    label: c.label,
    onClick: () => searchFor(c.key),
  }));

  return (
    <ExploreSection title="Esplora gli strumenti semantici per categoria">
      <ExploreGrid cells={categoryCells} />
    </ExploreSection>
  );
};

ExploreByCategory.propTypes = {};

ExploreByCategory.defaultProps = {};

export default ExploreByCategory;
