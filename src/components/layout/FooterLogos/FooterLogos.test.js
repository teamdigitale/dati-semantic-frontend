import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FooterLogos from "./FooterLogos";

describe("<FooterLogos />", () => {
  test("it should mount", () => {
    render(<FooterLogos />);

    const logo = screen.getByTitle("Logo");
    expect(logo).toBeInTheDocument();
    const istatLogo = screen.getByTitle("ISTAT Logo");
    expect(istatLogo).toBeInTheDocument();
  });
});
