import {
  AT_SCHEMA,
  AT_VOCABULARY,
  SUPPORTED_ASSET_TYPES
} from "../../../../services/dataConstants";
import * as PropTypes from "prop-types";
import { oneOf } from "prop-types";
import getSparqlEndpoint from "../../../../services/sparql";
import { baseUrl } from "../../../../services/fetchUtils";
import styles from "./AssetDetailsButtons.module.css";

const renderButton = (text, url, className) => {
  const handleButtonClick = (event) => {
    if (text === "Vai al sorgente") {
      if (url) {
        event.preventDefault();
        fetch(`${baseUrl()}/check-url?url=${url}`)
          .then((response) => {
            if (response.status < 400) {
              window.open(url);
            } else {
              window.open("/error-page", "_self");
            }
          })
          .catch(() => {
            window.open("/error-page", "_self");
          });
      } else {
        window.open("/error-page", "_self");
      }
    } else {
      window.open(url);
    }
  };

  return (
    <button
      aria-label={text + " (si apre in un'altra scheda)"}
      type="button"
      className={"btn " + className + " " + styles.detailsButton}
      onClick={handleButtonClick}
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
      className={"buttons-wrapper my-5 text-center text-sm-end"}
      data-testid="asset-details-buttons"
    >
      {props.type !== AT_SCHEMA && (
        <div className="btn p-0">
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
        <div className="btn p-0">
          {renderButton(
            "api",
            props.vocabUrl,
            "btn-outline-primary text-uppercase"
          )}
        </div>
      )}
      <div className="btn p-0">
        {renderButton("Vai al sorgente", props.accessUrl, "btn-primary")}
      </div>
    </div>
  );
};

AssetDetailsButtons.propTypes = {
  type: oneOf(SUPPORTED_ASSET_TYPES).isRequired,
  assetIri: PropTypes.string,
  vocabUrl: PropTypes.string,
  accessUrl: PropTypes.string
};

export default AssetDetailsButtons;
