import React from "react";
import styles from "./SearchResultAlert.module.css";
import { string } from "prop-types";

const SearchResultAlert = ({ title, message }) => (
  <React.Fragment>
    <div className="row mx-0 justify-content-center">
      <div className="col-lg-12 d-flex justify-content-center">
        <div className={styles.NoResults} data-testid="NoResults"></div>
        <div className={styles.errorIcon}> </div>
      </div>
    </div>
    <div className="row mx-0 justify-content-center">
      <div className="col-lg-12 d-flex justify-content-center">
        <h2 role="alert" className="my-2 text-primary-title" aria-live="polite">
          {title}
        </h2>
      </div>
    </div>
    <div className="row mx-0 justify-content-center">
      <div className="col-lg-12 d-flex justify-content-center">
        <div className={styles.abstract} aria-live="polite">
          {message}
        </div>
      </div>
    </div>
  </React.Fragment>
);

SearchResultAlert.propTypes = {
  title: string.isRequired,
  message: string.isRequired
};

export default SearchResultAlert;
