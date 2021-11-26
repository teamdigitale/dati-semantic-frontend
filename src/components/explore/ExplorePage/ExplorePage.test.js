import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ExplorePage from "./ExplorePage";
import Categories from "../Categories/Categories";

jest.mock("../Categories/Categories", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<ExplorePage />", () => {
  beforeEach(() => {
    Categories.mockReturnValue(<div>categories</div>);
    Categories.mockClear();
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
});
