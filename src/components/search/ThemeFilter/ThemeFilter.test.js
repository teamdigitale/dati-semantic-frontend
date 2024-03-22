import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ThemeFilter from "./ThemeFilter";
import userEvent from "@testing-library/user-event";

const themesUpdate = jest.fn();

describe("<ThemeFilter />", () => {
  test("it should display the listbox", () => {
    render(
      <ThemeFilter themes={["AGRI", "HEAL"]} onThemesUpdate={themesUpdate} />
    );

    userEvent.click(screen.getByTestId("MultiSelectFilter"));

    expect(screen.getByTestId("dropdownMenu")).toBeInTheDocument();
  });
});
