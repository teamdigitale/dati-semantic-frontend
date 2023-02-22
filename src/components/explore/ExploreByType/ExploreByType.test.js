import React from "react";
import "@testing-library/jest-dom/extend-expect";
import ExploreByType from "./ExploreByType";
import { renderWithRoute } from "../../../services/testUtils";
import {
  AT_ONTOLOGY,
  AT_SCHEMA,
  AT_VOCABULARY,
  getAssetPluralLabel,
} from "../../../services/dataConstants";
import { screen } from "@testing-library/react";

describe("<ExploreByType />", () => {
  test.each([AT_ONTOLOGY, AT_SCHEMA, AT_VOCABULARY])(
    "it should render the %s type in a grid",
    (type) => {
      renderWithRoute(<ExploreByType />);
      expect(
        screen.getByText("Esplora per strumenti semantici")
      ).toBeInTheDocument();
      expect(screen.getByText(getAssetPluralLabel(type))).toBeInTheDocument();
    }
  );
});
