import React from "react";
import { node, string } from "prop-types";
import "./FilterPanelSection.css";

const FilterPanelSection = ({ title, children }) => (
  <div className="mb-5 mt-2" data-testid="FilterPanelSection">
    <p
      className="text-uppercase panel-heading mb-3 fw-bold"
      style={{ color: "#5C6F82", fontSize: "16px" }}
      id={title.split(" ").join("_")}
    >
      {title}
    </p>
    {children}
  </div>
);

FilterPanelSection.propTypes = {
  title: string.isRequired,
  children: node
};

export default FilterPanelSection;
