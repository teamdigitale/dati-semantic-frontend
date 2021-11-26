import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ExplorePage from "./ExplorePage";
import Categories from "../Categories/Categories";
import Types from "../Types/Types";

jest.mock("../Categories/Categories", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../Types/Types", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<ExplorePage />", () => {
  beforeEach(() => {
    Categories.mockReturnValue(<div>categories</div>);
    Categories.mockClear();
    Types.mockReturnValue(<div>types</div>);
    Types.mockClear();
  });

  test("it should mount with an introduction text", () => {
    render(<ExplorePage />);

    const introduction = screen.getByRole("article");

    expect(introduction).toBeInTheDocument();
    expect(introduction).toContainHTML("catalogo semantico");
  });

  test("it should contain the Categories explore links", () => {
    render(<ExplorePage />);

    expect(Categories).toHaveBeenCalled();
  });

  test("it should contain the Types explore links", () => {
    render(<ExplorePage />);

    expect(Types).toHaveBeenCalled();
  });
});
