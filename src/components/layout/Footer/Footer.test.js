import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./Footer";
import { renderWithRoute } from "../../../services/testUtils";
import FooterLogos from "../FooterLogos/FooterLogos";
import FooterLinks from "../FooterLinks/FooterLinks";

jest.mock("../FooterLogos/FooterLogos", () => ({
  __esModule: true,
  default: jest.fn(),
}));
jest.mock("../FooterLinks/FooterLinks", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<Footer />", () => {
  beforeEach(() => {
    FooterLogos.mockClear();
    FooterLogos.mockReturnValue(<div>Footer Logos</div>);
    FooterLinks.mockClear();
    FooterLinks.mockReturnValue(<div>Footer Links</div>);
  });

  test("it should have the footer logos", () => {
    renderWithRoute(<Footer />);
    expect(FooterLogos).toHaveBeenCalled();
  });

  test("it should have the footer links", () => {
    renderWithRoute(<Footer />);
    expect(FooterLinks).toHaveBeenCalled();
  });
});
