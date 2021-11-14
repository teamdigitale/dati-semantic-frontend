import React from "react";
import { shape, string } from "prop-types";

const VocabDetails = () => (
  <div data-testid="VocabDetails">VocabDetails Component</div>
);

VocabDetails.propTypes = {
  details: shape({
    title: string.isRequired,
  }).isRequired,
};

VocabDetails.defaultProps = {};

export default VocabDetails;
