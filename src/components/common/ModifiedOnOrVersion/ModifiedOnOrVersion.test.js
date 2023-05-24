import ModifiedOnOrVersion from "./ModifiedOnOrVersion";
import { render, screen } from "@testing-library/react";
import { AT_SCHEMA } from "../../../services/dataConstants";

describe("<ModifiedOnOrVersion />", () => {
  test("renders Schema with version", () => {
    render(
      <ModifiedOnOrVersion
        type={AT_SCHEMA}
        size={"small"}
        versionInfo={"1.1.1"}
      />
    );

    expect(screen.getByText("Versione")).toBeInTheDocument();
    expect(screen.getByText("1.1.1")).toBeInTheDocument();
  });

  test("renders Schema without version", () => {
    render(<ModifiedOnOrVersion type={AT_SCHEMA} size={"small"} />);

    expect(screen.getByText("Versione")).toBeInTheDocument();
    expect(screen.getByText("n/a")).toBeInTheDocument();
  });
});
