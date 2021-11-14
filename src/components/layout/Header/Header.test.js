import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";
import { renderWithRoute } from "../../../services/testUtils";
import HeaderSlim from "../HeaderSlim/HeaderSlim";
import HeaderMainTitle from "../HeaderMainTitle/HeaderMainTitle";

jest.mock("../HeaderSlim/HeaderSlim", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../HeaderMainTitle/HeaderMainTitle", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<Header />", () => {
  beforeEach(() => {
    HeaderSlim.mockClear();
    HeaderSlim.mockReturnValue(<div>Slim header</div>);
    HeaderMainTitle.mockClear();
    HeaderMainTitle.mockReturnValue(<div>Title header</div>);
  });

  test("it should contain the upper thin header", () => {
    renderWithRoute(<Header />);

    expect(HeaderSlim).toHaveBeenCalled();
  });

  test("it should contain main title", () => {
    renderWithRoute(<Header />);

    expect(HeaderMainTitle).toHaveBeenCalled();
  });
});
