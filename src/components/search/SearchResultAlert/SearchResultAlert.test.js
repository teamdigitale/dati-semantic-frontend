import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchResultAlert from "./SearchResultAlert";

describe("<NoResults />", () => {
  test("it should mount", () => {
    render(<SearchResultAlert title="Ta dah!" message="We're really sorry" />);

    const noResults = screen.getByTestId("NoResults");

    expect(noResults).toBeInTheDocument();
  });

  test("it should display title", () => {
    render(<SearchResultAlert title="Ta dah!" message="We're really sorry" />);

    const title = screen.getByText("Ta dah!");

    expect(title).toBeInTheDocument();
  });

  test("it should display message", () => {
    render(<SearchResultAlert title="Ta dah!" message="We're really sorry" />);

    const message = screen.getByText("We're really sorry");

    expect(message).toBeInTheDocument();
  });
});
