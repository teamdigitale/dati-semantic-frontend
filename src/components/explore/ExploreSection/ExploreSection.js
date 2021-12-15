import React from "react";
import { element, string } from "prop-types";

const ExploreSection = ({ title, children }) => (
  <div className="container">
    <div data-testid="ExploreSection">
      <div className="pt-3 ml-4 pl-5">
        <h4 className="p-2">{title}</h4>
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
