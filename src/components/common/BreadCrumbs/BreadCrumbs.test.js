import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BREADCRUMBS from "../../../services/BreadCrumbsConst";
import BreadCrumbs from "./BreadCrumbs";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/dom";
describe("<BreadCrumbs />", () => {
  test("it should mount", async () => {
    render(<BreadCrumbs arrayBread={BREADCRUMBS.EXPLOREPAGE} />);

    const link = screen.getByText("Home");
    expect(link).toBeInTheDocument();
    userEvent.click(link);
  });
  test("it should navigate", async () => {
    render(<BreadCrumbs arrayBread={BREADCRUMBS.EXPLOREPAGE} />);
    global.window = { location: { pathname: null } };
    const link = screen.getByText("Home");
    userEvent.click(link);
    waitFor(() =>
      expect(global.window.location.pathname).toEqual("www.repubblica.it")
    );
  });
});
