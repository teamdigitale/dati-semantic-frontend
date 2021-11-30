import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FilterPanel from "./FilterPanel";
import { AT_ONTOLOGY, AT_SCHEMA } from "../../../services/dataConstants";
import PatternFilter from "../PatternFilter/PatternFilter";
import AssetTypeFilter from "../AssetTypeFilter/AssetTypeFilter";
import { describe } from "jest-circus";

jest.mock("../PatternFilter/PatternFilter", () => ({
  __esModule: true,
  default: jest.fn(),
}));
jest.mock("../AssetTypeFilter/AssetTypeFilter", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const filterUpdate = jest.fn();

describe("<FilterPanel />", () => {
  beforeEach(() => {
    PatternFilter.mockReturnValue(<div>Pattern filter</div>);
    PatternFilter.mockClear();
    AssetTypeFilter.mockReturnValue(<div>Type filter</div>);
    AssetTypeFilter.mockClear();
    filterUpdate.mockClear();
  });

  test("it should show selected filter", async () => {
    const filter = { types: [AT_ONTOLOGY] };
    render(<FilterPanel filter={filter} onFilterUpdate={filterUpdate} />);

    expect(PatternFilter).toHaveBeenCalledWith(
      expect.objectContaining({ pattern: "" }),
      {}
    );
    expect(AssetTypeFilter).toHaveBeenCalledWith(
      expect.objectContaining({ types: [AT_ONTOLOGY] }),
      {}
    );
  });

  describe("with the pattern filter", () => {
    test("it should propagate pattern value to pattern filter", () => {
      const filter = {
        types: [AT_ONTOLOGY],
        pattern: "abc",
      };
      render(<FilterPanel filter={filter} onFilterUpdate={filterUpdate} />);

      expect(PatternFilter).toHaveBeenCalledWith(
        expect.objectContaining({ pattern: "abc" }),
        {}
      );
    });

    test("it should bubble up pattern changes to callback", () => {
      const originalFilter = {
        types: [AT_ONTOLOGY],
        pattern: "abc",
      };
      render(
        <FilterPanel filter={originalFilter} onFilterUpdate={filterUpdate} />
      );

      const patternProps = PatternFilter.mock.calls[0][0];
      let patternUpdate = patternProps.onPatternUpdate;
      expect(patternUpdate).toBeTruthy();
      patternUpdate("def");

      expect(filterUpdate).toHaveBeenCalledWith({
        ...originalFilter,
        pattern: "def",
      });
    });
  });

  describe("with the types filter", () => {
    test("it should propagate pattern value to pattern filter", () => {
      const filter = {
        types: [AT_ONTOLOGY],
        pattern: "abc",
      };
      render(<FilterPanel filter={filter} onFilterUpdate={filterUpdate} />);

      expect(AssetTypeFilter).toHaveBeenCalledWith(
        expect.objectContaining({ types: [AT_ONTOLOGY] }),
        {}
      );
    });

    test("it should bubble up types changes to callback", () => {
      const originalFilter = {
        types: [AT_ONTOLOGY],
        pattern: "abc",
      };
      render(
        <FilterPanel filter={originalFilter} onFilterUpdate={filterUpdate} />
      );

      const typeProps = AssetTypeFilter.mock.calls[0][0];
      let typesUpdate = typeProps.onTypesUpdate;
      expect(typesUpdate).toBeTruthy();
      typesUpdate([AT_ONTOLOGY, AT_SCHEMA]);

      expect(filterUpdate).toHaveBeenCalledWith({
        ...originalFilter,
        types: [AT_ONTOLOGY, AT_SCHEMA],
      });
    });
  });
});
