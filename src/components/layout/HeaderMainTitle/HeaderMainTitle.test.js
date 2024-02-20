/* eslint-disable prettier/prettier */
import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeaderMainTitle from "./HeaderMainTitle";
import { renderWithRoute } from "../../../services/testUtils";

describe("<HeaderMainTitle />", () => {
  test("it should mount and contain main title and tagline", () => {
    renderWithRoute(<HeaderMainTitle />);

    expect(
      screen.getByRole("heading", {
        name: /Schema/i
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Il catalogo nazionale della semantica dei dati/i)
    ).toBeInTheDocument();
  });
});
