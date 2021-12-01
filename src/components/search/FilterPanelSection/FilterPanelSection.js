import React from "react";
import styles from "./FilterPanelSection.module.css";
import { node, string } from "prop-types";

const FilterPanelSection = ({ title, children }) => (
  <div className={styles.FilterPanelSection} data-testid="FilterPanelSection">
    <h6 className={styles.title}>{title}</h6>
    {children}
  </div>
);

FilterPanelSection.propTypes = {
  title: string.isRequired,
  children: node,
};

FilterPanelSection.defaultProps = {};

export default FilterPanelSection;
