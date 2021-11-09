import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NotFound from "./NotFound";
import { MemoryRouter } from "react-router-dom";

describe("<NotFound />", () => {
  test("it should contain an error message", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const notFound = screen.getByTestId("NotFound");

    expect(notFound).toBeInTheDocument();
    expect(notFound).toContainHTML("non è disponibile");
  });
});
