import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Categories from "./Categories";
import { getCategories } from "../../../assets/data/categories";

describe("<Categories />", () => {
  test("it should mount", () => {
    render(<Categories />);

    const categories = screen.getByText("naviga i dati per categoria tematica");

    expect(categories).toBeInTheDocument();
  });

  test("it should contain list item per category", () => {
    render(<Categories />);

    const categories = screen.getAllByRole("listitem");

    expect(categories.length).toBe(getCategories().length);
  });
});
