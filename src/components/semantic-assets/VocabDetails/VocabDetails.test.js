import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import VocabDetails from "./VocabDetails";
import { renderWithRoute } from "../../../services/testUtils";

let details;

beforeEach(() => {
  details = {
    assetIri:
      "https://w3id.org/italia/controlled-vocabulary/classifications-for-organizations/legal-status",
    title: "Vocabolario Controllato Forme Giuridiche",
    description:
      "Classificazione delle forme giuridiche per le organizzazioni disciplinate dal diritto pubblico e privato.",
    type: "CONTROLLED_VOCABULARY",
    modifiedOn: "2018-02-13",
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/ECON",
      "http://publications.europa.eu/resource/authority/data-theme/GOVE",
    ],
    rightsHolder: {
      iri: "http://spcdata.digitpa.gov.it/browse/page/Amministrazione/ISTAT",
      summary: "Istituto Nazionale di Statistica - ISTAT",
    },
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    distributionUrls: [
      "http://dati.gov.it/data/resource/Distribution/OrgLegalStatus_RDF_Turtle",
      "http://dati.gov.it/data/resource/Distribution/OrgLegalStatus_CSV",
    ],
    subjects: [
      "http://eurovoc.europa.eu/100169",
      "http://eurovoc.europa.eu/100227",
    ],
    contactPoint: {
      iri: "http://dati.gov.it/data/resource/ContactPoint/voc_AgID",
      summary: "mailto:info@dati.gov.it",
    },
    publishers: [
      {
        iri: "http://spcdata.digitpa.gov.it/browse/page/Amministrazione/agid",
        summary: "Agenzia per l'Italia Digitale",
      },
      {
        iri: "http://dati.gov.it/data/resource/Amministrazione/td_PCM",
        summary: "Team per la Trasformazione Digitale",
      },
    ],
    creators: [
      {
        iri: "http://dati.gov.it/data/resource/Amministrazione/td_PCM",
        summary: "Team per la Trasformazione Digitale",
      },
      {
        iri: "http://spcdata.digitpa.gov.it/browse/page/Amministrazione/agid",
        summary: "Agenzia per l'Italia Digitale",
      },
    ],
    versionInfo:
      "E' l'attuale versione ISTAT della classificazione ufficiale sulle forme giuridiche",
    issuedOn: "2017-02-13",
    languages: [
      "http://publications.europa.eu/resource/authority/language/ITA",
      "http://publications.europa.eu/resource/authority/language/ENG",
    ],
    temporal: ["temporal1", "temporal2"],
    conformsTo: [
      {
        iri: "http://dati.gov.it/data/resource/Standard/SKOS",
        summary: null,
      },
      {
        iri: "http://dati.gov.it/data/resource/Standard/SKOS1",
        summary: "SKOS-1",
      },
    ],
    keyConcept: "legalStatus",
    endpointUrl: "http://localhost:8080/vocabularies/ISTAT/legalStatus",
  };
});

describe("<VocabDetails />", () => {
  test("it should mount", () => {
    render(<VocabDetails details={details} />);

    const vocabDetails = screen.getByTestId("VocabDetails");

    expect(vocabDetails).toBeInTheDocument();
  });

  test.each([
    "assetIri",
    "title",
    "description",
    "modifiedOn",
    "accrualPeriodicity",
    "endpointUrl",
    "keyConcept",
    "versionInfo",
    "issuedOn",
  ])("it should display %s from the item", (key) => {
    renderWithRoute(<VocabDetails details={details} />);

    expect(screen.getByText(details[key])).toBeInTheDocument();
  });

  it("should render type", () => {
    render(<VocabDetails details={details} />);

    const type = screen.getByText("Vocabolario controllato");

    expect(type).toBeInTheDocument();
  });

  it("should render themes", () => {
    render(<VocabDetails details={details} />);

    //http://publications.europa.eu/resource/authority/data-theme/ECON
    const econIri = screen.getByText(
      "http://publications.europa.eu/resource/authority/data-theme/ECON"
    );
    expect(econIri).toBeInTheDocument();

    let econImg = screen.getByAltText("ECON");
    expect(econImg).toBeInTheDocument();

    const econLabel = screen.getByText("Economia e finanze");
    expect(econLabel).toBeInTheDocument();

    //http://publications.europa.eu/resource/authority/data-theme/GOVE
    const goveIri = screen.getByText(
      "http://publications.europa.eu/resource/authority/data-theme/GOVE"
    );
    expect(goveIri).toBeInTheDocument();

    let goveImg = screen.getByAltText("GOVE");
    expect(goveImg).toBeInTheDocument();

    const goveLabel = screen.getByText("Governo e settore pubblico");
    expect(goveLabel).toBeInTheDocument();
  });

  it("should render rightsHolder", () => {
    render(<VocabDetails details={details} />);

    const rightsHolderName = screen.getByText(
      "Istituto Nazionale di Statistica - ISTAT"
    );
    expect(rightsHolderName).toBeInTheDocument();

    const rightsHolderIri = screen.getByText(
      "http://spcdata.digitpa.gov.it/browse/page/Amministrazione/ISTAT"
    );
    expect(rightsHolderIri).toBeInTheDocument();
  });

  it("should render distributionUrls", () => {
    render(<VocabDetails details={details} />);

    const distributionUrl1 = screen.getByText(
      "http://dati.gov.it/data/resource/Distribution/OrgLegalStatus_RDF_Turtle"
    );
    expect(distributionUrl1).toBeInTheDocument();

    const distributionUrl2 = screen.getByText(
      "http://dati.gov.it/data/resource/Distribution/OrgLegalStatus_CSV"
    );
    expect(distributionUrl2).toBeInTheDocument();
  });

  it("should render subjects", () => {
    render(<VocabDetails details={details} />);

    const subject1 = screen.getByText("http://eurovoc.europa.eu/100169");
    expect(subject1).toBeInTheDocument();

    const subject2 = screen.getByText("http://eurovoc.europa.eu/100227");
    expect(subject2).toBeInTheDocument();
  });

  it("should not render subjects when not provided", () => {
    details.subjects = null;
    render(<VocabDetails details={details} />);

    const subject1 = screen.queryByText("http://eurovoc.europa.eu/100169");
    expect(subject1).not.toBeInTheDocument();

    const subject2 = screen.queryByText("http://eurovoc.europa.eu/100227");
    expect(subject2).not.toBeInTheDocument();
  });

  it("should render contactPoint", () => {
    render(<VocabDetails details={details} />);

    const contactPointIri = screen.getByText(
      "http://dati.gov.it/data/resource/ContactPoint/voc_AgID"
    );
    expect(contactPointIri).toBeInTheDocument();

    const contactPointEmail = screen.getByText("mailto:info@dati.gov.it");
    expect(contactPointEmail).toBeInTheDocument();
  });

  it("should not render contactPoint when not provided", () => {
    details.contactPoint = null;
    render(<VocabDetails details={details} />);

    const contactPointIri = screen.queryByText(
      "http://dati.gov.it/data/resource/ContactPoint/voc_AgID"
    );
    expect(contactPointIri).not.toBeInTheDocument();

    const contactPointEmail = screen.queryByText("mailto:info@dati.gov.it");
    expect(contactPointEmail).not.toBeInTheDocument();
  });

  it("should render publishers and creators", () => {
    render(<VocabDetails details={details} />);

    const agidIri = screen.getAllByText(
      "http://spcdata.digitpa.gov.it/browse/page/Amministrazione/agid"
    );
    expect(agidIri[0]).toBeInTheDocument();
    expect(agidIri[1]).toBeInTheDocument();

    const agidName = screen.getAllByText("Agenzia per l'Italia Digitale");
    expect(agidName[0]).toBeInTheDocument();
    expect(agidName[1]).toBeInTheDocument();

    const teamDigitaleIri = screen.getAllByText(
      "http://dati.gov.it/data/resource/Amministrazione/td_PCM"
    );
    expect(teamDigitaleIri[0]).toBeInTheDocument();
    expect(teamDigitaleIri[1]).toBeInTheDocument();

    const teamDigitaleName = screen.getAllByText(
      "Team per la Trasformazione Digitale"
    );
    expect(teamDigitaleName[0]).toBeInTheDocument();
    expect(teamDigitaleName[1]).toBeInTheDocument();
  });

  it("should not render publishers and creators when not provided", () => {
    details.publishers = null;
    details.creators = null;
    render(<VocabDetails details={details} />);

    const tdIri = screen.queryByText(
      "http://dati.gov.it/data/resource/Amministrazione/td_PCM"
    );
    expect(tdIri).not.toBeInTheDocument();

    const tdName = screen.queryByText("Team per la Trasformazione Digitale");
    expect(tdName).not.toBeInTheDocument();

    const agidIri = screen.queryByText(
      "http://spcdata.digitpa.gov.it/browse/page/Amministrazione/agid"
    );
    expect(agidIri).not.toBeInTheDocument();

    const agidName = screen.queryByText("Agenzia per l'Italia Digitale");
    expect(agidName).not.toBeInTheDocument();
  });

  it("should not render versionInfo when not provided", () => {
    details.versionInfo = null;
    render(<VocabDetails details={details} />);

    const versionInfo = screen.queryByText(
      "E' l'attuale versione ISTAT della classificazione ufficiale sulle forme giuridiche"
    );
    expect(versionInfo).not.toBeInTheDocument();
  });

  it("should not render issuedOn when not provided", () => {
    details.issuedOn = null;
    render(<VocabDetails details={details} />);

    const versionInfo = screen.queryByText("2017-02-13");
    expect(versionInfo).not.toBeInTheDocument();
  });

  it("should render languages", () => {
    render(<VocabDetails details={details} />);

    const italianIri = screen.getByText(
      "http://publications.europa.eu/resource/authority/language/ITA"
    );
    expect(italianIri).toBeInTheDocument();

    const englishIri = screen.getByText(
      "http://publications.europa.eu/resource/authority/language/ENG"
    );
    expect(englishIri).toBeInTheDocument();
  });

  it("should render not languages when not provided", () => {
    details.languages = null;
    render(<VocabDetails details={details} />);

    const italianIri = screen.queryByText(
      "http://publications.europa.eu/resource/authority/language/ITA"
    );
    expect(italianIri).not.toBeInTheDocument();

    const englishIri = screen.queryByText(
      "http://publications.europa.eu/resource/authority/language/ENG"
    );
    expect(englishIri).not.toBeInTheDocument();
  });

  it("should render temporal", () => {
    render(<VocabDetails details={details} />);

    const temporal1 = screen.getByText("temporal1");
    expect(temporal1).toBeInTheDocument();

    const temporal2 = screen.getByText("temporal2");
    expect(temporal2).toBeInTheDocument();
  });

  it("should render not temporal when not provided", () => {
    details.temporal = null;
    render(<VocabDetails details={details} />);

    const temporal1 = screen.queryByText("temporal1");
    expect(temporal1).not.toBeInTheDocument();

    const temporal2 = screen.queryByText("temporal2");
    expect(temporal2).not.toBeInTheDocument();
  });

  it("should render conformsTo", () => {
    render(<VocabDetails details={details} />);

    const skosIri = screen.getByText(
      "http://dati.gov.it/data/resource/Standard/SKOS"
    );
    expect(skosIri).toBeInTheDocument();

    const skos1Iri = screen.getByText(
      "http://dati.gov.it/data/resource/Standard/SKOS1"
    );
    expect(skos1Iri).toBeInTheDocument();

    const skos1Name = screen.getByText("SKOS-1");
    expect(skos1Name).toBeInTheDocument();
  });

  it("should not render conformsTo when not provided", () => {
    details.conformsTo = null;
    render(<VocabDetails details={details} />);

    const skosIri = screen.queryByText(
      "http://dati.gov.it/data/resource/Standard/SKOS"
    );
    expect(skosIri).not.toBeInTheDocument();

    const skos1Iri = screen.queryByText(
      "http://dati.gov.it/data/resource/Standard/SKOS1"
    );
    expect(skos1Iri).not.toBeInTheDocument();

    const skos1Name = screen.queryByText("SKOS-1");
    expect(skos1Name).not.toBeInTheDocument();
  });
});
