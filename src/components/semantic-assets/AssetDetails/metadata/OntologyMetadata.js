import CommonMetadataGroup, { getSummaries } from "./CommonMetadataGroup";
import getDetailsPropTypes from "../DetailsPropTypes";
import MetadataRow from "./MetadataRow";

const OntologyMetadata = ({ details }) => {
  return (
    <div data-testid="ontology-metadata">
      <CommonMetadataGroup details={details} />
      {details.keyClasses?.length > 0 && (
        <MetadataRow
          name={"Concetti principali"}
          value={getSummaries(details.keyClasses)}
        />
      )}
      {details.prefix && (
        <MetadataRow name={"Prefisso"} value={details.prefix} />
      )}
      {details.projects?.length > 0 && (
        <MetadataRow
          name={"Progetti che usano l’ontologia"}
          value={getSummaries(details.projects)}
        />
      )}
    </div>
  );
};

OntologyMetadata.propTypes = { ...getDetailsPropTypes() };

export default OntologyMetadata;
