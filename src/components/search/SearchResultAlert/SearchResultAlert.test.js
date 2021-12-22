import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NoResults from "./NoResults";

describe("<NoResults />", () => {
  test("it should mount", () => {
    render(<NoResults />);

    const noResults = screen.getByTestId("NoResults");

    expect(noResults).toBeInTheDocument();
  });

  test("it should display title", () => {
    render(<NoResults />);

    const title = screen.getByText("Nessun risultato trovato");

    expect(title).toBeInTheDocument();
  });
});
