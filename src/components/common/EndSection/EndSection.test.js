import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EndSection from "./EndSection";
describe("<EndSection />", () => {
  test("it should mount with an EndSection type 1", () => {
    render(<EndSection type={1} />);
    const endSectionType1 = screen.getByTestId("endSection_1");
    expect(endSectionType1).toBeInTheDocument();
  });
  test("it should mount with an EndSection type 2", () => {
    render(<EndSection type={2} />);
    const endSectionType2 = screen.getByTestId("endSection_2");
    expect(endSectionType2).toBeInTheDocument();
  });
});
