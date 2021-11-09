import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeaderSlim from "./HeaderSlim";

describe("<HeaderSlim />", () => {
  test("it should mount", () => {
    render(<HeaderSlim />);

    const header = screen.getByText("Team Digitale");

    expect(header).toBeInTheDocument();
  });

  test("it HeaderSlim point to Team Digitale's homepage", () => {
    render(<HeaderSlim />);

    const anchor = screen.getByText("Team Digitale").closest("a");

    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute("href", "https://teamdigitale.governo.it/");
  });
});
