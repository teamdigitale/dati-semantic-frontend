import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PatternFilter from "./PatternFilter";

const patternUpdate = jest.fn();
describe("<PatternFilter />", () => {
  beforeEach(() => {
    patternUpdate.mockClear();
  });

  test("it should mount", () => {
    render(<PatternFilter pattern="abc" onPatternUpdate={patternUpdate} />);

    const searchForm = screen.getByRole("search");

    expect(searchForm).toBeInTheDocument();
  });

  test("it should show value", () => {
    render(<PatternFilter pattern="abc" onPatternUpdate={patternUpdate} />);

    const searchBox = screen.getByRole("searchbox");

    expect(searchBox).toBeInTheDocument();
  });

  test("it should not propagate changes for normal characters", () => {
    render(<PatternFilter pattern="abc" onPatternUpdate={patternUpdate} />);

    const searchBox = screen.getByRole("searchbox");

    fireEvent.change(searchBox, { target: { value: "def" } });

    expect(patternUpdate).not.toHaveBeenCalled();
  });
});
