import React from "react";
import { oneOf } from "prop-types";
import styles from "./AssetTypeChip.module.css";
import {
  getAssetLabel,
  SUPPORTED_ASSET_TYPES,
} from "../../../services/dataConstants";

const AssetTypeChip = ({ type }) => (
  <div
    className={styles.container + " chip chip-simple chip-lg"}
    data-testid="AssetTypeChip"
  >
    <span className={styles.label + " chip-label"}>{getAssetLabel(type)}</span>
  </div>
);

AssetTypeChip.propTypes = {
  type: oneOf(SUPPORTED_ASSET_TYPES),
};

AssetTypeChip.defaultProps = {};

export default AssetTypeChip;
