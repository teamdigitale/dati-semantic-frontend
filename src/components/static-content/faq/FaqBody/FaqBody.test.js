import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FaqBody from "./FaqBody";
import { renderWithRoute } from "../../../../services/testUtils";

describe("<FaqBody />", () => {
  test("it should mount", async () => {
    renderWithRoute(<FaqBody />);

    const component = await screen.findByTestId("FaqBody");

    expect(component).toBeInTheDocument();
  });
});
