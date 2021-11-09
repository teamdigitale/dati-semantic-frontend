import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeaderMainMenu from "./HeaderMainMenu";
import { MemoryRouter } from "react-router-dom";

describe("<HeaderMainMenu />", () => {
  test("it should mount", () => {
    render(
      <MemoryRouter>
        <HeaderMainMenu />
      </MemoryRouter>
    );

    const categories = screen.getByText("Categorie");

    expect(categories).toBeInTheDocument();
  });
});
