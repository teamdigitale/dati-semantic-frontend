import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ExploreGrid from "./ExploreGrid";

const click2 = jest.fn();

const data = [
  { key: "1", icon: <div>icon 1</div>, label: "Description of 1" },
  {
    key: "2",
    icon: <div>icon 2</div>,
    label: "Description of 2",
    onClick: click2,
  },
];

describe("<ExploreGrid />", () => {
  beforeEach(() => {
    click2.mockClear();
  });

  test("it should mount", () => {
    render(<ExploreGrid cells={data} />);

    const exploreGrid = screen.getByTestId("ExploreGrid");

    expect(exploreGrid).toBeInTheDocument();
  });

  test("it should fire click", () => {
    render(<ExploreGrid cells={data} />);

    const cells = screen.getAllByRole("cell");

    expect(cells.length).toBe(2);
    const cell2 = cells[1];
    expect(cell2).toBeInTheDocument();
    expect(cell2).toContainHTML("Description of 2");

    fireEvent.click(cell2);

    expect(click2).toHaveBeenCalled();
  });
});
