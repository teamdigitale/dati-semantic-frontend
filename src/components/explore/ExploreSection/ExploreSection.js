import React from "react";
import { element, string } from "prop-types";
import "./ExploreSection.css";

const ExploreSection = ({ title, children }) => (
  <div className="container-fluid">
    <div data-testid="ExploreSection">
      <div className="pt-3 ms-1">
        <div className="container-fluid schemaPadding">
          <h2 className="p-2 second-sub-heading px-0">{title}</h2>
        </div>
      </div>
      {children}
    </div>
  </div>
);

ExploreSection.propTypes = {
  title: string.isRequired,
  children: element.isRequired
};

export default ExploreSection;
