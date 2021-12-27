import AssetDetailsButtons from "./AssetDetailsButtons";
import { fireEvent, render, screen } from "@testing-library/react";
import {
  AT_ONTOLOGY,
  AT_SCHEMA,
  AT_VOCABULARY,
} from "../../../../services/dataConstants";
import getSparqlEndpoint from "../../../../services/sparql";

jest.mock("../../../../services/sparql");

describe("<AssetDetailsButtons/>", () => {
  beforeEach(() => {
    global.window.open = jest.fn();
    getSparqlEndpoint.mockReturnValue("http://sparql.example.com");
  });
  test("mounts", () => {
    render(
      <AssetDetailsButtons
        type={AT_VOCABULARY}
        assetIri={"CvIri"}
        vocabUrl={"CvUrl"}
        accessUrl={"gitUrl"}
      />
    );

    const buttons = screen.getByTestId("asset-details-buttons");
    expect(buttons).toBeInTheDocument();
  });

  test("renders buttons for vocab", () => {
    const openSpy = jest.spyOn(window, "open");
    render(
      <AssetDetailsButtons
        type={AT_VOCABULARY}
        assetIri={"CvIri"}
        vocabUrl={"CvUrl"}
        accessUrl={"gitUrl"}
      />
    );

    const sparqlButton = screen.getByText("sparql");
    expect(sparqlButton).toBeInTheDocument();
    fireEvent.click(sparqlButton);
    expect(openSpy).toHaveBeenCalledWith(
      "http://sparql.example.com?qtxt=select distinct ?prop ?value where { <CvIri> ?prop ?value}"
    );
    openSpy.mockClear();

    const apiBtn = screen.getByText("api");
    expect(apiBtn).toBeInTheDocument();
    fireEvent.click(apiBtn);
    expect(openSpy).toHaveBeenCalledWith("CvUrl");
    openSpy.mockClear();

    const srcBtn = screen.getByText("Vai al sorgente");
    expect(srcBtn).toBeInTheDocument();
    fireEvent.click(srcBtn);
    expect(openSpy).toHaveBeenCalledWith("gitUrl");
    openSpy.mockClear();
  });

  test("renders buttons for ontology", () => {
    render(<AssetDetailsButtons type={AT_ONTOLOGY} accessUrl={"gitUrl"} />);

    const sparqlButton = screen.getByText("sparql");
    expect(sparqlButton).toBeInTheDocument();

    const apiBtn = screen.queryByText("api");
    expect(apiBtn).not.toBeInTheDocument();

    const srcBtn = screen.getByText("Vai al sorgente");
    expect(srcBtn).toBeInTheDocument();
  });

  test("renders buttons for schema", () => {
    render(<AssetDetailsButtons type={AT_SCHEMA} accessUrl={"gitUrl"} />);

    const sparqlButton = screen.queryByText("sparql");
    expect(sparqlButton).not.toBeInTheDocument();

    const apiBtn = screen.queryByText("api");
    expect(apiBtn).not.toBeInTheDocument();

    const srcBtn = screen.getByText("Vai al sorgente");
    expect(srcBtn).toBeInTheDocument();
  });
});
