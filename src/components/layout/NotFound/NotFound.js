import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="callout danger">
    <div className="callout-title">
      <svg className="icon">
        <use xlinkHref="/bootstrap-italia/dist/svg/sprite.svg#it-close-circle" />
      </svg>
      Pagina non trovata
    </div>
    <p>
      Ci dispiace, la risorsa ricercata non è disponibile: torna alla
      <Link to="/">Homepage</Link>.
    </p>
  </div>
);

NotFound.propTypes = {};

NotFound.defaultProps = {};

export default NotFound;
