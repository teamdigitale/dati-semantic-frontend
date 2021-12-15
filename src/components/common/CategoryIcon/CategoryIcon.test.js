import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CategoryIcon from "./CategoryIcon";

describe("<CategoryIcon />", () => {
  test("it should mount", () => {
    render(<CategoryIcon category={{ key: "ABC", label: "Useless stuff" }} />);

    const categoryIcon = screen.getByTestId("CategoryIcon");
    expect(categoryIcon.firstChild).toHaveAttribute(
      "href",
      "category_sprite.svg#abc"
    );
  });
});
