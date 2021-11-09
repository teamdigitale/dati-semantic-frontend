import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Categories from "./Categories";

describe("<Categories />", () => {
  test("it should mount", () => {
    render(<Categories />);

    const categories = screen.getByText("naviga i dati per categoria tematica");

    expect(categories).toBeInTheDocument();
  });
});
