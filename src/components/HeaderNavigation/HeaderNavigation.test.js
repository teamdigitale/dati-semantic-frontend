import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeaderNavigation from "./HeaderNavigation";

describe("<HeaderNavigation />", () => {
  test("it should mount with main title", () => {
    render(<HeaderNavigation />);

    const navigation = screen.getByText("National Data Catalog");

    expect(navigation).toBeInTheDocument();
  });

  test("it should mount with categories", () => {
    render(<HeaderNavigation />);

    const categories = screen.getByText("Categorie");

    expect(categories).toBeInTheDocument();
  });
});
