import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeaderNavigation from "./HeaderNavigation";
import { renderWithRoute } from "../../../services/testUtils";

describe("<HeaderNavigation />", () => {
  test("it should mount with main title", () => {
    renderWithRoute(<HeaderNavigation />);

    const navigation = screen.getByRole("heading", {
      name: /Il catalogo nazionale della semantica dei dati/i,
    });

    expect(navigation).toBeInTheDocument();
  });
});
