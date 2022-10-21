import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NotFound from "./NotFound";
import { renderWithRoute } from "../../../services/testUtils";

describe("<NotFound />", () => {
  test("it should contain an error message", () => {
    renderWithRoute(<NotFound />);

    const notFound = screen.getByRole("alert");

    expect(notFound).toBeInTheDocument();
  });
});
