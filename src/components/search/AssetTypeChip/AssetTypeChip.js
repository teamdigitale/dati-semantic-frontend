import React from "react";
import { oneOf } from "prop-types";
import styles from "./AssetTypeChip.module.css";
import {
  getAssetLabel,
  SUPPORTED_ASSET_TYPES,
} from "../../../services/dataConstants";

const AssetTypeChip = ({ type, bgColor }) => (
  <div
    className={
      bgColor === "blue"
        ? "bg-primary chip chip-simple chip-lg"
        : "bg-800 chip chip-simple chip-lg"
    }
    data-testid="AssetTypeChip"
    aria-label={"Tipologia:" + getAssetLabel(type)}
  >
    <span className={styles.label + " chip-label"}>{getAssetLabel(type)}</span>
  </div>
);

AssetTypeChip.propTypes = {
  type: oneOf(SUPPORTED_ASSET_TYPES),
  bgColor: oneOf(["blue", "black"]),
};

AssetTypeChip.defaultProps = {};

export default AssetTypeChip;
