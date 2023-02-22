import { render, screen } from "@testing-library/react";
import SkipToContent from "../SkipToContent/SkipToContent";
import React from "react";

describe("<SkipToContent />", () => {
  test("it should mount", () => {
    render(<SkipToContent />);

    const goToMainText = screen.getByText("Vai al contenuto principale");
    const goToFooterText = screen.getByText("Vai al footer");

    expect(goToMainText).toBeInTheDocument();
    expect(goToFooterText).toBeInTheDocument();
  });
});
