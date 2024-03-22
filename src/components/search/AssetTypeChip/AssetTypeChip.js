import React from "react";
import { bool, oneOf } from "prop-types";
import styles from "./AssetTypeChip.module.css";
import {
  getAssetChipLabel,
  getAssetLabel,
  SUPPORTED_ASSET_TYPES
} from "../../../services/dataConstants";

const AssetTypeChip = ({ type, isSearchChip = false }) => {
  return (
    <div
      className={`${
        isSearchChip ? "bg-secondary rounded" : "bg-primary"
      } chip chip-simple chip-lg border-0`}
      data-testid="AssetTypeChip"
      aria-label={"Tipologia:" + getAssetLabel(type)}
    >
      <span className={styles.label + " chip-label"}>
        {isSearchChip ? getAssetChipLabel(type) : getAssetLabel(type)}
      </span>
    </div>
  );
};

AssetTypeChip.propTypes = {
  type: oneOf(SUPPORTED_ASSET_TYPES),
  bgColor: oneOf(["blue", "black"]),
  isSearchChip: bool
};

AssetTypeChip.defaultProps = {};

export default AssetTypeChip;
