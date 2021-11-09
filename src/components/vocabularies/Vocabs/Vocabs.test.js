import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Vocabs from "./Vocabs";

describe("<Vocabs />", () => {
  test("it should mount", () => {
    render(<Vocabs />);

    const vocabs = screen.getByTestId("Vocabs");

    expect(vocabs).toBeInTheDocument();
  });

  test("it should mount as empty and display empty message", () => {
    render(<Vocabs />);

    const vocabs = screen.getByTestId("Vocabs");

    expect(vocabs).toContainHTML("criterio di ricerca");
  });
});
