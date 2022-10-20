import React from "react";
import styles from "./SearchResultAlert.module.css";
import { string } from "prop-types";

const SearchResultAlert = ({ title, message, type }) => (
  <div className={styles.NoResults} data-testid="NoResults">
    <h2 role="status">{title}</h2>

    <div className={styles.abstract}>{message}</div>

    <div className={type ? styles.generalErrorIcon : styles.errorIcon}> </div>
  </div>
);

SearchResultAlert.propTypes = {
  title: string.isRequired,
  message: string.isRequired,
  type: string,
};

SearchResultAlert.defaultProps = {};

export default SearchResultAlert;
