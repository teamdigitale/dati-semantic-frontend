import React from "react";
import { oneOf } from "prop-types";
import { Icon } from "design-react-kit";
import { Link } from "react-router-dom";

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
    <div className="callout danger" data-testid="AssetNotFound">
      <div className="callout-title">
        <Icon icon="it-close-circle" />
        Risorsa non trovata
      </div>
      <p>
        Si è verificato un errore.
        <br />
        <span data-testid="ErrorReason">{showReason()}</span>
        <br />
        <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
};

AssetNotFound.propTypes = {
  reason: oneOf([MISSING_URI, MISSING_RESOURCE]).isRequired,
};

AssetNotFound.defaultProps = {};

export default AssetNotFound;
