import {
  AT_SCHEMA,
  AT_VOCABULARY,
  SUPPORTED_ASSET_TYPES,
} from "../../../../services/dataConstants";
import * as PropTypes from "prop-types";
import { oneOf } from "prop-types";
import getSparqlEndpoint from "../../../../services/sparql";
import styles from "./AssetDetailsButtons.module.css";

const renderButton = (text, url, className) => {
  return (
    <button
      aria-label={text + " (si apre in un'altra scheda)"}
      type="button"
      className={"btn " + className + " " + styles.detailsButton}
      onClick={() => window.open(url)}
    >
      {text}
    </button>
  );
};

const SPARQL_QUERY_PARAM = "qtxt";

const AssetDetailsButtons = (props) => {
  const getAssetSparqlQuery = () => {
    return (
      "select distinct ?prop ?value where { <" +
      props.assetIri +
      "> ?prop ?value}"
    );
  };

  return (
    <div
      className="row justify-content-end"
      data-testid="asset-details-buttons"
    >
      {props.type !== AT_SCHEMA && (
        <div>
          {renderButton(
            "sparql",
            getSparqlEndpoint() +
              "?" +
              SPARQL_QUERY_PARAM +
              "=" +
              getAssetSparqlQuery(),
            "btn-outline-primary text-uppercase"
          )}
        </div>
      )}
      {props.type === AT_VOCABULARY && (
        <div>
          {renderButton(
            "api",
            props.vocabUrl,
            "btn-outline-primary text-uppercase"
          )}
        </div>
      )}
      <div>
        {renderButton("Vai al sorgente", props.accessUrl, "btn-primary")}
      </div>
    </div>
  );
};

AssetDetailsButtons.propTypes = {
  type: oneOf(SUPPORTED_ASSET_TYPES).isRequired,
  assetIri: PropTypes.string,
  vocabUrl: PropTypes.string,
  accessUrl: PropTypes.string,
};

export default AssetDetailsButtons;
