import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeaderMainTitle from "./HeaderMainTitle";
import { MemoryRouter } from "react-router-dom";

describe("<HeaderMainTitle />", () => {
  test("it should mount", () => {
    render(
      <MemoryRouter>
        <HeaderMainTitle />
      </MemoryRouter>
    );

    const navigation = screen.getByText("National Data Catalog");

    expect(navigation).toBeInTheDocument();
  });
});
