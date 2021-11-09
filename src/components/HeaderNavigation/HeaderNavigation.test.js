import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeaderNavigation from "./HeaderNavigation";

describe("<HeaderNavigation />", () => {
  test("it should mount", () => {
    render(<HeaderNavigation />);

    const navigation = screen.getByText("National Data Catalog");

    expect(navigation).toBeInTheDocument();
  });
});
