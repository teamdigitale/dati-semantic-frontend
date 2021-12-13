import VocabularyMetadata from "./VocabularyMetadata";
import { render, screen } from "@testing-library/react";
import { assetDetails } from "../../../../services/testUtils";

describe("<VocabularyMetadata />", () => {
  test("renders", () => {
    render(<VocabularyMetadata details={assetDetails()} />);

    expect(screen.getByTestId("vocab-metadata")).toBeInTheDocument();
    expect(screen.getByTestId("common-metadata")).toBeInTheDocument();
    expect(
      screen.getByText("http://localhost:8080/vocabularies/ISTAT/legalStatus")
    ).toBeInTheDocument();
  });
});
