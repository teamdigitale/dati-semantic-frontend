import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Anchor from "./Anchor";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/dom";

describe("<Anchor />", () => {
  test("it should mount", async () => {
    render(<Anchor href="http://www.disney.com">Click here</Anchor>);

    const link = screen.getByText("Click here");
    expect(link).toBeInTheDocument();
    userEvent.click(link);
  });

  test("it should navigate when clicked", async () => {
    global.window = { location: { pathname: null } };

    render(<Anchor href="http://www.disney.com">Click here</Anchor>);

    const link = screen.getByText("Click here");

    userEvent.click(link);
    waitFor(() =>
      expect(global.window.location.pathname).toEqual("www.repubblica.it")
    );
  });
});
