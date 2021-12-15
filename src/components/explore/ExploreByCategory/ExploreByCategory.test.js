import React from "react";
import "@testing-library/jest-dom/extend-expect";
import ExploreByCategory from "./ExploreByCategory";
import CategoryIcon from "../../common/CategoryIcon/CategoryIcon";
import { renderWithRoute } from "../../../services/testUtils";
import { screen } from "@testing-library/react";
import { getCategories } from "../../../assets/data/categories";

jest.mock("../../common/CategoryIcon/CategoryIcon", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<ExploreByCategory />", () => {
  beforeEach(() => {
    CategoryIcon.mockReturnValue(<div>an icon</div>);
    CategoryIcon.mockClear();
  });

  test("it should render", () => {
    renderWithRoute(<ExploreByCategory />);

    expect(
      screen.getByText("Esplora gli strumenti semantici per categoria")
    ).toBeInTheDocument();
    expect(CategoryIcon).toHaveBeenCalledTimes(13);
  });

  test.each(getCategories().map((c) => c.key))(
    "it should render the category icon for %s",
    (category) => {
      renderWithRoute(<ExploreByCategory />);

      expect(screen.getByTestId(`${category}`)).toBeInTheDocument();
    }
  );
});
