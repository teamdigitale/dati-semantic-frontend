import PropTypes, { oneOf } from "prop-types";
import {
  AT_SCHEMA,
  SUPPORTED_ASSET_TYPES,
} from "../../../services/dataConstants";

import styles from "./ModifiedOnOrVersion.module.css";
import { asItalianDate } from "../../../services/stringUtils";

const ModifiedOnOrVersion = (props) => {
  let label, value;
  if (props.type === AT_SCHEMA) {
    label = "Versione ";
    value = props.versionInfo ?? "n/a";
  } else {
    label = "Ultima modifica ";
    value = props.modifiedOn ? asItalianDate(props.modifiedOn) : "n/a";
  }
  return (
    <div
      className={
        props.size === "small" ? styles.modifiedOnSmall : styles.modifiedOnLarge
      }
    >
      {label} <strong>{value}</strong>
    </div>
  );
};

ModifiedOnOrVersion.propTypes = {
  type: oneOf(SUPPORTED_ASSET_TYPES).isRequired,
  modifiedOn: PropTypes.string,
  versionInfo: PropTypes.string,
  size: oneOf(["small", "large"]).isRequired,
};

export default ModifiedOnOrVersion;
