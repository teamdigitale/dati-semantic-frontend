import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PatternFilter from "./PatternFilter";
import userEvent from "@testing-library/user-event";

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

    userEvent.type(searchBox, "def");

    expect(patternUpdate).not.toHaveBeenCalled();
  });

  test("it should propagate changes for characters and enter", () => {
    render(<PatternFilter pattern="abc" onPatternUpdate={patternUpdate} />);

    const searchBox = screen.getByRole("searchbox");

    userEvent.type(searchBox, "{backspace}{backspace}wesome{enter}");

    expect(patternUpdate).toHaveBeenCalledWith("awesome");
  });

  test("it should propagate changes for characters and button press", () => {
    render(<PatternFilter pattern="abc" onPatternUpdate={patternUpdate} />);

    const searchBox = screen.getByRole("searchbox");
    const searchBtn = screen.getByTestId("submit");

    userEvent.type(searchBox, "{selectall}books");
    userEvent.click(searchBtn);

    expect(patternUpdate).toHaveBeenCalledWith("books");
  });
});
