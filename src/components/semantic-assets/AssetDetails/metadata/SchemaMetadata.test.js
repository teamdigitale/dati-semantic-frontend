import SchemaMetadata from "./SchemaMetadata";
import { render, screen } from "@testing-library/react";

describe("<SchemaMetadata />", () => {
  test("renders", () => {
    render(
      <SchemaMetadata
        rightsHolder={{ iri: "some-iri", summary: "agency name" }}
        issuedOn={"2017-02-13"}
      />
    );

    expect(screen.getByText("Titolare")).toBeInTheDocument();
    expect(screen.getByText("agency name")).toBeInTheDocument();

    expect(screen.getByText("Data Creazione")).toBeInTheDocument();
    expect(screen.getByText("13/02/2017")).toBeInTheDocument();
  });

  test("renders without issuedOn", () => {
    render(
      <SchemaMetadata
        rightsHolder={{ iri: "some-iri", summary: "agency name" }}
      />
    );

    expect(screen.getByText("Titolare")).toBeInTheDocument();
    expect(screen.getByText("agency name")).toBeInTheDocument();

    expect(screen.queryByText("Data Creazione")).not.toBeInTheDocument();
    expect(screen.queryByText("13/02/2017")).not.toBeInTheDocument();
  });
});
