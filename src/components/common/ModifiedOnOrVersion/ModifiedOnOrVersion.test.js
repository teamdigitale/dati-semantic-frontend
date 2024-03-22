/* eslint-disable jest/no-commented-out-tests */

import ModifiedOnOrVersion from "./ModifiedOnOrVersion";
import { render, screen } from "@testing-library/react";
import { AT_SCHEMA } from "../../../services/dataConstants";

describe("<ModifiedOnOrVersion />", () => {
  // The tests were commented because the "version" was removed in the extraction

  test("renders Schema with no version", () => {
    render(<ModifiedOnOrVersion type={AT_SCHEMA} size={"small"} />);

    expect(screen.queryByText("Versione")).not.toBeInTheDocument();
    expect(screen.queryByText("1.1.1")).not.toBeInTheDocument();
  });

  // test("renders Schema with version", () => {
  //   render(
  //     <ModifiedOnOrVersion
  //       type={AT_SCHEMA}
  //       size={"small"}
  //       versionInfo={"1.1.1"}
  //     />
  //   );
  //   expect(screen.getByText("Versione")).toBeInTheDocument();
  //   expect(screen.getByText("1.1.1")).toBeInTheDocument();
  // });
  // test("renders Schema without version", () => {
  //   render(<ModifiedOnOrVersion type={AT_SCHEMA} size={"small"} />);
  //   expect(screen.getByText("Versione")).toBeInTheDocument();
  //   expect(screen.getByText("n/a")).toBeInTheDocument();
  // });
});
