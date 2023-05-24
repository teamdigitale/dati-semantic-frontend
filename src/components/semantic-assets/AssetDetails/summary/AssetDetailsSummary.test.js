/* eslint-disable prettier/prettier */
import AssetDetailsSummary from "./AssetDetailsSummary";
import { render, screen } from "@testing-library/react";
import {
  AT_VOCABULARY,
  getAssetLabel,
} from "../../../../services/dataConstants";

describe("<AssetDetailsSummary/>", () => {
  test("should render summary", () => {
    render(
      <AssetDetailsSummary
        type={AT_VOCABULARY}
        description={"Some description"}
        title={"Some title"}
        themes={[
          "http://publications.europa.eu/resource/authority/data-theme/ECON",
          "http://publications.europa.eu/resource/authority/data-theme/EDUC",
        ]}
        modifiedOn="2020-12-01"
      />
    );

    expect(screen.getByTestId("asset-details-summary")).toBeInTheDocument();

    expect(screen.getByText("Istruzione, cultura e sport")).toBeInTheDocument();
    expect(screen.getByText("Economia e finanze")).toBeInTheDocument();

    expect(screen.getByText(getAssetLabel(AT_VOCABULARY))).toBeInTheDocument();

    expect(screen.getByText("Some title")).toBeInTheDocument();

    expect(screen.getByText("Some description")).toBeInTheDocument();
  });

  // test("should render n/a when modifiedOn is missing", () => {
  //   render(
  //     <AssetDetailsSummary
  //       type={AT_VOCABULARY}
  //       description={"Some description"}
  //       title={"Some title"}
  //       themes={[
  //         "http://publications.europa.eu/resource/authority/data-theme/ECON",
  //         "http://publications.europa.eu/resource/authority/data-theme/EDUC",
  //       ]}
  //     />
  //   );
  //   const modifiedOnElement = screen.queryByText("n/a", {
  //     selector: ".modifiedOnLarge",
  //   });

  //   expect(modifiedOnElement).toBeInTheDocument();
  // });
});
