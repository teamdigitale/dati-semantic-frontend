import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AssetTypeFilter from "./AssetTypeFilter";

describe("<AssetTypeFilter />", () => {
  test("it should mount for ontologies", () => {
    render(<AssetTypeFilter types={["ontology"]} />);

    const ontology = screen.getByText("Ontologia");

    expect(ontology).toBeInTheDocument();
  });
});
