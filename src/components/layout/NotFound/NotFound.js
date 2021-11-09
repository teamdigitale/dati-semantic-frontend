import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="p-4 m-3 text-white bg-warning" data-testid="NotFound">
    Ci dispiace, la risorsa ricercata non è disponibile: torna alla
    <Link to="/">Homepage</Link>.
  </div>
);

NotFound.propTypes = {};

NotFound.defaultProps = {};

export default NotFound;
