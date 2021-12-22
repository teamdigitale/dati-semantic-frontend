import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchResults from "./SearchResults";
import { AT_VOCABULARY } from "../../../services/dataConstants";
import SearchResultItem from "../SearchResultItem/SearchResultItem";

jest.mock("../SearchResultItem/SearchResultItem", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<SearchResults />", () => {
  beforeEach(() => {
    SearchResultItem.mockClear();
    SearchResultItem.mockReturnValue(<div>The item</div>);
  });

  describe("with some vocabularies", () => {
    const someVocabs = [
      {
        type: AT_VOCABULARY,
        assetIri: "http://www.disney.com/characters/",
        title: "Disney characters",
        description: "Some description",
      },
      {
        type: AT_VOCABULARY,
        assetIri: "http://www.atptour.com/court-types",
        title: "Tennis court types",
        description: "Some other description",
      },
    ];

    test("it should not show empty results message for valid items", () => {
      render(<SearchResults items={someVocabs} />);

      const emptyMessage = screen.queryByTestId("EmptySearchResults");

      expect(emptyMessage).toBeFalsy();
    });

    test("it should show as many items as in result", () => {
      render(<SearchResults items={someVocabs} />);

      expect(SearchResultItem).toHaveBeenCalledTimes(someVocabs.length);
    });
  });
});
