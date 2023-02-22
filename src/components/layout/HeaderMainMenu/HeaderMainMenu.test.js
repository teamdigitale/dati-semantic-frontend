import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeaderMainMenu from "./HeaderMainMenu";
import { renderWithRoute } from "../../../services/testUtils";

describe("<HeaderMainMenu />", () => {
  test("it should mount", () => {
    renderWithRoute(<HeaderMainMenu />);

    const categories = screen.getByText("Catalogo");

    expect(categories).toBeInTheDocument();
  });

  test("it should render additional menu item for FAQ", () => {
    renderWithRoute(<HeaderMainMenu />);

    const categories = screen.getByText("Domande frequenti");
    expect(categories).toBeInTheDocument();
  });

  test("it should render additional menu item for project", () => {
    renderWithRoute(<HeaderMainMenu />);

    const categories = screen.getByText("Scopri l’iniziativa");
    expect(categories).toBeInTheDocument();
  });
});
