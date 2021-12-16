import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CookiePanel from "./CookiePanel";

describe("<CookiePanel />", () => {
  test("it should mount", () => {
    render(<CookiePanel />);

    const cookieText = screen.getByText("i cookies");
    expect(cookieText).toBeInTheDocument();
  });
});
