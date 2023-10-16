/* eslint-disable prettier/prettier */
import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NewErrorPage from "./NewErrorPage";
import { renderWithRoute } from "../../../services/testUtils";
describe("<ErrorPage />", () => {
  test("it should contain an error message", () => {
    renderWithRoute(<NewErrorPage />);
    const errorPage = screen.findByTestId("NEWERRORPAGE");
    expect(errorPage).toBeDefined();
  });
});
