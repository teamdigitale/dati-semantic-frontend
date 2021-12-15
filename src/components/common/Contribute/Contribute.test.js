import { renderWithRoute } from "../../../services/testUtils";
import { screen } from "@testing-library/react";
import Contribute from "./Contribute";

describe("<Contribute />", () => {
  test("it should mount", async () => {
    renderWithRoute(<Contribute />);
    const component = await screen.findByTestId("Contribute");
    expect(component).toBeInTheDocument();
  });

  test("it should show button to contribute", async () => {
    renderWithRoute(<Contribute />);
    const component = await screen.findByText("Maggiori informazioni");
    expect(component).toBeInTheDocument();
  });
});
