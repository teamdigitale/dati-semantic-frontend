import React from "react";
import PropTypes, { func } from "prop-types";
import { getCategories } from "../../../assets/data/categories";
import { MultiSelectChips } from "../MultiSelectChips/MultiSelectChips";

const keysAndLabels = getCategories().map((c) => ({
  key: c.key,
  label: c.label
}));
const categoryKeys = keysAndLabels.map((c) => c.key);

const ThemeFilter = ({ themes, onThemesUpdate }) => {
  return (
    <MultiSelectChips
      label="Filtra per Categoria"
      onSelectionUpdate={onThemesUpdate}
      keysAndLabels={keysAndLabels}
      labbledById="Filtra_per_Categoria"
      selection={themes}
      type="themes"
    />
  );
};

ThemeFilter.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.oneOf(categoryKeys)).isRequired,
  onThemesUpdate: func.isRequired
};

ThemeFilter.defaultProps = {};

export default ThemeFilter;
