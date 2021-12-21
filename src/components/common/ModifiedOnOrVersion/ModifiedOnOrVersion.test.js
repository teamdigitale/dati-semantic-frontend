import ModifiedOnOrVersion from "./ModifiedOnOrVersion";
import { render, screen } from "@testing-library/react";
import {
  AT_ONTOLOGY,
  AT_SCHEMA,
  AT_VOCABULARY,
} from "../../../services/dataConstants";

describe("<ModifiedOnOrVersion />", () => {
  test("renders Vocabulary with modified date", () => {
    render(
      <ModifiedOnOrVersion
        type={AT_VOCABULARY}
        size={"small"}
        modifiedOn={"2021-02-14"}
      />
    );

    expect(screen.getByText("Ultima modifica")).toBeInTheDocument();
    expect(screen.getByText("14/02/2021")).toBeInTheDocument();
  });

  test("renders Vocabulary without modified date", () => {
    render(<ModifiedOnOrVersion type={AT_VOCABULARY} size={"small"} />);

    expect(screen.getByText("Ultima modifica")).toBeInTheDocument();
    expect(screen.getByText("n/a")).toBeInTheDocument();
  });

  test("renders Ontology with modified date", () => {
    render(
      <ModifiedOnOrVersion
        type={AT_ONTOLOGY}
        size={"small"}
        modifiedOn={"2021-02-14"}
      />
    );

    expect(screen.getByText("Ultima modifica")).toBeInTheDocument();
    expect(screen.getByText("14/02/2021")).toBeInTheDocument();
  });

  test("renders Ontology without modified date", () => {
    render(<ModifiedOnOrVersion type={AT_ONTOLOGY} size={"small"} />);

    expect(screen.getByText("Ultima modifica")).toBeInTheDocument();
    expect(screen.getByText("n/a")).toBeInTheDocument();
  });

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
