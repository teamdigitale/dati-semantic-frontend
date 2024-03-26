import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AssetTypeFilter from "./AssetTypeFilter";
import {
  AT_ONTOLOGY,
  SUPPORTED_ASSET_TYPES
} from "../../../services/dataConstants";
import userEvent from "@testing-library/user-event";

const typeUpdate = jest.fn();

describe("<AssetTypeFilter />", () => {
  beforeEach(() => {
    typeUpdate.mockClear();
  });
  test("it should display the listbox", () => {
    render(
      <AssetTypeFilter types={[AT_ONTOLOGY]} onTypesUpdate={typeUpdate} />
    );

    userEvent.click(screen.getByTestId("MultiSelectFilter"));

    expect(screen.getByTestId("dropdownMenu")).toBeInTheDocument();
  });

  test("it should display options", () => {
    render(<AssetTypeFilter types={[]} onTypesUpdate={typeUpdate} />);
    userEvent.click(screen.getByTestId("MultiSelectFilter"));
    const options = screen.getAllByTestId("option");
    expect(options.length).toEqual(SUPPORTED_ASSET_TYPES.length);
  });
});
