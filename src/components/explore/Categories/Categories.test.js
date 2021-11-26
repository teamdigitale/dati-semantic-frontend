import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Categories from "./Categories";
import { getCategories } from "../../../assets/data/categories";
import CategoryIcon from "../../common/CategoryIcon/CategoryIcon";
import { renderWithRoute } from "../../../services/testUtils";

jest.mock("../../common/CategoryIcon/CategoryIcon", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<Categories />", () => {
  beforeEach(() => {
    CategoryIcon.mockReturnValue("<div>an icon</div>");
    CategoryIcon.mockClear();
  });

  test("it should contain list item per category", () => {
    renderWithRoute(<Categories />);

    const categories = screen.getAllByRole("listitem");

    expect(categories.length).toBe(getCategories().length);
  });

  test("it should render all the categories", () => {
    renderWithRoute(<Categories />);

    expect(CategoryIcon).toHaveBeenCalledTimes(getCategories().length);
  });
});
