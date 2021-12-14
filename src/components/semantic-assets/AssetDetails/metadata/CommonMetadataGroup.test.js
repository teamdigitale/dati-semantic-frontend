import CommonMetadataGroup from "./CommonMetadataGroup";
import { render, screen } from "@testing-library/react";
import { assetDetails } from "../../../../services/testUtils";

let details = assetDetails();

describe("<CommonMetadataGroup />", () => {
  test("renders", () => {
    render(<CommonMetadataGroup details={details} />);

    expect(screen.getByTestId("common-metadata")).toBeInTheDocument();
    expect(screen.getByTestId("asset-iri-row")).toBeInTheDocument();
    expect(
      screen.getByText(
        "https://w3id.org/italia/controlled-vocabulary/classifications-for-organizations/legal-status"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Titolare")).toBeInTheDocument();
    expect(
      screen.getByText("Istituto Nazionale di Statistica - ISTAT")
    ).toBeInTheDocument();

    expect(screen.getByText("Data creazione")).toBeInTheDocument();
    expect(screen.getByText("13/02/2017")).toBeInTheDocument();

    expect(screen.getByText("Versione")).toBeInTheDocument();
    expect(
      screen.getByText(
        "E' l'attuale versione ISTAT della classificazione ufficiale sulle forme giuridiche"
      )
    ).toBeInTheDocument();

    expect(screen.getByText("Frequenza di aggiornamento")).toBeInTheDocument();
    expect(screen.getByText("Irregolare")).toBeInTheDocument();

    expect(screen.getByText("Contatti")).toBeInTheDocument();
    expect(screen.getByText("info@dati.gov.it")).toBeInTheDocument();

    expect(screen.getByText("Editore")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Agenzia per l'Italia Digitale, Team per la Trasformazione Digitale"
      )
    ).toBeInTheDocument();

    expect(screen.getByText("Creatore")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Team per la Trasformazione Digitale, Agenzia per l'Italia Digitale"
      )
    ).toBeInTheDocument();

    expect(screen.getByText("Lingua")).toBeInTheDocument();
    expect(screen.getByText("Italiano, Inglese")).toBeInTheDocument();

    expect(screen.getByText("Conforme a")).toBeInTheDocument();
    expect(screen.getByText("SKOS-1")).toBeInTheDocument();
  });

  test("renders without issuedOn", () => {
    details.issuedOn = null;
    render(<CommonMetadataGroup details={details} />);

    expect(screen.queryByText("Data creazione")).not.toBeInTheDocument();
    expect(screen.queryByText("13/02/2017")).not.toBeInTheDocument();
  });

  test("renders without versionInfo", () => {
    details.versionInfo = null;
    render(<CommonMetadataGroup details={details} />);

    expect(screen.queryByText("Versione")).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        "E' l'attuale versione ISTAT della classificazione ufficiale sulle forme giuridiche"
      )
    ).not.toBeInTheDocument();
  });

  test("renders without accrualPeriodicity", () => {
    details.accrualPeriodicity = null;
    render(<CommonMetadataGroup details={details} />);

    expect(
      screen.queryByText("Frequenza di aggiornamento")
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Irregolare")).not.toBeInTheDocument();
  });

  test("renders without contactPoint", () => {
    details.contactPoint = null;
    render(<CommonMetadataGroup details={details} />);

    expect(screen.queryByText("Contatti")).not.toBeInTheDocument();
    expect(screen.queryByText("info@dati.gov.it")).not.toBeInTheDocument();
  });

  test("renders without publisher", () => {
    details.publishers = null;
    render(<CommonMetadataGroup details={details} />);

    expect(screen.queryByText("Editore")).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        "Agenzia per l'Italia Digitale, Team per la Trasformazione Digitale"
      )
    ).not.toBeInTheDocument();
  });

  test("renders without creator", () => {
    details.creators = null;
    render(<CommonMetadataGroup details={details} />);

    expect(screen.queryByText("Creatore")).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        "Team per la Trasformazione Digitale, Agenzia per l'Italia Digitale"
      )
    ).not.toBeInTheDocument();
  });

  test("renders without language", () => {
    details.languages = null;
    render(<CommonMetadataGroup details={details} />);

    expect(screen.queryByText("Lingua")).not.toBeInTheDocument();
    expect(screen.queryByText("Italiano, Inglese")).not.toBeInTheDocument();
  });

  test("renders without conformsTo", () => {
    details.conformsTo = null;
    render(<CommonMetadataGroup details={details} />);

    expect(screen.queryByText("Conforme a")).not.toBeInTheDocument();
    expect(screen.queryByText("SKOS-1")).not.toBeInTheDocument();
  });
});
