import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("<Header />", () => {
  test("it should mount and contain logo", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const header = screen.getByText("Team Digitale");

    expect(header).toBeInTheDocument();
  });

  test("it should mount and contain main title", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const header = screen.getByText("National Data Catalog");

    expect(header).toBeInTheDocument();
  });
});
