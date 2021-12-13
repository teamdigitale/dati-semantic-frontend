import CommonMetadataGroup from "./CommonMetadataGroup";
import getDetailsPropTypes from "../DetailsPropTypes";
import MetadataRow from "./MetadataRow";

const VocabularyMetadata = ({ details }) => {
  return (
    <div data-testid="vocab-metadata">
      <CommonMetadataGroup details={details} />
      <MetadataRow name={"Endpoint Url"} value={details.endpointUrl} />
    </div>
  );
};

VocabularyMetadata.propTypes = { ...getDetailsPropTypes() };

export default VocabularyMetadata;
