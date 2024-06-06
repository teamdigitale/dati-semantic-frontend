import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ExplorePage from "./ExplorePage";
import ExploreByCategory from "../ExploreByCategory/ExploreByCategory";
import ExploreByType from "../ExploreByType/ExploreByType";
import ExploreByText from "../ExploreByText/ExploreByText";
import { renderWithRoute } from "../../../services/testUtils";

jest.mock("../ExploreByCategory/ExploreByCategory", () => ({
  __esModule: true,
  default: jest.fn()
}));

jest.mock("../ExploreByType/ExploreByType", () => ({
  __esModule: true,
  default: jest.fn()
}));

jest.mock("../ExploreByText/ExploreByText", () => ({
  __esModule: true,
  default: jest.fn()
}));

describe("<ExplorePage />", () => {
  beforeEach(() => {
    ExploreByText.mockReturnValue(<div>text search</div>);
    ExploreByText.mockClear();
    ExploreByCategory.mockReturnValue(<div>categories</div>);
    ExploreByCategory.mockClear();
    ExploreByType.mockReturnValue(<div>types</div>);
    ExploreByType.mockClear();
  });

  test("it should mount with an introduction text", () => {
    renderWithRoute(<ExplorePage />);

    const introduction = screen.getByTestId("ExplorePage");

    expect(introduction).toBeInTheDocument();
    expect(introduction).toContainHTML(
      "Il catalogo nazionale per lo scambio di dati e informazioni tra pubbliche amministrazioni"
    );
  });

  test("it should contain the text search form", () => {
    renderWithRoute(<ExplorePage />);

    expect(ExploreByText).toHaveBeenCalled();
  });

  test("it should contain the Categories explore links", () => {
    renderWithRoute(<ExplorePage />);

    expect(ExploreByCategory).toHaveBeenCalled();
  });

  test("it should contain the Types explore links", () => {
    renderWithRoute(<ExplorePage />);

    expect(ExploreByType).toHaveBeenCalled();
  });
});
