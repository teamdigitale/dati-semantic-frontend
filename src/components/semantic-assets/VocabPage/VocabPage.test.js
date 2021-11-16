import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { waitFor } from "@testing-library/dom";
import VocabPage from "./VocabPage";
import AssetNotFound, {
  MISSING_RESOURCE,
  MISSING_URI,
} from "../AssetNotFound/AssetNotFound";
import { renderWithRoute } from "../../../services/testUtils";
import { getVocabularyByUri } from "../../../services/vocabService";
import VocabDetails from "../VocabDetails/VocabDetails";
import { ASSETS_VOCABULARIES_FULL_URL } from "../../../services/routes";
const { getVocabularyUrl } = jest.requireActual(
  "../../../services/vocabService"
);

jest.mock("../../../services/vocabService");
jest.mock("../AssetNotFound/AssetNotFound", () => ({
  __esModule: true,
  default: jest.fn(),
}));
jest.mock("../VocabDetails/VocabDetails", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<VocabPage />", () => {
  beforeEach(() => {
    getVocabularyByUri.mockClear();
    AssetNotFound.mockClear();
    AssetNotFound.mockReturnValue(<p>Oops!</p>);
  });

  describe("when an error is encountered", () => {
    beforeEach(() => {
      getVocabularyByUri.mockResolvedValue(null);
    });

    test("it should show error if uri param is missing", () => {
      renderWithRoute(<VocabPage />, ASSETS_VOCABULARIES_FULL_URL);

      expect(AssetNotFound).toHaveBeenCalledWith({ reason: MISSING_URI }, {});
      expect(getVocabularyByUri).not.toHaveBeenCalled();
    });

    test("it should show missing vocab if uri lookup fails", async () => {
      renderWithRoute(<VocabPage />, getVocabularyUrl("non-existent"));

      await waitFor(() =>
        expect(getVocabularyByUri).toHaveBeenCalledWith("non-existent")
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
      getVocabularyByUri.mockResolvedValue(vocabData);
      VocabDetails.mockClear();
      VocabDetails.mockReturnValue(<div>Vocab details</div>);
    });

    test("it should show missing vocab if uri lookup fails", async () => {
      renderWithRoute(<VocabPage />, getVocabularyUrl(uri));

      await waitFor(() => expect(getVocabularyByUri).toHaveBeenCalledWith(uri));
      expect(AssetNotFound).not.toHaveBeenCalled();
      expect(VocabDetails).toHaveBeenCalledWith({ details: vocabData }, {});
    });
  });
});
