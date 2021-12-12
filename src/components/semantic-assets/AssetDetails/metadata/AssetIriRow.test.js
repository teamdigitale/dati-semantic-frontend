import { fireEvent, render, screen } from "@testing-library/react";
import AssetIriRow from "./AssetIriRow";

describe("<AssetIri/>", () => {
  test("should render", () => {
    global.window.open = jest.fn();
    const openSpy = jest.spyOn(window, "open");

    render(<AssetIriRow assetIri={"some-iri"} />);

    expect(screen.getByText("URI")).toBeInTheDocument();
    expect(screen.getByText("some-iri")).toBeInTheDocument();
    const externalLinkIcon = screen.getByTestId("external-link-icon");
    expect(externalLinkIcon).toBeInTheDocument();

    fireEvent.click(externalLinkIcon);
    expect(openSpy).toHaveBeenCalledWith("some-iri");
    openSpy.mockClear();
  });
});
