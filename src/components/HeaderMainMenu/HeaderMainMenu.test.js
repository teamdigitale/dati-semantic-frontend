import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeaderMainMenu from "./HeaderMainMenu";

describe("<HeaderMainMenu />", () => {
  test("it should mount", () => {
    render(<HeaderMainMenu />);

    const categories = screen.getByText("Categorie");

    expect(categories).toBeInTheDocument();
  });
});
