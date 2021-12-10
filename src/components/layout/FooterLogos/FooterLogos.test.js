import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FooterLogos from "./FooterLogos";

describe("<FooterLogos />", () => {
  test("it should mount", () => {
    render(<FooterLogos />);

    const footerText = screen.getByText("progetto di");
    expect(footerText).toBeInTheDocument();
  });
});
