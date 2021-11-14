import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Main from "./Main";
import { renderWithRoute } from "../../../services/testUtils";
import NotFound from "../NotFound/NotFound";
import Categories from "../../Categories/Categories";

jest.mock("../../Categories/Categories", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../NotFound/NotFound", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<Main />", () => {
  beforeEach(() => {
    Categories.mockClear();
    Categories.mockReturnValue(<div>Categories</div>);
    NotFound.mockClear();
    NotFound.mockReturnValue(<p>Not found</p>);
  });

  test("it should mount", () => {
    renderWithRoute(<Main />);

    const main = screen.getByRole("main");

    expect(main).toBeInTheDocument();
  });

  test("it should display categories by default", () => {
    renderWithRoute(<Main />);

    expect(Categories).toHaveBeenCalledTimes(1);
    expect(NotFound).not.toHaveBeenCalled();
  });

  test("it should display an error for a wrong URL", () => {
    renderWithRoute(<Main />, "/not-existing");

    expect(Categories).not.toHaveBeenCalled();
    expect(NotFound).toHaveBeenCalledTimes(1);
  });
});
