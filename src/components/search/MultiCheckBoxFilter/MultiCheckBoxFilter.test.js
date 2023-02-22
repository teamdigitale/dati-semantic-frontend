import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import userEvent from "@testing-library/user-event";
import MultiCheckBoxFilter from "./MultiCheckBoxFilter";

const selectionUpdate = jest.fn();

function findCheckBoxFromLabelText(labelText) {
  const label = screen.getByText(labelText);
  const formCheck = label.closest("div.form-check");
  return formCheck.querySelector("input");
}

const allValues = [
  { key: "Roger", label: "Roger Federer" },
  { key: "Rafa", label: "Rafael Nadal" },
  { key: "Nole", label: "Novak Djokovic" },
  { key: "Andy", label: "Any Murray" },
];

const allKeys = allValues.map((kl) => kl.key);

describe("<MultiCheckBoxFilter />", () => {
  beforeEach(() => {
    selectionUpdate.mockClear();
  });
  test("it should display the listbox", () => {
    render(
      <MultiCheckBoxFilter
        title="the list"
        keysAndLabels={allValues}
        selection={["Rafa"]}
        onSelectionUpdate={selectionUpdate}
      />
    );

    expect(screen.getByTestId("listbox")).toBeInTheDocument();
  });

  test("it should display options (including 'All')", () => {
    render(
      <MultiCheckBoxFilter
        title="the list"
        keysAndLabels={allValues}
        selection={["Roger"]}
        onSelectionUpdate={selectionUpdate}
      />
    );

    const options = screen.getAllByTestId("option");
    expect(options.length).toEqual(1 + allValues.length);
  });

  describe("toggling a single option", () => {
    test("should propagate changes to type when toggling an unchecked option", () => {
      render(
        <MultiCheckBoxFilter
          title="the list"
          keysAndLabels={allValues}
          selection={["Roger"]}
          onSelectionUpdate={selectionUpdate}
        />
      );

      const checkBox = findCheckBoxFromLabelText("Novak Djokovic");
      expect(checkBox.checked).toBeFalsy();

      userEvent.click(checkBox);

      expect(selectionUpdate).toHaveBeenCalledWith(["Roger", "Nole"]);
    });

    test("should propagate changes to type when toggling a checked option", () => {
      render(
        <MultiCheckBoxFilter
          title="the list"
          keysAndLabels={allValues}
          selection={["Roger", "Andy"]}
          onSelectionUpdate={selectionUpdate}
        />
      );

      const checkBox = findCheckBoxFromLabelText("Roger Federer");
      expect(checkBox.checked).toBeTruthy();

      userEvent.click(checkBox);

      expect(selectionUpdate).toHaveBeenCalledWith(["Andy"]);
    });
  });

  describe("toggling 'All'", () => {
    test("should propagate from some to all", () => {
      render(
        <MultiCheckBoxFilter
          title="the list"
          keysAndLabels={allValues}
          selection={["Roger", "Andy"]}
          onSelectionUpdate={selectionUpdate}
        />
      );

      const checkBox = findCheckBoxFromLabelText("Tutte");

      userEvent.click(checkBox);

      expect(selectionUpdate).toHaveBeenCalledWith(allKeys);
    });

    test("should propagate from none to all", () => {
      render(
        <MultiCheckBoxFilter
          title="the list"
          keysAndLabels={allValues}
          selection={[]}
          onSelectionUpdate={selectionUpdate}
        />
      );

      const checkBox = findCheckBoxFromLabelText("Tutte");

      userEvent.click(checkBox);

      expect(selectionUpdate).toHaveBeenCalledWith(allKeys);
    });

    test("should propagate from all to none", () => {
      render(
        <MultiCheckBoxFilter
          title="the list"
          keysAndLabels={allValues}
          selection={allKeys}
          onSelectionUpdate={selectionUpdate}
        />
      );

      const checkBox = findCheckBoxFromLabelText("Tutte");

      userEvent.click(checkBox);

      expect(selectionUpdate).toHaveBeenCalledWith([]);
    });
  });
});
