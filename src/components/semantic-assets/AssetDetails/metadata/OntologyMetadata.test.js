import OntologyMetadata from "./OntologyMetadata";
import { render, screen } from "@testing-library/react";
import { assetDetails } from "../../../../services/testUtils";

let details = assetDetails();
describe("<OntologyMetadata />", () => {
  test("renders all", () => {
    render(<OntologyMetadata details={details} />);

    expect(screen.getByTestId("common-metadata")).toBeInTheDocument();

    expect(screen.getByText("Concetti principali")).toBeInTheDocument();

    expect(screen.getByText("Prefisso")).toBeInTheDocument();
    expect(screen.getByText("Ontology prefix")).toBeInTheDocument();

    expect(
      screen.getByText("Progetti che usano l’ontologia")
    ).toBeInTheDocument();
    expect(screen.getByText("project2")).toBeInTheDocument();
  });

  test("renders without keyClasses", () => {
    details = { ...details, keyClasses: [] };
    render(<OntologyMetadata details={details} />);
    expect(screen.queryByText("Concetti principali")).not.toBeInTheDocument();
    expect(screen.queryByText("keyClass2")).not.toBeInTheDocument();
  });

  test("renders without prefix", () => {
    details = { ...details, prefix: null };
    render(<OntologyMetadata details={details} />);
    expect(screen.queryByText("Prefisso")).not.toBeInTheDocument();
    expect(screen.queryByText("Ontology prefix")).not.toBeInTheDocument();
  });

  test("renders without projects", () => {
    details = { ...details, projects: [] };
    render(<OntologyMetadata details={details} />);
    expect(
      screen.queryByText("Progetti che usano l’ontologia")
    ).not.toBeInTheDocument();
    expect(screen.queryByText("project2")).not.toBeInTheDocument();
  });
});
