/* eslint-disable prettier/prettier */
import { renderWithRoute } from "../../../services/testUtils";
import { screen } from "@testing-library/react";
import ContactPage from "./ContactPage";

describe("<ContactPage />", () => {
  test("it should mount", async () => {
    renderWithRoute(<ContactPage />);
    const pageComponent = await screen.findByTestId("ContactPage");
    const bodyComponent = await screen.findByTestId("ContactBody");
    expect(pageComponent).toBeInTheDocument();
    expect(bodyComponent).toBeInTheDocument();
  });
});
