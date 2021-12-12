import AssetDetails from "./AssetDetails";
import { render, screen } from "@testing-library/react";
import getSparqlEndpoint from "../../../services/sparql";
import { AT_ONTOLOGY, AT_SCHEMA } from "../../../services/dataConstants";
import { assetDetails } from "../../../services/testUtils";

jest.mock("../../../services/sparql");
const details = assetDetails();
describe("<AssetDetails />", () => {
  beforeEach(() => {
    getSparqlEndpoint.mockReturnValue("SPARQL_ENDPOINT_URL");
  });
  test("it should render all components for controlled vocabulary", () => {
    render(<AssetDetails details={details} />);

    const vocabDetails = screen.getByTestId("asset-details-container");
    expect(vocabDetails).toBeInTheDocument();

    const summary = screen.getByTestId("asset-details-summary");
    expect(summary).toBeInTheDocument();

    const buttons = screen.getByTestId("asset-details-buttons");
    expect(buttons).toBeInTheDocument();

    const vocabMetadata = screen.getByTestId("vocab-metadata");
    expect(vocabMetadata).toBeInTheDocument();

    const ontoMetadata = screen.queryByTestId("ontology-metadata");
    expect(ontoMetadata).not.toBeInTheDocument();

    const schemaMetadata = screen.queryByTestId("schema-metadata");
    expect(schemaMetadata).not.toBeInTheDocument();
  });

  test("it should render all components for Onntology", () => {
    details.type = AT_ONTOLOGY;
    render(<AssetDetails details={details} />);

    const vocabMetadata = screen.queryByTestId("vocab-metadata");
    expect(vocabMetadata).not.toBeInTheDocument();

    const ontoMetadata = screen.getByTestId("ontology-metadata");
    expect(ontoMetadata).toBeInTheDocument();

    const schemaMetadata = screen.queryByTestId("schema-metadata");
    expect(schemaMetadata).not.toBeInTheDocument();
  });

  test("it should render all components for Schema", () => {
    details.type = AT_SCHEMA;
    render(<AssetDetails details={details} />);

    const vocabMetadata = screen.queryByTestId("vocab-metadata");
    expect(vocabMetadata).not.toBeInTheDocument();

    const ontoMetadata = screen.queryByTestId("ontology-metadata");
    expect(ontoMetadata).not.toBeInTheDocument();

    const schemaMetadata = screen.getByTestId("schema-metadata");
    expect(schemaMetadata).toBeInTheDocument();
  });
});
