import React from "react";
import styles from "./MetadataRow.module.css";
import * as PropTypes from "prop-types";

const MetadataRow = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <div className="pr-3">
            <h3 className={styles.propertyName}>{props.name}</h3>
          </div>
        </div>
        <div className="col-8">
          <span className={styles.propertyValue}>{props.value}</span>
        </div>
        <div className="col-1">{props.externalLink}</div>
      </div>
      <hr />
    </div>
  );
};

MetadataRow.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  externalLink: PropTypes.element,
};

export default MetadataRow;
