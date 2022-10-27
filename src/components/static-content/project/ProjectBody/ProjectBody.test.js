import { renderWithRoute } from "../../../../services/testUtils";
import { screen } from "@testing-library/react";
import ProjectBody from "./ProjectBody";
import ProjectIndex from "../ProjectIndex/ProjectIndex";

describe("<ProjectBody />", () => {
  test("it should mount", async () => {
    renderWithRoute(<ProjectBody />);
    const component = await screen.findByTestId("ProjectBody");
    expect(component).toBeInTheDocument();
  });
  test("it should render PrjectIndex", async () => {
    renderWithRoute(<ProjectIndex />);
    expect(ProjectIndex).toBeDefined();
  });
});
