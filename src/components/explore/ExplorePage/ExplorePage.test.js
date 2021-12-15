import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ExplorePage from "./ExplorePage";
import ExploreByCategory from "../ExploreByCategory/ExploreByCategory";
import ExploreByType from "../ExploreByType/ExploreByType";
import ExploreByText from "../ExploreByText/ExploreByText";
import Contribute from "../../common/Contribute/Contribute";

jest.mock("../ExploreByCategory/ExploreByCategory", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../ExploreByType/ExploreByType", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../ExploreByText/ExploreByText", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../../common/Contribute/Contribute", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<ExplorePage />", () => {
  beforeEach(() => {
    ExploreByText.mockReturnValue(<div>text search</div>);
    ExploreByText.mockClear();
    ExploreByCategory.mockReturnValue(<div>categories</div>);
    ExploreByCategory.mockClear();
    ExploreByType.mockReturnValue(<div>types</div>);
    ExploreByType.mockClear();
    Contribute.mockReturnValue(<div>types</div>);
    Contribute.mockClear();
  });

  test("it should mount with an introduction text", () => {
    render(<ExplorePage />);

    const introduction = screen.getByRole("article");

    expect(introduction).toBeInTheDocument();
    expect(introduction).toContainHTML("Ricerca e riuso di asset semantici");
  });

  test("it should contain the text search form", () => {
    render(<ExplorePage />);

    expect(ExploreByText).toHaveBeenCalled();
  });

  test("it should contain the Categories explore links", () => {
    render(<ExplorePage />);

    expect(ExploreByCategory).toHaveBeenCalled();
  });

  test("it should contain the Types explore links", () => {
    render(<ExplorePage />);

    expect(ExploreByType).toHaveBeenCalled();
  });

  test("it should contain the Contribute section", () => {
    render(<ExplorePage />);

    expect(Contribute).toHaveBeenCalled();
  });
});
