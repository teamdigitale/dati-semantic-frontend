import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FaqPage from "./FaqPage";
import { renderWithRoute } from "../../../services/testUtils";

describe("<FaqPage />", () => {
  test("it should mount", async () => {
    renderWithRoute(<FaqPage />);

    const vocabs = await screen.findByTestId("FaqPage");

    expect(vocabs).toBeInTheDocument();
  });
});
