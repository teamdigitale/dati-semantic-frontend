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
      type="button"
      className={"btn " + className + " " + styles.detailsButton}
      onClick={() => window.open(url)}
    >
      {text}
    </button>
  );
};

const AssetDetailsButtons = (props) => {
  return (
    <div
      className="py-1 row justify-content-end"
      data-testid="asset-details-buttons"
    >
      {props.type !== AT_SCHEMA && (
        <div>
          {renderButton(
            "sparql",
            getSparqlEndpoint(),
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
  vocabUrl: PropTypes.string,
  accessUrl: PropTypes.string.isRequired,
};

export default AssetDetailsButtons;
