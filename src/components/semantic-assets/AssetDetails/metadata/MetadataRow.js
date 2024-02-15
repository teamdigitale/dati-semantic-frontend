import React from "react";
import styles from "./MetadataRow.module.css";
import * as PropTypes from "prop-types";
import sprite from "../../../../assets/images/sprite.svg";

const MetadataRow = (props) => {
  return (
    <div>
      <div className={"row " + styles.column}>
        <div className="col-12 col-lg-3 strong">
          <h3 className={styles.propertyName}>{props.name}</h3>
        </div>
        <div className="col-12 col-lg-9">
          <div className="row">
            <div className="col-xl-10 col-8">
              <span className={styles.propertyValue}>{props.value}</span>
            </div>
            {!!props.iconLink && (
              <div className="col-xl-2 col-4 text-end">
                <a
                  aria-label="Vai all'URI dell'asset (si apre in un'altra scheda)"
                  className="btn btn-sm pt-0 px-1"
                  href={props.iconLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="icon icon-primary icon-sm"
                    data-testid="external-link-icon"
                  >
                    <use href={sprite + "#it-external-link"} />
                  </svg>
                </a>
              </div>
            )}
            {props.externalLink && (
              <div className="col-1">{props.externalLink}</div>
            )}
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

MetadataRow.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  iconLink: PropTypes.string,
  externalLink: PropTypes.element,
};

export default MetadataRow;
