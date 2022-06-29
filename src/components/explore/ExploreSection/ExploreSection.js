import React from "react";
import { element, string } from "prop-types";
import "./ExploreSection.css";

const ExploreSection = ({ title, children }) => (
  <div className="container">
    <div data-testid="ExploreSection">
      <div className="pt-3 ml-4">
        <h3 className="p-2 second-sub-heading">{title}</h3>
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
