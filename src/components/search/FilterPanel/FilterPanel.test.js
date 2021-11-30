import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FilterPanel from "./FilterPanel";
import { AT_ONTOLOGY } from "../../../services/dataConstants";
import { waitFor } from "@testing-library/dom";

describe("<FilterPanel />", () => {
  test("it should show selected filter", async () => {
    render(<FilterPanel types={[AT_ONTOLOGY]} onPatternUpdate={console.log} />);

    const filter = await screen.findByText("Ontologia");

    expect(filter).toBeInTheDocument();
  });

  test("it should not show any type filter", async () => {
    render(<FilterPanel onPatternUpdate={console.log} />);

    await waitFor(() =>
      expect(screen.queryByText("Ontologia")).not.toBeInTheDocument()
    );
  });
});
