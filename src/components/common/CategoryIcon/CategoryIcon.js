import React from "react";
import { oneOf, shape, string } from "prop-types";

const CategoryIcon = ({ category, className = null, size }) => {
  let sizeClazz = "category-icon-" + size;
  let clazz = `${category.key.toLowerCase()}-category-icon category-icon ${sizeClazz}`;
  if (className && className.trim().length > 0) {
    clazz += " " + className;
  }

  return (
    <img
      className={clazz}
      title={category.label}
      alt={category.key}
      data-testid="CategoryIcon"
    />
  );
};

CategoryIcon.propTypes = {
  category: shape({
    key: string.isRequired,
    label: string,
  }).isRequired,
  size: oneOf(["tiny", "small", "large"]),
  className: string,
};

CategoryIcon.defaultProps = {
  className: null,
  size: "large",
};

export default CategoryIcon;
