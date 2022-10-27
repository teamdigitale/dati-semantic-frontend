import { screen } from "@testing-library/react";
import { renderWithRoute } from "../../../../services/testUtils";
import ProjectIndex from "./ProjectIndex";
describe("<ProjectIndex />", () => {
  test("it should mount", async () => {
    renderWithRoute(<ProjectIndex />);
    const component = await screen.findByTestId("ProjectIndex");
    expect(component).toBeInTheDocument();
  });
});
