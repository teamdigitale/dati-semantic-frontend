import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AssetTypeChip from "./AssetTypeChip";
import { AT_VOCABULARY } from "../../../services/dataConstants";

describe("<AssetTypeChip />", () => {
  test("it should mount", () => {
    render(<AssetTypeChip type={AT_VOCABULARY} />);

    const assetTypeChip = screen.getByTestId("AssetTypeChip");

    expect(assetTypeChip).toBeInTheDocument();
  });

  test("it should display type label", () => {
    render(<AssetTypeChip type={AT_VOCABULARY} />);

    const typeLabel = screen.getByText("Vocabolario controllato");

    expect(typeLabel).toBeInTheDocument();
  });
});
