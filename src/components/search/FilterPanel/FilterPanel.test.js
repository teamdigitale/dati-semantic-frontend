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
    render(<FilterPanel types={[AT_ONTOLOGY]} onFilterUpdate={filterUpdate} />);

    const filter = await screen.findByText("Ontologia");

    expect(filter).toBeInTheDocument();
  });

  test("it should not show any type filter", async () => {
    render(<FilterPanel onFilterUpdate={filterUpdate} />);

    await waitFor(() =>
      expect(screen.queryByText("Ontologia")).not.toBeInTheDocument()
    );
  });

  test("it should propagate pattern value to pattern filter", () => {
    render(
      <FilterPanel
        types={[AT_ONTOLOGY]}
        pattern="abc"
        onFilterUpdate={filterUpdate}
      />
    );

    expect(PatternFilter).toHaveBeenCalledWith(
      expect.objectContaining({ pattern: "abc" }),
      {}
    );
  });

  test("it should bubble up pattern changes to callback", () => {
    render(
      <FilterPanel
        types={[AT_ONTOLOGY]}
        pattern="abc"
        onFilterUpdate={filterUpdate}
      />
    );

    const patternProps = PatternFilter.mock.calls[0][0];
    let patternUpdate = patternProps.onPatternUpdate;
    expect(patternUpdate).toBeTruthy();
    patternUpdate("def");

    expect(filterUpdate).toHaveBeenCalledWith(
      expect.objectContaining({ pattern: "def" })
    );
  });
});
