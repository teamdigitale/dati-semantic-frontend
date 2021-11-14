import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";
import { renderWithRoute } from "../../../services/testUtils";

describe("<Header />", () => {
  test("it should mount and contain logo", () => {
    renderWithRoute(<Header />);

    const header = screen.getByText("Team Digitale");

    expect(header).toBeInTheDocument();
  });

  test("it should mount and contain main title", () => {
    renderWithRoute(<Header />);

    const header = screen.getByText("National Data Catalog");

    expect(header).toBeInTheDocument();
  });
});
