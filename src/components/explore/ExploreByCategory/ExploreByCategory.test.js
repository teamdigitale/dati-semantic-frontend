import React from "react";
import "@testing-library/jest-dom/extend-expect";
import ExploreByCategory from "./ExploreByCategory";
import { getCategories } from "../../../assets/data/categories";
import CategoryIcon from "../../common/CategoryIcon/CategoryIcon";
import { renderWithRoute } from "../../../services/testUtils";
import ExploreGrid from "../ExploreGrid/ExploreGrid";

jest.mock("../../common/CategoryIcon/CategoryIcon", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../ExploreGrid/ExploreGrid", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<ExploreByCategory />", () => {
  beforeEach(() => {
    CategoryIcon.mockReturnValue(<div>an icon</div>);
    CategoryIcon.mockClear();
    ExploreGrid.mockReturnValue(<div>Grid cells</div>);
    ExploreGrid.mockClear();
  });

  test("it should render all the categories in a grid", () => {
    renderWithRoute(<ExploreByCategory />);

    expect(ExploreGrid).toHaveBeenCalled();
    const props = ExploreGrid.mock.calls[0][0];
    expect(props.cells.length).toBe(getCategories().length);
  });
});
