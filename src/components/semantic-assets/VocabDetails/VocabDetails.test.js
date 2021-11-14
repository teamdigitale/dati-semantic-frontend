import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import VocabDetails from "./VocabDetails";

describe("<VocabDetails />", () => {
  test("it should mount", () => {
    render(<VocabDetails details={{ title: "Cool vocab" }} />);

    const vocabDetails = screen.getByTestId("VocabDetails");

    expect(vocabDetails).toBeInTheDocument();
  });
});
