import React from "react";
import styles from "./NoResults.module.css";

const NoResults = () => (
  <div className={styles.NoResults} data-testid="NoResults">
    <h2>Nessun risultato trovato</h2>

    <div className={styles.abstract}>
      La ricerca non ha prodotto nessun risultato, modifica i filtri o prova
      un&apos;altra chiave di ricerca.
    </div>

    <div className={styles.errorIcon}> </div>
  </div>
);

NoResults.propTypes = {};

NoResults.defaultProps = {};

export default NoResults;
