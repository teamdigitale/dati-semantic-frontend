import React from "react";
import { screen } from "@testing-library/react";
import { waitFor } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import SearchPage from "./SearchPage";
import { search } from "../../../services/searchService";
import { AT_ONTOLOGY, AT_VOCABULARY } from "../../../services/dataConstants";
import { renderWithRoute } from "../../../services/testUtils";
import SearchResults from "../SearchResults/SearchResults";
import { routes } from "../../../services/routes";

jest.mock("../../../services/searchService");
jest.mock("../SearchResults/SearchResults", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<SearchPage />", () => {
  beforeEach(() => {
    SearchResults.mockReturnValue(<p>A pragraph</p>);
    search.mockClear();
    search.mockResolvedValue([]);
  });

  test("it should mount", async () => {
    renderWithRoute(<SearchPage />);

    const vocabs = await screen.findByTestId("SearchPage");

    expect(vocabs).toBeInTheDocument();
  });

  test("it should search with appropriate filters", async () => {
    renderWithRoute(
      <SearchPage />,
      routes.search({ type: AT_VOCABULARY, pattern: "abc" })
    );

    await waitFor(() => {
      expect(search).toHaveBeenCalledWith({
        type: AT_VOCABULARY,
        pattern: "abc",
      });
    });
  });

  describe("FilterBar", () => {
    beforeEach(() => {
      search.mockClear();
      search.mockResolvedValue([]);
    });

    test("it should show selected filter", async () => {
      renderWithRoute(<SearchPage />, routes.search({ type: AT_ONTOLOGY }));

      const filter = await screen.findByText("Ontologia");

      expect(filter).toBeInTheDocument();
    });

    test("it should not show any type filter", async () => {
      renderWithRoute(<SearchPage />, routes.search());

      await waitFor(() =>
        expect(screen.queryByText("Ontologia")).not.toBeInTheDocument()
      );
    });
  });

  describe("With vocab results", () => {
    const someVocabs = [
      {
        type: AT_VOCABULARY,
        iri: "http://www.disney.com/characters/",
        title: "Disney characters",
      },
      {
        type: AT_VOCABULARY,
        iri: "http://www.atptour.com/court-types",
        title: "Tennis court types",
      },
    ];

    let resolve;
    const simulateVocabDataLoaded = () => {
      resolve({ data: someVocabs });
    };

    beforeEach(() => {
      search.mockClear();
      search.mockReturnValue(
        new Promise((s) => {
          resolve = s;
        })
      );
    });

    test("it show propagate items to result component", async () => {
      renderWithRoute(<SearchPage />, routes.search({ type: AT_VOCABULARY }));
      simulateVocabDataLoaded();

      await waitFor(() => expect(SearchResults).toHaveBeenCalled());
      expect(SearchResults).toHaveBeenCalledWith({ items: someVocabs }, {});
    });
  });
});
