import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContentParagraph from "./ContentParagraph";

describe("<ContentParagraph />", () => {
  test("it should mount", () => {
    render(
      <ContentParagraph title="Some title">Some content</ContentParagraph>
    );

    const paragraph = screen.getByText("Some content");
    expect(paragraph).toBeInTheDocument();
  });
});
