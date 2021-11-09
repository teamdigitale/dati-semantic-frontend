import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Main from "./Main";
import { MemoryRouter } from "react-router-dom";

describe("<Main />", () => {
  test("it should mount", () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );

    const main = screen.getByRole("main");

    expect(main).toBeInTheDocument();
  });

  test("it should display an error for a wrong URL", () => {
    render(
      <MemoryRouter initialEntries={["/not-existing"]}>
        <Main />
      </MemoryRouter>
    );

    const main = screen.getByRole("main");

    expect(main).toContainHTML("non è disponibile");
  });
});
