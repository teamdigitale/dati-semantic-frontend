import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Main from "./Main";

describe("<Main />", () => {
  test("it should mount", () => {
    render(<Main />);

    const main = screen.getByRole("main");

    expect(main).toBeInTheDocument();
  });
});
