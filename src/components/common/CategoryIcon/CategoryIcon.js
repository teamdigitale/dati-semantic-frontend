import React from "react";
import { shape, string } from "prop-types";
import sprite from "../../../assets/images/category_sprite.svg";
import styles from "./CategoryIcon.module.css";

const CategoryIcon = ({ category }) => {
  return (
    <svg data-testid="CategoryIcon" className={styles.categoryIcon} alt="">
      <use href={sprite + `#${category.key.toLowerCase()}`} />
    </svg>
  );
};

CategoryIcon.propTypes = {
  category: shape({
    key: string.isRequired,
    label: string,
  }).isRequired,
};

CategoryIcon.defaultProps = {};

export default CategoryIcon;
