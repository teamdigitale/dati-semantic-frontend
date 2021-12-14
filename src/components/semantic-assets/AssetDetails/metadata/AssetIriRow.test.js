import { render, screen } from "@testing-library/react";
import AssetIriRow from "./AssetIriRow";

describe("<AssetIri/>", () => {
  test("should render", () => {
    render(<AssetIriRow assetIri={"some-iri"} />);

    expect(screen.getByText("URI")).toBeInTheDocument();
    expect(screen.getByText("some-iri")).toBeInTheDocument();
    const externalLinkIcon = screen.getByTestId("external-link-icon");
    expect(externalLinkIcon).toBeInTheDocument();
    expect(externalLinkIcon.closest("a")).toHaveAttribute("href", "some-iri");
    expect(externalLinkIcon.closest("a")).toHaveAttribute("target", "_blank");
  });
});
