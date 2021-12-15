import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./Footer";
import { renderWithRoute } from "../../../services/testUtils";
import FooterLogos from "../FooterLogos/FooterLogos";
import FooterLinks from "../FooterLinks/FooterLinks";
import CookiePanel from "../CookiePanel/CookiePanel";
import Contribute from "../../common/Contribute/Contribute";

jest.mock("../FooterLogos/FooterLogos", () => ({
  __esModule: true,
  default: jest.fn(),
}));
jest.mock("../FooterLinks/FooterLinks", () => ({
  __esModule: true,
  default: jest.fn(),
}));
jest.mock("../CookiePanel/CookiePanel", () => ({
  __esModule: true,
  default: jest.fn(),
}));
jest.mock("../../common/Contribute/Contribute", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<Footer />", () => {
  beforeEach(() => {
    FooterLogos.mockClear();
    FooterLogos.mockReturnValue(<div>Footer Logos</div>);
    FooterLinks.mockClear();
    FooterLinks.mockReturnValue(<div>Footer Links</div>);
    CookiePanel.mockClear();
    CookiePanel.mockReturnValue(<div>Footer Links</div>);
    Contribute.mockClear();
    Contribute.mockReturnValue(<div>types</div>);
  });

  test("it should have the footer logos", () => {
    renderWithRoute(<Footer />);
    expect(FooterLogos).toHaveBeenCalled();
  });

  test("it should have the footer links", () => {
    renderWithRoute(<Footer />);
    expect(FooterLinks).toHaveBeenCalled();
  });

  test("it should have the cookie panel", () => {
    renderWithRoute(<Footer />);
    expect(CookiePanel).toHaveBeenCalled();
  });

  test("it should contain the Contribute section", () => {
    renderWithRoute(<Footer />);

    expect(Contribute).toHaveBeenCalled();
  });
});
