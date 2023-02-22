import AssetDetails from "./AssetDetails";
import { render, screen } from "@testing-library/react";
import getSparqlEndpoint from "../../../services/sparql";
import { AT_ONTOLOGY, AT_SCHEMA } from "../../../services/dataConstants";
import { assetDetails } from "../../../services/testUtils";
import SwaggerUI from "swagger-ui-react";
import React from "react";
import AssetDetailsButtons from "./summary/AssetDetailsButtons";

jest.mock("../../../services/sparql");
jest.mock("swagger-ui-react", () => ({
  __esModule: true,
  default: jest.fn(),
}));
jest.mock("./summary/AssetDetailsButtons", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const details = assetDetails();
describe("<AssetDetails />", () => {
  beforeEach(() => {
    getSparqlEndpoint.mockReturnValue("SPARQL_ENDPOINT_URL");
    AssetDetailsButtons.mockClear();
    AssetDetailsButtons.mockReturnValue(<div>Buttons</div>);
    SwaggerUI.mockClear();
    SwaggerUI.mockReturnValue(<div>The UI</div>);
  });

  test("it should render all components for controlled vocabulary", () => {
    render(<AssetDetails details={details} />);

    const vocabDetails = screen.getByTestId("asset-details-container");
    expect(vocabDetails).toBeInTheDocument();

    const summary = screen.getByTestId("asset-details-summary");
    expect(summary).toBeInTheDocument();

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

    const schemaDetails = screen.queryByTestId("schema-details");
    expect(schemaDetails).not.toBeInTheDocument();
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

    const schemaDetails = screen.getByTestId("schema-details");
    expect(schemaDetails).toBeInTheDocument();

    const schemaDetailsText = screen.getByText("The UI");
    expect(schemaDetailsText).toBeInTheDocument();
  });

  test("it should render the buttons with access url for the asset", () => {
    const detailsWithAccessUrl = {
      ...details,
      distributions: [
        {
          accessUrl: "access.yaml",
          downloadUrl: "download.yaml",
        },
      ],
    };
    detailsWithAccessUrl.type = AT_SCHEMA;
    render(<AssetDetails details={detailsWithAccessUrl} />);

    expect(AssetDetailsButtons).toHaveBeenCalledWith(
      expect.objectContaining({
        type: detailsWithAccessUrl.type,
        assetIri:
          "https://w3id.org/italia/controlled-vocabulary/classifications-for-organizations/legal-status",
        vocabUrl:
          "/api-docs?vocabIri=https%3A%2F%2Fw3id.org%2Fitalia%2Fcontrolled-vocabulary%2Fclassifications-for-organizations%2Flegal-status",
        accessUrl: "access.yaml",
      }),
      {}
    );
  });

  test("it should render the buttons with download url for the asset when access url is not present", () => {
    const detailsWithNoAccessUrl = {
      ...details,
      distributions: [
        {
          downloadUrl: "download.yaml",
        },
      ],
    };

    detailsWithNoAccessUrl.type = AT_SCHEMA;
    render(<AssetDetails details={detailsWithNoAccessUrl} />);

    expect(AssetDetailsButtons).toHaveBeenCalledWith(
      expect.objectContaining({
        type: detailsWithNoAccessUrl.type,
        assetIri:
          "https://w3id.org/italia/controlled-vocabulary/classifications-for-organizations/legal-status",
        vocabUrl:
          "/api-docs?vocabIri=https%3A%2F%2Fw3id.org%2Fitalia%2Fcontrolled-vocabulary%2Fclassifications-for-organizations%2Flegal-status",
        accessUrl: "download.yaml",
      }),
      {}
    );
  });
});
