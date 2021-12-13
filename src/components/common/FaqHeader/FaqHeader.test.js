import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithRoute } from "../../../services/testUtils";
import FaqHeader from "./FaqHeader";

describe("<FaqHeader />", () => {
  test("it should mount", async () => {
    renderWithRoute(<FaqHeader />);

    const component = await screen.findByTestId("FaqHeader");

    expect(component).toBeInTheDocument();
  });

  test("it should show link to go to projects page", () => {
    renderWithRoute(<FaqHeader />);

    const text = screen.getByText("Scopri il progetto");
    expect(text).toBeInTheDocument();
  });

  test("it should show link to go to explore page", () => {
    renderWithRoute(<FaqHeader />);

    const text = screen.getByText("Esplora il catalogo");
    expect(text).toBeInTheDocument();
  });
});
