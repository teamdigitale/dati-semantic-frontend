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

describe("<AssetTypeFilter />", () => {
  beforeEach(() => {
    typeUpdate.mockClear();
  });
  test("it should display the listbox", () => {
    render(
      <AssetTypeFilter types={[AT_ONTOLOGY]} onTypesUpdate={typeUpdate} />
    );

    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  test("it should display options", () => {
    render(
      <AssetTypeFilter types={[AT_ONTOLOGY]} onTypesUpdate={typeUpdate} />
    );

    const options = screen.getAllByRole("option");
    expect(options.length).toEqual(SUPPORTED_ASSET_TYPES.length);
  });

  test("should propagate changes to type when toggling an unchecked option", () => {
    render(
      <AssetTypeFilter types={[AT_ONTOLOGY]} onTypesUpdate={typeUpdate} />
    );

    const label = screen.getByText(getAssetLabel(AT_VOCABULARY));
    const formCheck = label.closest("div.form-check");
    const checkBox = formCheck.querySelector("input");
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

    const label = screen.getByText(getAssetLabel(AT_ONTOLOGY));
    const formCheck = label.closest("div.form-check");
    const checkBox = formCheck.querySelector("input");
    expect(checkBox.checked).toBeTruthy();

    userEvent.click(checkBox);

    expect(typeUpdate).toHaveBeenCalledWith([AT_SCHEMA]);
  });
});
