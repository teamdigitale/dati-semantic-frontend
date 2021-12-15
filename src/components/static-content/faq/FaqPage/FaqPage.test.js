import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FaqPage from "./FaqPage";
import { renderWithRoute } from "../../../../services/testUtils";
import FaqBody from "../FaqBody/FaqBody";
import IntroSection from "../../../common/IntroSection/IntroSection";

jest.mock("../../../common/IntroSection/IntroSection", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../FaqBody/FaqBody", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<FaqPage />", () => {
  beforeEach(() => {
    IntroSection.mockClear();
    IntroSection.mockReturnValue(<div>Faq header</div>);
    FaqBody.mockClear();
    FaqBody.mockReturnValue(<div>Faq Body</div>);
  });

  test("it should mount", async () => {
    renderWithRoute(<FaqPage />);
    const component = await screen.findByTestId("FaqPage");
    expect(component).toBeInTheDocument();
  });

  test("it should render header for FAQ", async () => {
    renderWithRoute(<FaqPage />);
    expect(IntroSection).toHaveBeenCalled();
  });

  test("it should render content for FAQ", async () => {
    renderWithRoute(<FaqPage />);
    expect(FaqBody).toHaveBeenCalled();
  });
});
