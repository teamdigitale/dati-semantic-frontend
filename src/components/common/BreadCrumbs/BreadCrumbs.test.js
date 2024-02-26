import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/dom";

import BreadCrumbs from "./BreadCrumbs";
import BREADCRUMBS from "../../../services/BreadCrumbsConst";
import { renderWithRoute } from "../../../services/testUtils";

describe("<BreadCrumbs />", () => {
  test("it should mount", async () => {
    renderWithRoute(<BreadCrumbs arrayBread={BREADCRUMBS.EXPLOREPAGE} />);

    const link = screen.getByText("Home");
    expect(link).toBeInTheDocument();
    userEvent.click(link);
  });
  test("it should navigate", async () => {
    renderWithRoute(<BreadCrumbs arrayBread={BREADCRUMBS.EXPLOREPAGE} />);
    global.window = { location: { pathname: null } };
    const link = screen.getByText("Home");
    userEvent.click(link);
    waitFor(() =>
      expect(global.window.location.pathname).toEqual("www.repubblica.it")
    );
  });
});
