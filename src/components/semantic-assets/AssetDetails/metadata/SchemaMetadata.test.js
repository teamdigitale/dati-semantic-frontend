import SchemaMetadata from "./SchemaMetadata";
import { render, screen } from "@testing-library/react";

describe("<SchemaMetadata />", () => {
  test("renders", () => {
    render(
      <SchemaMetadata
        rightsHolder={{ iri: "some-iri", summary: "agency name" }}
        issuedOn={"2017-02-13"}
        keyClasses={[
          { iri: "some-iri-2", summary: "summary1" },
          { iri: "some-iri-3", summary: "summary2" },
        ]}
      />
    );

    expect(screen.getByText("Titolare")).toBeInTheDocument();
    expect(screen.getByText("agency name")).toBeInTheDocument();

    expect(screen.getByText("Data Creazione")).toBeInTheDocument();
    expect(screen.getByText("13/02/2017")).toBeInTheDocument();

    const summary1 = screen.getByText("summary1");
    expect(summary1).toBeInTheDocument();
    expect(summary1.closest("a")).toHaveAttribute("href", "some-iri-2");
    expect(summary1.closest("a")).toHaveAttribute("target", "_blank");

    const summary2 = screen.getByText("summary2");
    expect(summary2).toBeInTheDocument();
    expect(summary2.closest("a")).toHaveAttribute("href", "some-iri-3");
    expect(summary2.closest("a")).toHaveAttribute("target", "_blank");
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
