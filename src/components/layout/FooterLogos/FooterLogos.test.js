import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FooterLogos from "./FooterLogos";

describe("<FooterLogos />", () => {
  test("it should mount", () => {
    render(<FooterLogos />);

    const logo = screen.getByTitle(
      "Dipartimento per la trasformazione digitale"
    );
    expect(logo).toBeInTheDocument();
    const istatLogo = screen.getByTitle("Istat");
    expect(istatLogo).toBeInTheDocument();
  });
});
