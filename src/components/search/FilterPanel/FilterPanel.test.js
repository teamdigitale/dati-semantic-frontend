import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FilterPanel from "./FilterPanel";
import { renderWithRoute } from "../../../services/testUtils";
import { routes } from "../../../services/routes";
import { AT_ONTOLOGY } from "../../../services/dataConstants";
import { waitFor } from "@testing-library/dom";

describe("<FilterPanel />", () => {
  test("it should show selected filter", async () => {
    renderWithRoute(<FilterPanel />, routes.search({ type: AT_ONTOLOGY }));

    const filter = await screen.findByText("Ontologia");

    expect(filter).toBeInTheDocument();
  });

  test("it should not show any type filter", async () => {
    renderWithRoute(<FilterPanel />, routes.search());

    await waitFor(() =>
      expect(screen.queryByText("Ontologia")).not.toBeInTheDocument()
    );
  });
});
