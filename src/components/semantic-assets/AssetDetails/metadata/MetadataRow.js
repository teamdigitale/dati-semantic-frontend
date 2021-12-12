import React from "react";
import styles from "./MetadataRow.module.css";
import * as PropTypes from "prop-types";

const MetadataRow = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <span className={styles.propertyName}>{props.name}</span>
        </div>
        <div className="col-8 text-justify">
          <span className={styles.propertyValue}>{props.value}</span>
        </div>
        <div className="col-1" />
      </div>
      <hr />
    </div>
  );
};

MetadataRow.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default MetadataRow;
