import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Main from "./Main";
import { renderWithRoute } from "../../../services/testUtils";

describe("<Main />", () => {
  test("it should mount", () => {
    renderWithRoute(<Main />);

    const main = screen.getByRole("main");

    expect(main).toBeInTheDocument();
  });

  test("it should display an error for a wrong URL", () => {
    renderWithRoute(<Main />, "/not-existing");

    const main = screen.getByRole("main");

    expect(main).toContainHTML("non è disponibile");
  });
});
