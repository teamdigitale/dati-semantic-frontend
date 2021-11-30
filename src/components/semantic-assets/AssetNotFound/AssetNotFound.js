import React from "react";
import { oneOf } from "prop-types";
import { Link } from "react-router-dom";
import Callout from "../../common/Callout/Callout";

export const MISSING_URI = "missing-uri";
export const MISSING_RESOURCE = "missing-resource";

const AssetNotFound = ({ reason }) => {
  const showReason = () => {
    switch (reason) {
      case MISSING_URI:
        return "Il parametro che identifica la risorsa è mancante.";
      case MISSING_RESOURCE:
        return "Nessuna risorsa con tale identificativo risulta presente nel catalogo.";
      default:
        break;
    }
  };

  return (
    <Callout type="danger" title="Risorsa non trovata">
      <p>
        Si è verificato un errore.
        <br />
        <span data-testid="ErrorReason">{showReason()}</span>
        <br />
        <Link to="/">Homepage</Link>.
      </p>
    </Callout>
  );
};

AssetNotFound.propTypes = {
  reason: oneOf([MISSING_URI, MISSING_RESOURCE]).isRequired,
};

AssetNotFound.defaultProps = {};

export default AssetNotFound;
