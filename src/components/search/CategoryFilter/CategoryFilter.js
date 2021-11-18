import React from "react";
import { arrayOf, string } from "prop-types";
import { getCategories } from "../../../assets/data/categories";
import { Icon } from "design-react-kit";
import { Link, useLocation, useNavigate } from "react-router-dom";

const categoryFilter = (themes, search, navigate) => {
  const removeLink = (type) => {
    const query = new URLSearchParams(search);
    const types = query.getAll("theme");
    query.delete("theme");
    if (types.length > 1) {
      types.filter((t) => t !== type).forEach((t) => query.append("type", t));
    }
    return `/search?${query.toString()}`;
  };

  return (
    <div data-testid="CategoryFilter">
      {themes.map((t) => {
        let category = getCategories().find((c) => c.key === t || c.uri === t);
        if (!category) {
          console.error("Cannot find category!!!", t);
          return null;
        }
        return (
          <div key={category.key} className="chip chip-lg">
            <span className="chip-label">Categoria: {category.label}</span>
            <button
              onClick={() => {
                navigate(removeLink(t));
              }}
            >
              <Icon icon="it-close" />
              <span className="sr-only">
                Rimuovi filtro per {category.label}
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

const filterSelection = (search) => {
  const newLink = (c) => {
    return search ? `/search${search}&theme=${c}` : `/search?theme=${c}`;
  };

  return (
    <div className="dropdown">
      <div
        className="chip chip-simple chip-lg dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="pr-5">Categoria: nessun filtro</span>
        <Icon icon="it-expand" />
      </div>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <div className="link-list-wrapper">
          <ul className="link-list">
            {getCategories().map((c) => (
              <li key={c}>
                <Link className="list-item" to={newLink(c.key)}>
                  <span>{c.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const CategoryFilter = ({ themes }) => {
  const { search } = useLocation();
  const navigate = useNavigate();

  if (!!themes && Array.isArray(themes) && themes.length > 0) {
    return categoryFilter(themes, search, navigate);
  }

  return filterSelection(search);
};

CategoryFilter.propTypes = { themes: arrayOf(string) };

CategoryFilter.defaultProps = {};

export default CategoryFilter;
