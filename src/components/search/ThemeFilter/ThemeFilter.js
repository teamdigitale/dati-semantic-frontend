import React from "react";
import MultiCheckBoxFilter from "../MultiCheckBoxFilter/MultiCheckBoxFilter";
import PropTypes, { func } from "prop-types";
import { getCategories } from "../../../assets/data/categories";
import FilterPanelSection from "../FilterPanelSection/FilterPanelSection";

const keysAndLabels = getCategories().map((c) => ({
  key: c.key,
  label: c.label,
}));
const categoryKeys = keysAndLabels.map((c) => c.key);

const ThemeFilter = ({ themes, onThemesUpdate }) => (
  <FilterPanelSection title="Filtra per Categorie">
    <MultiCheckBoxFilter
      keysAndLabels={keysAndLabels}
      title="Categorie"
      labbledById="Filtra_per_Categorie"
      selection={themes}
      onSelectionUpdate={onThemesUpdate}
    />
  </FilterPanelSection>
);

ThemeFilter.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.oneOf(categoryKeys)).isRequired,
  onThemesUpdate: func.isRequired,
};

ThemeFilter.defaultProps = {};

export default ThemeFilter;
