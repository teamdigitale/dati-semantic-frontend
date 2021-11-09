import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

describe("<Header />", () => {
  test("it should mount and contain logo", () => {
    render(<Header />);

    const header = screen.getByText("Team Digitale");

    expect(header).toBeInTheDocument();
  });

  test("it should mount and contain main title", () => {
    render(<Header />);

    const header = screen.getByText("National Data Catalog");

    expect(header).toBeInTheDocument();
  });
});
