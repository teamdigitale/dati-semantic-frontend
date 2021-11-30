import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PatternFilter from "./PatternFilter";

const pu = console.log;
describe("<PatternFilter />", () => {
  test("it should mount", () => {
    render(<PatternFilter pattern="abc" onPatternUpdate={pu} />);

    const searchForm = screen.getByRole("search");

    expect(searchForm).toBeInTheDocument();
  });

  test("it should show value", () => {
    render(<PatternFilter pattern="abc" onPatternUpdate={pu} />);

    const searchBox = screen.getByRole("searchbox");

    expect(searchBox).toBeInTheDocument();
  });
});
