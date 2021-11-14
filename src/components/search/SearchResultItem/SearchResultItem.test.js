import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchResultItem from "./SearchResultItem";
import { AT_VOCABULARY } from "../../../services/dataConstants";

const vocabItem = {
  uri: "http://www.disney.com/characters",
  type: AT_VOCABULARY,
  title: "Disney characters",
  desc: "Fully comprehensive list of Disney characters",
};

describe("<SearchResultItem />", () => {
  test("it should mount with proper item", () => {
    render(<SearchResultItem item={vocabItem} />);

    expect(screen.getByTestId("SearchResultItem")).toBeInTheDocument();
  });

  test.each(["uri", "title", "desc"])(
    "it should display %s from the item",
    (key) => {
      render(<SearchResultItem item={vocabItem} />);

      expect(screen.getByText(vocabItem[key])).toBeInTheDocument();
    }
  );
});
