import MetadataRow from "./MetadataRow";
import React from "react";
import { asItalianDate } from "../../../../services/stringUtils";
import styles from "./MetadataRow.module.css";
import { arrayOf, shape, string } from "prop-types";
import Anchor from "../../../common/Anchor/Anchor";

const SchemaMetadata = (props) => {
  const getSummaryFormIri = (iri) => {
    if (iri && iri != null) {
      const iris = iri.split("/");
      return iris[iris.length - 1];
    }
  };
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
            <span className={"text-monospace " + styles.propertyLink}>
              {props.keyClasses.map((keyClass, index) => (
                <span key={keyClass.iri}>
                  {index > 0 && ", "}
                  <Anchor href={keyClass.iri} target="_blank" rel="noreferrer">
                    {keyClass.summary !== null && keyClass.iri
                      ? keyClass.summary
                      : getSummaryFormIri(keyClass.iri)}
                  </Anchor>
                </span>
              ))}
            </span>
          </div>
          <div className="col-1" />
        </div>
      )}
    </div>
  );
};

SchemaMetadata.propTypes = {
  rightsHolder: shape({
    iri: string.isRequired,
    summary: string, //notRequired for incorrect data
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
