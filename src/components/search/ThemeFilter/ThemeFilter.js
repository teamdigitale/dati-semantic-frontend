import React from "react";
import MultiCheckBoxFilter from "../MultiCheckBoxFilter/MultiCheckBoxFilter";
import PropTypes, { func } from "prop-types";
import { getCategories } from "../../../assets/data/categories";

const keysAndLabels = getCategories().map((c) => ({
  key: c.key,
  label: c.label,
}));
const categoryKeys = keysAndLabels.map((c) => c.key);

const ThemeFilter = ({ themes, onThemesUpdate }) => (
  <MultiCheckBoxFilter
    keysAndLabels={keysAndLabels}
    title="Categorie"
    selection={themes}
    onSelectionUpdate={onThemesUpdate}
  />
);

ThemeFilter.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.oneOf(categoryKeys)).isRequired,
  onThemesUpdate: func.isRequired,
};

ThemeFilter.defaultProps = {};

export default ThemeFilter;
