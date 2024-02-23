import PropTypes, { oneOf } from "prop-types";
import {
  AT_SCHEMA,
  SUPPORTED_ASSET_TYPES
} from "../../../services/dataConstants";

import styles from "./ModifiedOnOrVersion.module.css";

const ModifiedOnOrVersion = (props) => {
  let label, value, chipColor, statusText;

  if (props.type === AT_SCHEMA) {
    label = "Versione ";
    value = props.versionInfo ?? "n/a";
  }

  switch (props.status) {
    case "archived":
      statusText = "Archiviato";
      chipColor = "#515a7a";
      break;
    case "catalogued":
    case "published":
      statusText = "Stabile";
      chipColor = "#008053";
      break;
    case "closed access":
      statusText = "Accesso Ristretto";
      chipColor = "#cc3344a";
      break;
    case "initial draft":
    case "draft":
    case "final draft":
    case "intermediate draft":
    case "submitted":
      statusText = "Bozza";
      chipColor = "#cc7a00";
      break;
    default:
      statusText = "";
      chipColor = "";
  }

  return (
    <div
      className={
        props.size === "small" ? styles.modifiedOnSmall : styles.modifiedOnLarge
      }
    >
      {props.status && (
        <div
          className={`chip chip-simple chip-lg border-0`}
          style={{
            backgroundColor: chipColor
          }}
        >
          <span className="chip-label text-white">{statusText}</span>
        </div>
      )}
      <div className="col-ms-6 px-2">
        {label} <strong>{value}</strong>
      </div>
    </div>
  );
};

ModifiedOnOrVersion.propTypes = {
  type: oneOf(SUPPORTED_ASSET_TYPES).isRequired,
  modifiedOn: PropTypes.string,
  versionInfo: PropTypes.string,
  size: oneOf(["small", "large"]).isRequired,
  status: PropTypes.string
};

export default ModifiedOnOrVersion;
