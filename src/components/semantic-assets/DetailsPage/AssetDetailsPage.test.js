import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { waitFor } from "@testing-library/dom";
import AssetDetailsPage from "./AssetDetailsPage";
import AssetNotFound, {
  MISSING_RESOURCE,
  MISSING_URI,
} from "../AssetNotFound/AssetNotFound";
import { renderWithRoute } from "../../../services/testUtils";
import { getSemanticAssetByUri } from "../../../services/vocabService";
import AssetDetails from "../AssetDetails/AssetDetails";
import { ASSETS_FULL_URL } from "../../../services/routes";

const { getDetailsPageUrl } = jest.requireActual(
  "../../../services/vocabService"
);

jest.mock("../../../services/vocabService");
jest.mock("../AssetNotFound/AssetNotFound", () => ({
  __esModule: true,
  default: jest.fn(),
}));
jest.mock("../AssetDetails/AssetDetails", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<AssetDetailsPage />", () => {
  beforeEach(() => {
    getSemanticAssetByUri.mockClear();
    AssetNotFound.mockClear();
    AssetNotFound.mockReturnValue(<p>Oops!</p>);
  });

  describe("when an error is encountered", () => {
    beforeEach(() => {
      getSemanticAssetByUri.mockResolvedValue(null);
    });

    test("it should show error if uri param is missing", () => {
      renderWithRoute(<AssetDetailsPage />, ASSETS_FULL_URL);

      expect(AssetNotFound).toHaveBeenCalledWith({ reason: MISSING_URI }, {});
      expect(getSemanticAssetByUri).not.toHaveBeenCalled();
    });

    test("it should show missing vocab if uri lookup fails", async () => {
      renderWithRoute(<AssetDetailsPage />, getDetailsPageUrl("non-existent"));

      await waitFor(() =>
        expect(getSemanticAssetByUri).toHaveBeenCalledWith("non-existent")
      );
      expect(AssetNotFound).toHaveBeenCalledWith(
        { reason: MISSING_RESOURCE },
        {}
      );
    });
  });

  describe("when a vocab can be looked up", () => {
    const uri = "http://www.disney.com/characters";
    const vocabData = { uri, title: "Disney characters" };
    beforeEach(() => {
      getSemanticAssetByUri.mockResolvedValue(vocabData);
      AssetDetails.mockClear();
      AssetDetails.mockReturnValue(<div>Vocab details</div>);
    });

    test("it should show missing vocab if uri lookup fails", async () => {
      renderWithRoute(<AssetDetailsPage />, getDetailsPageUrl(uri));

      await waitFor(() =>
        expect(getSemanticAssetByUri).toHaveBeenCalledWith(uri)
      );
      expect(AssetNotFound).not.toHaveBeenCalled();
      expect(AssetDetails).toHaveBeenCalledWith({ details: vocabData }, {});
    });
  });
});
