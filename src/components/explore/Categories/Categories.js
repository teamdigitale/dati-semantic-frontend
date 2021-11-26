import React from "react";
import { getCategories } from "../../../assets/data/categories";
import CategoryIcon from "../../common/CategoryIcon/CategoryIcon";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../services/routes";
import ExploreGrid from "../ExploreGrid/ExploreGrid";

const categoryData = getCategories();

const Categories = () => {
  const navigate = useNavigate();

  const searchFor = (key) => {
    navigate(routes.search({ theme: key }));
  };

  const categoryCells = categoryData.map((c) => ({
    key: c.key,
    icon: <CategoryIcon category={c} />,
    label: c.label,
    onClick: () => searchFor(c.key),
  }));

  return (
    <div data-testid="Categories">
      <div className="row p-3">
        <h2>Esplora gli strumenti semantici per categoria</h2>
      </div>
      <ExploreGrid cells={categoryCells} />
    </div>
  );
};

Categories.propTypes = {};

Categories.defaultProps = {};

export default Categories;
