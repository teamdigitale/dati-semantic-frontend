import { renderWithRoute } from "../../../../services/testUtils";
import { screen } from "@testing-library/react";
import ProjectPage from "./ProjectPage";
import IntroSection from "../../../common/IntroSection/IntroSection";

jest.mock("../../../common/IntroSection/IntroSection", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<ProjectPage />", () => {
  beforeEach(() => {
    IntroSection.mockClear();
    IntroSection.mockReturnValue(<div>Faq header</div>);
  });

  test("it should mount", async () => {
    renderWithRoute(<ProjectPage />);
    const component = await screen.findByTestId("ProjectPage");
    expect(component).toBeInTheDocument();
  });

  test("it should render header for project page", async () => {
    renderWithRoute(<ProjectPage />);
    expect(IntroSection).toHaveBeenCalled();
  });
});
