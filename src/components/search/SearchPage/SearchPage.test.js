import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchPage from "./SearchPage";
import { MemoryRouter } from "react-router-dom";

describe("<SearchPage />", () => {
  test("it should mount", () => {
    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    const vocabs = screen.getByTestId("SearchPage");

    expect(vocabs).toBeInTheDocument();
  });

  test("it should show selected filter", () => {
    render(
      <MemoryRouter initialEntries={["/search?type=ontology"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const filter = screen.getByText("Ontologia");

    expect(filter).toBeInTheDocument();
  });

  test("it should not show any type filter", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const filter = screen.queryByText("Ontologia");

    expect(filter).not.toBeInTheDocument();
  });
});
