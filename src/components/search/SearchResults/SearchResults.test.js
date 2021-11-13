import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchResults from "./SearchResults";
import { AT_VOCABULARY } from "../../../services/dataConstants";

describe("<SearchResults />", () => {
  test("it should mount with empty results", () => {
    render(<SearchResults items={[]} />);

    const searchResults = screen.getByTestId("SearchResults");

    expect(searchResults).toBeInTheDocument();
  });

  describe("when empty", () => {
    test("it should show empty results message", () => {
      render(<SearchResults items={[]} />);

      const emptyMessage = screen.getByTestId("EmptySearchResults");

      expect(emptyMessage).toBeInTheDocument();
    });

    describe("with some vocabularies", () => {
      const someVocabs = [
        {
          type: AT_VOCABULARY,
          uri: "http://www.disney.com/characters/",
          title: "Disney characters",
        },
        {
          type: AT_VOCABULARY,
          uri: "http://www.atptour.com/court-types",
          title: "Tennis court types",
        },
      ];

      test("it should not show empty results message for valid items", () => {
        render(<SearchResults items={someVocabs} />);

        const emptyMessage = screen.queryByTestId("EmptySearchResults");

        expect(emptyMessage).toBeFalsy();
      });

      test("it as many items", () => {
        render(<SearchResults items={someVocabs} />);

        const searchResultComponents = screen.getAllByTestId(
          "SearchResultComponent"
        );

        expect(searchResultComponents.length).toBe(someVocabs.length);
      });
    });
  });
});
