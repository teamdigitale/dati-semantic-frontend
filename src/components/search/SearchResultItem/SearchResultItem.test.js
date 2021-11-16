import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchResultItem from "./SearchResultItem";
import { AT_VOCABULARY } from "../../../services/dataConstants";
import { renderWithRoute } from "../../../services/testUtils";
import { getVocabularyUrl } from "../../../services/vocabService";

const vocabItem = {
  uri: "http://www.disney.com/characters",
  type: AT_VOCABULARY,
  title: "Disney characters",
  desc: "Fully comprehensive list of Disney characters",
  themes: ["http://publications.europa.eu/resource/authority/data-theme/EDUC"],
};

describe("<SearchResultItem />", () => {
  test("it should mount with proper item", () => {
    renderWithRoute(<SearchResultItem item={vocabItem} />);

    expect(screen.getByTestId("SearchResultItem")).toBeInTheDocument();
  });

  test.each(["uri", "title", "desc"])(
    "it should display %s from the item",
    (key) => {
      renderWithRoute(<SearchResultItem item={vocabItem} />);

      expect(screen.getByText(vocabItem[key])).toBeInTheDocument();
    }
  );

  test("it should display a link with uri", () => {
    renderWithRoute(<SearchResultItem item={vocabItem} />);

    let link = screen.getByText(vocabItem.uri);

    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute(
      "href",
      getVocabularyUrl(vocabItem.uri)
    );
  });
});
