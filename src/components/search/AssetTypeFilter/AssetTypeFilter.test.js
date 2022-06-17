import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AssetTypeFilter from "./AssetTypeFilter";
import {
  AT_ONTOLOGY,
  AT_SCHEMA,
  AT_VOCABULARY,
  getAssetLabel,
  SUPPORTED_ASSET_TYPES,
} from "../../../services/dataConstants";
import userEvent from "@testing-library/user-event";

const typeUpdate = jest.fn();

function findCheckBoxFromLabelText(labelText) {
  const label = screen.getByText(labelText);
  const formCheck = label.closest("div.form-check");
  return formCheck.querySelector("input");
}

describe("<AssetTypeFilter />", () => {
  beforeEach(() => {
    typeUpdate.mockClear();
  });
  test("it should display the listbox", () => {
    render(
      <AssetTypeFilter types={[AT_ONTOLOGY]} onTypesUpdate={typeUpdate} />
    );

    expect(screen.getByTestId("listbox")).toBeInTheDocument();
  });

  test("it should display options (including 'All')", () => {
    render(
      <AssetTypeFilter types={[AT_ONTOLOGY]} onTypesUpdate={typeUpdate} />
    );

    const options = screen.getAllByTestId("option");
    expect(options.length).toEqual(1 + SUPPORTED_ASSET_TYPES.length);
  });

  describe("toggling a single option", () => {
    test("should propagate changes to type when toggling an unchecked option", () => {
      render(
        <AssetTypeFilter types={[AT_ONTOLOGY]} onTypesUpdate={typeUpdate} />
      );

      const checkBox = findCheckBoxFromLabelText(getAssetLabel(AT_VOCABULARY));
      expect(checkBox.checked).toBeFalsy();

      userEvent.click(checkBox);

      expect(typeUpdate).toHaveBeenCalledWith([AT_ONTOLOGY, AT_VOCABULARY]);
    });

    test("should propagate changes to type when toggling a checked option", () => {
      render(
        <AssetTypeFilter
          types={[AT_ONTOLOGY, AT_SCHEMA]}
          onTypesUpdate={typeUpdate}
        />
      );

      const checkBox = findCheckBoxFromLabelText(getAssetLabel(AT_ONTOLOGY));
      expect(checkBox.checked).toBeTruthy();

      userEvent.click(checkBox);

      expect(typeUpdate).toHaveBeenCalledWith([AT_SCHEMA]);
    });
  });

  describe("toggling 'All'", () => {
    test("should propagate from some to all", () => {
      render(
        <AssetTypeFilter
          types={[AT_ONTOLOGY, AT_SCHEMA]}
          onTypesUpdate={typeUpdate}
        />
      );

      const checkBox = findCheckBoxFromLabelText("Tutte");

      userEvent.click(checkBox);

      expect(typeUpdate).toHaveBeenCalledWith(SUPPORTED_ASSET_TYPES);
    });

    test("should propagate from none to all", () => {
      render(<AssetTypeFilter types={[]} onTypesUpdate={typeUpdate} />);

      const checkBox = findCheckBoxFromLabelText("Tutte");

      userEvent.click(checkBox);

      expect(typeUpdate).toHaveBeenCalledWith(SUPPORTED_ASSET_TYPES);
    });

    test("should propagate from all to none", () => {
      render(
        <AssetTypeFilter
          types={SUPPORTED_ASSET_TYPES}
          onTypesUpdate={typeUpdate}
        />
      );

      const checkBox = findCheckBoxFromLabelText("Tutte");

      userEvent.click(checkBox);

      expect(typeUpdate).toHaveBeenCalledWith([]);
    });
  });
});
