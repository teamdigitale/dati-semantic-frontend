import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AssetNotFound, { MISSING_RESOURCE, MISSING_URI } from "./AssetNotFound";
import { renderWithRoute } from "../../../services/testUtils";

describe("<AssetNotFound />", () => {
  test("it should mount", () => {
    renderWithRoute(<AssetNotFound reason={MISSING_URI} />);

    const assetNotFound = screen.getByRole("alert");

    expect(assetNotFound).toBeInTheDocument();
  });

  test("it should display missing uri message", () => {
    renderWithRoute(<AssetNotFound reason={MISSING_URI} />);

    const reason = screen.getByTestId("ErrorReason");

    expect(reason.innerHTML).toMatch("parametro che identifica la risorsa");
  });

  test("it should display bad uri message", () => {
    renderWithRoute(<AssetNotFound reason={MISSING_RESOURCE} />);

    const reason = screen.getByTestId("ErrorReason");

    expect(reason.innerHTML).toMatch(
      "risorsa con tale identificativo risulta presente nel catalogo"
    );
  });
});
