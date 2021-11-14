import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeaderMainTitle from "./HeaderMainTitle";
import { renderWithRoute } from "../../../services/testUtils";

describe("<HeaderMainTitle />", () => {
  test("it should mount", () => {
    renderWithRoute(<HeaderMainTitle />);

    const navigation = screen.getByText("National Data Catalog");

    expect(navigation).toBeInTheDocument();
  });
});
