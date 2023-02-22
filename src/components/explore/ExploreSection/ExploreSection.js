import React from "react";
import { element, string } from "prop-types";
import "./ExploreSection.css";

const ExploreSection = ({ title, children }) => (
  <div className="container-fluid">
    <div data-testid="ExploreSection">
      <div className="pt-3 ml-4">
        <div className="container-fluid schemaPadding">
          <h2 className="p-2 second-sub-heading">{title}</h2>
        </div>
      </div>
      {children}
    </div>
  </div>
);

ExploreSection.propTypes = {
  title: string.isRequired,
  children: element.isRequired,
};

ExploreSection.defaultProps = {};

export default ExploreSection;
