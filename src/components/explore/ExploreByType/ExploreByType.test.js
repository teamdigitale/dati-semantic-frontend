import React from "react";
import "@testing-library/jest-dom/extend-expect";
import ExploreByType from "./ExploreByType";
import ExploreGrid from "../ExploreGrid/ExploreGrid";
import { SUPPORTED_ASSET_TYPES } from "../../../services/dataConstants";
import { renderWithRoute } from "../../../services/testUtils";

jest.mock("../ExploreGrid/ExploreGrid", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<ExploreByType />", () => {
  beforeEach(() => {
    ExploreGrid.mockReturnValue(<div>Grid cells</div>);
    ExploreGrid.mockClear();
  });

  test("it should render all the types in a grid", () => {
    renderWithRoute(<ExploreByType />);

    expect(ExploreGrid).toHaveBeenCalled();
    const props = ExploreGrid.mock.calls[0][0];
    expect(props.cells.length).toBe(SUPPORTED_ASSET_TYPES.length);
  });
});
