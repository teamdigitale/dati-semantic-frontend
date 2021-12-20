import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ExploreByText from "./ExploreByText";
import { renderWithRoute } from "../../../services/testUtils";

describe("<ExploreByText />", () => {
  test("it should mount", () => {
    renderWithRoute(<ExploreByText />);

    const exploreByText = screen.getByText("Ricerca all'interno del catalogo");

    expect(exploreByText).toBeInTheDocument();
  });
});
