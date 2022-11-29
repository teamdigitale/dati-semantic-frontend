import { getSemanticAssetByUri } from "../../services/vocabService";
import { renderWithRoute } from "../../services/testUtils";
import { routes } from "../../services/routes";
import { waitFor } from "@testing-library/dom";
import React from "react";
import Swagger from "./Swagger";
import { screen } from "@testing-library/react";
import SwaggerUI from "swagger-ui-react";
import "@testing-library/jest-dom";

jest.mock("../../services/vocabService");
jest.mock("swagger-ui-react", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<Swagger />", () => {
  beforeEach(() => {
    getSemanticAssetByUri.mockClear();
    SwaggerUI.mockClear();
    SwaggerUI.mockReturnValue(<div>The UI</div>);
    window._env_ = { API_URL: "abc" };
  });

  describe("when no vocab IRI is supplied", () => {
    test("it should load generic description", () => {
      renderWithRoute(<Swagger />, routes.apiDocs());

      expect(getSemanticAssetByUri).not.toHaveBeenCalled();
    });
  });

  describe("when an error is encountered", () => {
    test("it should show missing vocab if uri lookup fails", async () => {
      getSemanticAssetByUri.mockRejectedValue("Could not find your vocab");
      renderWithRoute(<Swagger />, routes.apiDocs("non-existent"));

      await waitFor(() => {
        expect(getSemanticAssetByUri).toHaveBeenCalledWith("non-existent");
        const error = screen.getByRole("alert");
        expect(error.textContent).toContain("Impossibile caricare");
      });
    });
  });

  describe("when a vocab can be looked up", () => {
    const iri = "http://www.disney.com/characters";
    const title = "Disney characters";
    const vocabData = {
      assetIri: iri,
      title: title,
      agencyId: "Disney",
      keyConcept: "characters",
      endpointUrl: "http://ndc.org/vocabs/D/C",
    };
    beforeEach(() => {
      getSemanticAssetByUri.mockResolvedValue(vocabData);
    });

    test("it should show vocab details", async () => {
      renderWithRoute(<Swagger />, routes.apiDocs(iri));

      await waitFor(() => {
        expect(getSemanticAssetByUri).toHaveBeenCalledWith(iri);
        expect(screen.getByText(vocabData.agencyId)).toBeInTheDocument();
      });
      expect(screen.getByText(vocabData.agencyId)).toBeInTheDocument();
      expect(screen.getByText(vocabData.keyConcept)).toBeInTheDocument();
      expect(screen.getByText(vocabData.endpointUrl)).toBeInTheDocument();
    });
  });
});
