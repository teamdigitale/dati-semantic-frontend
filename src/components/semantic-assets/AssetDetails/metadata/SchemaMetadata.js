import MetadataRow from "./MetadataRow";
import { shape, string } from "prop-types";
import React from "react";
import { asItalianDate } from "../../../../services/stringUtils";

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
    </div>
  );
};

SchemaMetadata.propTypes = {
  rightsHolder: shape({
    iri: string.isRequired,
    summary: string.isRequired,
  }).isRequired,
  issuedOn: string,
};

export default SchemaMetadata;
