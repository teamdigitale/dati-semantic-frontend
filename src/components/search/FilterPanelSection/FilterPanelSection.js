import React from "react";
import { node, string } from "prop-types";

const FilterPanelSection = ({ title, children }) => (
  <div className="mb-5 mt-2" data-testid="FilterPanelSection">
    <h6 className="mb-4 text-uppercase">{title}</h6>
    {children}
  </div>
);

FilterPanelSection.propTypes = {
  title: string.isRequired,
  children: node,
};

FilterPanelSection.defaultProps = {};

export default FilterPanelSection;
