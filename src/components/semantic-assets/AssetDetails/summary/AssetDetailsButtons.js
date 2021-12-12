import {
  AT_SCHEMA,
  AT_VOCABULARY,
  SUPPORTED_ASSET_TYPES,
} from "../../../../services/dataConstants";
import * as PropTypes from "prop-types";
import { oneOf } from "prop-types";
import getSparqlEndpoint from "../../../../services/sparql";

const renderButton = (text, url, className) => {
  return (
    <button
      type="button"
      className={"btn " + className}
      onClick={() => window.open(url)}
    >
      {text}
    </button>
  );
};

const AssetDetailsButtons = (props) => {
  return (
    <div
      className="row d-flex justify-content-end text-center pr-1 pt-5"
      data-testid="asset-details-buttons"
    >
      {props.type !== AT_SCHEMA && (
        <div className="pr-5 text-center">
          {renderButton(
            "sparql",
            getSparqlEndpoint(),
            "btn-outline-primary text-uppercase"
          )}
        </div>
      )}
      {props.type === AT_VOCABULARY && (
        <div className="pr-5 pl-5 text-center text-uppercase">
          {renderButton(
            "api",
            props.vocabUrl,
            "btn-outline-primary text-uppercase"
          )}
        </div>
      )}
      <div className="pl-5">
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
