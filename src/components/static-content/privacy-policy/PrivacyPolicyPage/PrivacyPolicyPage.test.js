import { renderWithRoute } from "../../../../services/testUtils";
import { screen } from "@testing-library/react";
import PrivacyPolicyPage from "./PrivacyPolicyPage";
import IntroSection from "../../../common/IntroSection/IntroSection";

jest.mock("../../../common/IntroSection/IntroSection", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<PrivacyPolicyPage />", () => {
  beforeEach(() => {
    IntroSection.mockClear();
    IntroSection.mockReturnValue(<div>Faq header</div>);
  });

  test("it should mount", async () => {
    renderWithRoute(<PrivacyPolicyPage />);
    const pageComponent = await screen.findByTestId("PrivacyPolicyPage");
    const bodyComponent = await screen.findByTestId("PrivacyPolicyBody");
    expect(pageComponent).toBeInTheDocument();
    expect(bodyComponent).toBeInTheDocument();
  });

  test("it should render footer for privacy policy page", async () => {
    renderWithRoute(<PrivacyPolicyPage />);
    expect(IntroSection).toHaveBeenCalled();
  });
});
