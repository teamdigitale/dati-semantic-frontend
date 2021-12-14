import VocabularyMetadata from "./VocabularyMetadata";
import { render, screen } from "@testing-library/react";
import { assetDetails } from "../../../../services/testUtils";

describe("<VocabularyMetadata />", () => {
  test("renders", () => {
    render(<VocabularyMetadata details={assetDetails()} />);

    expect(screen.getByTestId("vocab-metadata")).toBeInTheDocument();
    expect(screen.getByTestId("common-metadata")).toBeInTheDocument();
    expect(screen.getByText("Indirizzo dell'endpoint")).toBeInTheDocument();
    const endpointUrlIcon = screen.getByTestId(
      "external-link-icon-for-endpoint-url"
    );
    expect(endpointUrlIcon).toBeInTheDocument();
    expect(endpointUrlIcon.closest("a")).toHaveAttribute(
      "href",
      "http://localhost:8080/vocabularies/ISTAT/legalStatus"
    );
    expect(endpointUrlIcon.closest("a")).toHaveAttribute("target", "_blank");

    const ednpointLink = screen.getByText(
      "http://localhost:8080/vocabularies/ISTAT/legalStatus"
    );
    expect(ednpointLink).toBeInTheDocument();
    expect(ednpointLink.closest("a")).toHaveAttribute(
      "href",
      "http://localhost:8080/vocabularies/ISTAT/legalStatus"
    );
    expect(ednpointLink.closest("a")).toHaveAttribute("target", "_blank");
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
