import CommonMetadataGroup from "./CommonMetadataGroup";
import getDetailsPropTypes from "../DetailsPropTypes";

const VocabularyMetadata = ({ details }) => {
  return (
    <div data-testid="vocab-metadata">
      <CommonMetadataGroup details={details} />
    </div>
  );
};

VocabularyMetadata.propTypes = { ...getDetailsPropTypes() };

export default VocabularyMetadata;
