import React from "react";
import { arrayOf, string } from "prop-types";
import { getCategories } from "../../../assets/data/categories";

const CategoryFilter = ({ themes }) => (
  <div data-testid="CategoryFilter">
    {themes.map((t) => {
      let category = getCategories().find((c) => c.key === t || c.uri === t);
      if (!category) {
        console.error("Cannot find category!!!", t);
        return null;
      }
      return (
        <div key={t} className="chip chip-simple chip-lg">
          <span className="chip-label">Categoria: {category.label}</span>
        </div>
      );
    })}
  </div>
);

CategoryFilter.propTypes = { themes: arrayOf(string) };

CategoryFilter.defaultProps = {};

export default CategoryFilter;
