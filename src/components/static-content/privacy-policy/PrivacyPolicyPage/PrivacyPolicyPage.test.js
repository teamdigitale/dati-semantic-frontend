import { renderWithRoute } from "../../../../services/testUtils";
import { screen } from "@testing-library/react";
import PrivacyPolicyPage from "./PrivacyPolicyPage";

describe("<PrivacyPolicyPage />", () => {
  test("it should mount", async () => {
    renderWithRoute(<PrivacyPolicyPage />);
    const pageComponent = await screen.findByTestId("PrivacyPolicyPage");
    const bodyComponent = await screen.findByTestId("PrivacyPolicyBody");
    expect(pageComponent).toBeInTheDocument();
    expect(bodyComponent).toBeInTheDocument();
  });
});
