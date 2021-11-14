import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeaderNavigation from "./HeaderNavigation";
import { renderWithRoute } from "../../../services/testUtils";

describe("<HeaderNavigation />", () => {
  test("it should mount with main title", () => {
    renderWithRoute(<HeaderNavigation />);

    const navigation = screen.getByText("National Data Catalog");

    expect(navigation).toBeInTheDocument();
  });

  test("it should mount with categories", () => {
    renderWithRoute(<HeaderNavigation />);

    const categories = screen.getByText("Categorie");

    expect(categories).toBeInTheDocument();
  });
});
