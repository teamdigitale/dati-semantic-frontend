import { arrayOf, oneOf, shape, string } from "prop-types";
import { SUPPORTED_ASSET_TYPES } from "../../../services/dataConstants";

const getDetailsPropTypes = () => {
  return {
    details: shape({
      type: oneOf(SUPPORTED_ASSET_TYPES).isRequired,
      assetIri: string.isRequired,
      title: string.isRequired,
      description: string.isRequired,
      modifiedOn: string,
      themes: arrayOf(string).isRequired,
      rightsHolder: shape({
        iri: string.isRequired,
        summary: string.isRequired,
      }).isRequired,
      accrualPeriodicity: string,
      distributionUrls: arrayOf(string).isRequired,
      subjects: arrayOf(string),
      contactPoint: shape({
        iri: string.isRequired,
        summary: string.isRequired,
      }),
      publishers: arrayOf(
        shape({
          iri: string.isRequired,
          summary: string,
        })
      ),
      creators: arrayOf(
        shape({
          iri: string.isRequired,
          summary: string,
        })
      ),
      versionInfo: string,
      issuedOn: string,
      languages: arrayOf(string),
      temporal: arrayOf(string),
      conformsTo: arrayOf(
        shape({
          iri: string.isRequired,
          summary: string,
        })
      ),
      keyConcept: string,
      endpointUrl: string,
      keyClasses: arrayOf(
        shape({
          iri: string.isRequired,
          summary: string,
        })
      ),
      prefix: string,
      projects: arrayOf(
        shape({
          iri: string.isRequired,
          summary: string,
        })
      ),
    }).isRequired,
  };
};

export default getDetailsPropTypes;
