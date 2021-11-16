import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CategoryIcon from "./CategoryIcon";

describe("<CategoryIcon />", () => {
  test("it should mount", () => {
    render(<CategoryIcon category={{ key: "ABC", label: "Useless stuff" }} />);

    const categoryIcon = screen.getByTestId("CategoryIcon");

    expect(categoryIcon).toBeInTheDocument();
  });

  test("it should use large size by default", () => {
    render(<CategoryIcon category={{ key: "ABC", label: "Useless stuff" }} />);

    const categoryIcon = screen.getByTestId("CategoryIcon");

    expect(categoryIcon).toBeInTheDocument();
    expect(categoryIcon.classList.contains("category-icon-large")).toBeTruthy();
  });

  test.each([
    ["small", "category-icon-small"],
    ["tiny", "category-icon-tiny"],
    ["large", "category-icon-large"],
  ])("it should support size '%s' with class '%s'", (size, clazz) => {
    render(
      <CategoryIcon
        category={{ key: "ABC", label: "Useless stuff" }}
        size={size}
      />
    );

    const categoryIcon = screen.getByTestId("CategoryIcon");

    expect(categoryIcon).toBeInTheDocument();
    expect(categoryIcon.classList.contains(clazz)).toBeTruthy();
  });
});
