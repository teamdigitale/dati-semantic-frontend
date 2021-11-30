import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FilterPanel from "./FilterPanel";
import { AT_ONTOLOGY } from "../../../services/dataConstants";
import { waitFor } from "@testing-library/dom";
import PatternFilter from "../PatternFilter/PatternFilter";

jest.mock("../PatternFilter/PatternFilter", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const filterUpdate = jest.fn();

describe("<FilterPanel />", () => {
  beforeEach(() => {
    PatternFilter.mockReturnValue(<div>Pattern filter</div>);
    PatternFilter.mockClear();
    filterUpdate.mockClear();
  });

  test("it should show selected filter", async () => {
    const filter = { types: [AT_ONTOLOGY] };
    render(<FilterPanel filter={filter} onFilterUpdate={filterUpdate} />);

    const typeFilterSelection = await screen.findByText("Ontologia");

    expect(typeFilterSelection).toBeInTheDocument();
  });

  test("it should not show any type filter", async () => {
    const emptyFilter = {};
    render(<FilterPanel filter={emptyFilter} onFilterUpdate={filterUpdate} />);

    await waitFor(() =>
      expect(screen.queryByText("Ontologia")).not.toBeInTheDocument()
    );
  });

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
