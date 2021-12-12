import MetadataRow from "./MetadataRow";
import { render, screen } from "@testing-library/react";

describe("<MetadataRow/>", () => {
  test("renders", () => {
    render(<MetadataRow value={"MetadataValue"} name={"MetadataName"} />);

    expect(screen.getByText("MetadataName")).toBeInTheDocument();
    expect(screen.getByText("MetadataValue")).toBeInTheDocument();
  });
});
