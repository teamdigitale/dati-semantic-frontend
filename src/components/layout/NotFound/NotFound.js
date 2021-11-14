import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "design-react-kit";

const NotFound = () => (
  <div className="callout danger" data-testid="NotFound">
    <div className="callout-title">
      <Icon icon="it-close-circle" />
      Pagina non trovata
    </div>
    <p>
      Ci dispiace, la risorsa ricercata non è disponibile.
      <br />
      Torna alla <Link to="/">Homepage</Link>.
    </p>
  </div>
);

NotFound.propTypes = {};

NotFound.defaultProps = {};

export default NotFound;
