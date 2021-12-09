import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./Footer";

describe("<Footer />", () => {
  test("it should mount", () => {
    render(<Footer />);

    const footerText = screen.getByText("progetto di");
    expect(footerText).toBeInTheDocument();
  });
});
