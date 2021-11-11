import React from "react";
import PropTypes from "prop-types";

const supportedAssetTypes = [
  { type: "ontology", label: "Ontologia" },
  { type: "vocabulary", label: "Vocabolario di Controllo" },
  { type: "schema", label: "Schema" },
];

const getLabel = (type) => {
  return supportedAssetTypes.find((sat) => sat.type === type).label;
};

const AssetTypeFilter = (props) => (
  <div data-testid="AssetTypeFilter">
    <div role="label">Tipologia Strumento Semantico</div>
    <ul>
      {props.types.map((t) => (
        <li key="t">{getLabel(t)}</li>
      ))}
    </ul>
  </div>
);

AssetTypeFilter.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.oneOf(supportedAssetTypes.map((sat) => sat.type))
  ),
};

AssetTypeFilter.defaultProps = {};

export default AssetTypeFilter;
