import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeaderMainMenu from "./HeaderMainMenu";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

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

  test("Ontologie should navigate to search", () => {
    render(
      <BrowserRouter>
        <HeaderMainMenu />
      </BrowserRouter>
    );

    const ontologyNavLink = screen.getByText("Ontologie").closest(".nav-link");

    expect(ontologyNavLink).toBeInTheDocument();
    expect(ontologyNavLink).toHaveAttribute("href", "/search?type=ontology");
  });

  test("Vocabolari should navigate to search", () => {
    render(
      <BrowserRouter>
        <HeaderMainMenu />
      </BrowserRouter>
    );

    const vocabularyNavLink = screen
      .getByText("Vocabolari")
      .closest(".nav-link");

    expect(vocabularyNavLink).toBeInTheDocument();
    expect(vocabularyNavLink).toHaveAttribute(
      "href",
      "/search?type=vocabulary"
    );
  });
});
