import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

describe("<Header />", () => {
  test("it should mount", () => {
    render(<Header />);

    const header = screen.getByText("Team Digitale");

    expect(header).toBeInTheDocument();
  });

  test("it should point to Team Digitale's homepage", () => {
    render(<Header />);

    const anchor = screen.getByText("Team Digitale").closest("a");

    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute("href", "https://teamdigitale.governo.it/");
  });
});
