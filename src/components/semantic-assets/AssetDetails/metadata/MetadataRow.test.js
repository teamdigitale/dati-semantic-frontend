import MetadataRow from "./MetadataRow";
import { render, screen } from "@testing-library/react";

describe("<MetadataRow/>", () => {
  test("renders", () => {
    render(
      <MetadataRow
        value={"MetadataValue"}
        name={"MetadataName"}
        externalLink={<div data-testid={"someLink"}>test</div>}
      />
    );

    expect(screen.getByText("MetadataName")).toBeInTheDocument();
    expect(screen.getByText("MetadataValue")).toBeInTheDocument();
    expect(screen.getByTestId("someLink")).toBeInTheDocument();
  });

  test("renders without externalLink", () => {
    render(<MetadataRow value={"MetadataValue"} name={"MetadataName"} />);

    expect(screen.getByText("MetadataName")).toBeInTheDocument();
    expect(screen.getByText("MetadataValue")).toBeInTheDocument();
    expect(screen.queryByTestId("someLink")).not.toBeInTheDocument();
  });
});
