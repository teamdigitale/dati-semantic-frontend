import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ThemeFilter from "./ThemeFilter";

const themesUpdate = jest.fn();

describe("<ThemeFilter />", () => {
  test("it should display the listbox", () => {
    render(
      <ThemeFilter themes={["AGRI", "HEAL"]} onThemesUpdate={themesUpdate} />
    );

    expect(screen.getByTestId("listbox")).toBeInTheDocument();
  });
});
