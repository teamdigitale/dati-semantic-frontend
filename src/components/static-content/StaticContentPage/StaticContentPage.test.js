import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StaticContentPage from "./StaticContentPage";

describe("<StaticContentPage />", () => {
  test("it should mount", () => {
    render(<StaticContentPage article="Validate" />);

    const staticContentPage = screen.getByTestId("StaticContentPage");

    expect(staticContentPage).toBeInTheDocument();
  });

  test("it should display the provided article", () => {
    render(<StaticContentPage article="Validate" />);

    const staticContentPage = screen.getByText("Validate");

    expect(staticContentPage).toBeInTheDocument();
  });
});
