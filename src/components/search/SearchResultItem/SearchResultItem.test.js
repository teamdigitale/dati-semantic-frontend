import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchResultItem from "./SearchResultItem";
import {
  AT_ONTOLOGY,
  AT_SCHEMA,
  AT_VOCABULARY,
  getAssetLabel,
} from "../../../services/dataConstants";
import { renderWithRoute } from "../../../services/testUtils";
import { getDetailsPageUrl } from "../../../services/vocabService";

const vocabItem = {
  assetIri: "http://www.disney.com/characters",
  type: AT_VOCABULARY,
  title: "Disney characters",
  description: "Fully comprehensive list of Disney characters",
  themes: ["http://publications.europa.eu/resource/authority/data-theme/EDUC"],
  modifiedOn: "2020-04-01",
  versionInfo: "1.0",
  rightsHolder: {
    iri: "http://publications.europa.eu/resource/authority/corporate-body/EUROSTAT",
    summary: "Eurostat",
  },
};

describe("<SearchResultItem />", () => {
  test("it should mount with proper item", () => {
    renderWithRoute(<SearchResultItem item={vocabItem} />);

    expect(screen.getByTestId("SearchResultItem")).toBeInTheDocument();
  });

  test("it should display the item's type", () => {
    renderWithRoute(<SearchResultItem item={vocabItem} />);

    let typeLabel = screen.getByText(getAssetLabel(AT_VOCABULARY));

    expect(typeLabel).toBeInTheDocument();
  });

  test.each(["assetIri", "title", "description"])(
    "it should display %s from the item",
    (key) => {
      renderWithRoute(<SearchResultItem item={vocabItem} />);

      expect(screen.getByText(vocabItem[key])).toBeInTheDocument();
    }
  );

  test("it should display a link with assetIri", () => {
    renderWithRoute(<SearchResultItem item={vocabItem} />);

    let link = screen.getByText(vocabItem.assetIri);

    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute(
      "href",
      getDetailsPageUrl(vocabItem.assetIri)
    );
  });
  test("it should display rights holder summary", () => {
    renderWithRoute(<SearchResultItem item={vocabItem} />);

    let summary = screen.getByText(vocabItem.rightsHolder.summary);

    expect(summary).toBeInTheDocument();
  });

  test("it should display modifiedOn for ControlledVocabulary", () => {
    renderWithRoute(<SearchResultItem item={vocabItem} />);

    let modifiedOnForVocab = screen.getByText("01/04/2020");
    expect(modifiedOnForVocab).toBeInTheDocument();

    expect(screen.queryByText(vocabItem.versionInfo)).not.toBeInTheDocument();
  });

  test("it should display modifiedOn for Ontology", () => {
    vocabItem.type = AT_ONTOLOGY;
    renderWithRoute(<SearchResultItem item={vocabItem} />);

    let modifiedOnForOntology = screen.getByText("01/04/2020");
    expect(modifiedOnForOntology).toBeInTheDocument();

    expect(screen.queryByText(vocabItem.versionInfo)).not.toBeInTheDocument();
  });

  test("it should display versionInfo for Schema", () => {
    vocabItem.type = AT_SCHEMA;
    renderWithRoute(<SearchResultItem item={vocabItem} />);

    expect(screen.queryByText(vocabItem.modifiedOn)).not.toBeInTheDocument();

    let versionForSchema = screen.getByText(vocabItem.versionInfo);
    expect(versionForSchema).toBeInTheDocument();
  });

  test("it should display theme description", () => {
    renderWithRoute(<SearchResultItem item={vocabItem} />);

    const category = screen.getByText("Istruzione, cultura e sport");

    expect(category).toBeInTheDocument();
  });

  test("it should display multiple theme descriptions", () => {
    const itemsWithMultipleThemes = {
      ...vocabItem,
      themes: [
        "http://publications.europa.eu/resource/authority/data-theme/EDUC",
        "http://publications.europa.eu/resource/authority/data-theme/TRAN",
      ],
    };

    renderWithRoute(<SearchResultItem item={itemsWithMultipleThemes} />);

    const category1 = screen.getByText("Istruzione, cultura e sport");
    const category2 = screen.getByText("Trasporti");

    expect(category1).toBeInTheDocument();
    expect(category2).toBeInTheDocument();
  });
});
