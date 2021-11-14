import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import React from "react";

export function renderWithRoute(ui, initialRoute = "") {
  render(<MemoryRouter initialEntries={[initialRoute]}>{ui}</MemoryRouter>);
}
