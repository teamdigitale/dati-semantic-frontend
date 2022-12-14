import { renderWithRoute } from "../../../services/testUtils";
import { screen } from "@testing-library/react";
import LeaglNotices from "./legalNotices";

describe("<LeaglNotices />", () => {
  test("it should mount", async () => {
    renderWithRoute(<LeaglNotices />);
    const pageComponent = await screen.findByTestId("legalNotices");
    const bodyComponent = await screen.findByTestId("legalNoticesBody");
    expect(pageComponent).toBeInTheDocument();
    expect(bodyComponent).toBeInTheDocument();
  });
});
