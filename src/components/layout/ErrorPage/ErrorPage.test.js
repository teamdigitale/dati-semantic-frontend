import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ErrorPage from "./ErrorPage";
import { renderWithRoute } from "../../../services/testUtils";
describe("<ErrorPage />", () => {
  test("it should contain an error message", () => {
    renderWithRoute(<ErrorPage />);
    const errorPage = screen.findByTestId("ERRORPAGE");
    expect(errorPage).toBeDefined();
  });
});
