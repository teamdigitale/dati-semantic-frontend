import { renderWithRoute } from "../../../../services/testUtils";
import { screen } from "@testing-library/react";
import ProjectBody from "./ProjectBody";

describe("<ProjectBody />", () => {
  test("it should mount", async () => {
    renderWithRoute(<ProjectBody />);
    const component = await screen.findByTestId("ProjectBody");
    expect(component).toBeInTheDocument();
  });
});
