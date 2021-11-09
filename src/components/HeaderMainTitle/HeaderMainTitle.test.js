import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeaderMainTitle from "./HeaderMainTitle";

describe("<HeaderMainTitle />", () => {
  test("it should mount", () => {
    render(<HeaderMainTitle />);

    const navigation = screen.getByText("National Data Catalog");

    expect(navigation).toBeInTheDocument();
  });
});
