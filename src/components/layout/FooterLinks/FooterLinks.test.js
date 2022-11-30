import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FooterLinks from "./FooterLinks";

describe("<FooterLinks />", () => {
  test("it should mount", () => {
    render(<FooterLinks />);

    const footerText = screen.getByText("Informativa privacy");
    expect(footerText).toBeInTheDocument();
  });
});
