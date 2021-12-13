import MetadataRow from "./MetadataRow";
import React from "react";
import { asItalianDate } from "../../../../services/stringUtils";
import styles from "./MetadataRow.module.css";
import { arrayOf, shape, string } from "prop-types";
import sprite from "../../../../assets/images/sprite.svg";

const SchemaMetadata = (props) => {
  return (
    <div data-testid="schema-metadata">
      <MetadataRow name="Titolare" value={props.rightsHolder.summary} />
      {props.issuedOn && (
        <MetadataRow
          name={"Data Creazione"}
          value={asItalianDate(props.issuedOn)}
        />
      )}
      {props.keyClasses && (
        <div className="row">
          <div className="col-3">
            <span className={styles.propertyName}>Ontologie correlate</span>
          </div>
          <div className="col-8 text-justify">
            <span className={styles.propertyValue}>
              {props.keyClasses.map((keyClass, index) => (
                <span key={keyClass.iri}>
                  {index > 0 && ", "}
                  <a href={keyClass.iri} target="_blank" rel="noreferrer">
                    {keyClass.summary}
                  </a>
                </span>
              ))}
            </span>
          </div>
          <div className="col-1">
            <svg
              className="icon icon-primary icon-sm"
              data-testid="external-link-icon"
            >
              <use href={sprite + "#it-external-link"} />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

SchemaMetadata.propTypes = {
  rightsHolder: shape({
    iri: string.isRequired,
    summary: string.isRequired,
  }).isRequired,
  issuedOn: string,
  keyClasses: arrayOf(
    shape({
      iri: string.isRequired,
      summary: string,
    })
  ),
};

export default SchemaMetadata;
