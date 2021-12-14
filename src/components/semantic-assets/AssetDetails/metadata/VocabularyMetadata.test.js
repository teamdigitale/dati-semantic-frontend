import VocabularyMetadata from "./VocabularyMetadata";
import { render, screen } from "@testing-library/react";
import { assetDetails } from "../../../../services/testUtils";

describe("<VocabularyMetadata />", () => {
  test("renders", () => {
    render(<VocabularyMetadata details={assetDetails()} />);

    expect(screen.getByTestId("vocab-metadata")).toBeInTheDocument();
    expect(screen.getByTestId("common-metadata")).toBeInTheDocument();
    expect(screen.getByText("Indirizzo dell'endpoint")).toBeInTheDocument();
    expect(
      screen.getByTestId("external-link-icon-for-endpoint-url")
    ).toBeInTheDocument();
    expect(
      screen.getByText("http://localhost:8080/vocabularies/ISTAT/legalStatus")
    ).toBeInTheDocument();
  });

  test("renders without endpointUrl", () => {
    render(
      <VocabularyMetadata details={{ ...assetDetails(), endpointUrl: null }} />
    );

    expect(screen.getByTestId("vocab-metadata")).toBeInTheDocument();
    expect(screen.getByTestId("common-metadata")).toBeInTheDocument();
    expect(
      screen.queryByText("Indirizzo dell'endpoint")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("external-link-icon-for-endpoint-url")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("http://localhost:8080/vocabularies/ISTAT/legalStatus")
    ).not.toBeInTheDocument();
  });
});
