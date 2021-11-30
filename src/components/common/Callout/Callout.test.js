import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Callout from "./Callout";

describe("<Callout />", () => {
  test("it should mount", () => {
    render(
      <Callout title="Oh my!" type="danger">
        I did not expect it!
      </Callout>
    );

    const callout = screen.getByRole("alert");

    expect(callout).toBeInTheDocument();
  });

  test("it should display children", () => {
    render(
      <Callout title="Oh my!" type="danger">
        I did not expect it!
      </Callout>
    );

    const callout = screen.getByText("I did not expect it!");

    expect(callout).toBeInTheDocument();
  });

  test("it should display title", () => {
    render(
      <Callout title="Oh my!" type="danger">
        I did not expect it!
      </Callout>
    );

    const callout = screen.getByText("Oh my!");

    expect(callout).toBeInTheDocument();
  });
});
