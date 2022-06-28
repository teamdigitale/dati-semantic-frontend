import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Callout from "../../common/Callout/Callout";

const NotFound = () => {
  useEffect(() => {
    document.title = "Pagina non trovata - Catalogo Nazionale Dati";
  });

  return (
    <Callout type="danger" title="Pagina non trovata">
      <p>
        Ci dispiace, la risorsa ricercata non è disponibile.
        <br />
        Torna alla <Link to="/">Homepage</Link>.
      </p>
    </Callout>
  );
};

NotFound.propTypes = {};

NotFound.defaultProps = {};

export default NotFound;
