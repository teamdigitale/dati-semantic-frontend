import React from "react";
import { node, string } from "prop-types";
import "./FilterPanelSection.css";

const FilterPanelSection = ({ title, children }) => (
  <div className="mb-5 mt-2" data-testid="FilterPanelSection">
    <p
      className="mb-4 text-uppercase panel-heading"
      id={title.split(" ").join("_")}
    >
      {title}
    </p>
    {children}
  </div>
);

FilterPanelSection.propTypes = {
  title: string.isRequired,
  children: node,
};

FilterPanelSection.defaultProps = {};

export default FilterPanelSection;
