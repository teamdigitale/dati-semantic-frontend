import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AssetDetails from "./AssetDetails";
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
    keyClasses: [
      {
        iri: "http://dati.gov.it/data/resource/Standard/keyClass1",
        summary: null,
      },
      {
        iri: "http://dati.gov.it/data/resource/Standard/keyClass2",
        summary: "keyClass2",
      },
    ],
    projects: [
      {
        iri: "http://dati.gov.it/data/resource/Standard/project1",
        summary: null,
      },
      {
        iri: "http://dati.gov.it/data/resource/Standard/project2",
        summary: "project2",
      },
    ],
    prefix: "Ontology prefix",
  };
});

describe("<AssetDetails />", () => {
  test("it should mount", () => {
    render(<AssetDetails details={details} />);

    const vocabDetails = screen.getByTestId("AssetDetails");

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
    "prefix",
  ])("it should display %s from the item", (key) => {
    renderWithRoute(<AssetDetails details={details} />);

    expect(screen.getByText(details[key])).toBeInTheDocument();
  });

  it("should render label for accrual periodicity", () => {
    render(<AssetDetails details={details} />);

    const type = screen.getByText("Irregolare");

    expect(type).toBeInTheDocument();
  });

  it("should render type", () => {
    render(<AssetDetails details={details} />);

    const type = screen.getByText("Vocabolario controllato");

    expect(type).toBeInTheDocument();
  });

  it("should render themes", () => {
    render(<AssetDetails details={details} />);

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
    render(<AssetDetails details={details} />);

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
    render(<AssetDetails details={details} />);

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
    render(<AssetDetails details={details} />);

    const subject1 = screen.getByText("http://eurovoc.europa.eu/100169");
    expect(subject1).toBeInTheDocument();

    const subject2 = screen.getByText("http://eurovoc.europa.eu/100227");
    expect(subject2).toBeInTheDocument();
  });

  it("should not render subjects when not provided", () => {
    details.subjects = null;
    render(<AssetDetails details={details} />);

    const subject1 = screen.queryByText("http://eurovoc.europa.eu/100169");
    expect(subject1).not.toBeInTheDocument();

    const subject2 = screen.queryByText("http://eurovoc.europa.eu/100227");
    expect(subject2).not.toBeInTheDocument();
  });

  it("should render contactPoint", () => {
    render(<AssetDetails details={details} />);

    const contactPointIri = screen.getByText(
      "http://dati.gov.it/data/resource/ContactPoint/voc_AgID"
    );
    expect(contactPointIri).toBeInTheDocument();

    const contactPointEmail = screen.getByText("mailto:info@dati.gov.it");
    expect(contactPointEmail).toBeInTheDocument();
  });

  it("should not render contactPoint when not provided", () => {
    details.contactPoint = null;
    render(<AssetDetails details={details} />);

    const contactPointIri = screen.queryByText(
      "http://dati.gov.it/data/resource/ContactPoint/voc_AgID"
    );
    expect(contactPointIri).not.toBeInTheDocument();

    const contactPointEmail = screen.queryByText("mailto:info@dati.gov.it");
    expect(contactPointEmail).not.toBeInTheDocument();
  });

  it("should render publishers and creators", () => {
    render(<AssetDetails details={details} />);

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
    render(<AssetDetails details={details} />);

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
    render(<AssetDetails details={details} />);

    const versionInfo = screen.queryByText(
      "E' l'attuale versione ISTAT della classificazione ufficiale sulle forme giuridiche"
    );
    expect(versionInfo).not.toBeInTheDocument();
  });

  it("should not render issuedOn when not provided", () => {
    details.issuedOn = null;
    render(<AssetDetails details={details} />);

    const versionInfo = screen.queryByText("2017-02-13");
    expect(versionInfo).not.toBeInTheDocument();
  });

  it("should render languages", () => {
    render(<AssetDetails details={details} />);

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
    render(<AssetDetails details={details} />);

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
    render(<AssetDetails details={details} />);

    const temporal1 = screen.getByText("temporal1");
    expect(temporal1).toBeInTheDocument();

    const temporal2 = screen.getByText("temporal2");
    expect(temporal2).toBeInTheDocument();
  });

  it("should render not temporal when not provided", () => {
    details.temporal = null;
    render(<AssetDetails details={details} />);

    const temporal1 = screen.queryByText("temporal1");
    expect(temporal1).not.toBeInTheDocument();

    const temporal2 = screen.queryByText("temporal2");
    expect(temporal2).not.toBeInTheDocument();
  });

  it("should render conformsTo", () => {
    render(<AssetDetails details={details} />);

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
    render(<AssetDetails details={details} />);

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

  it("should render keyClasses", () => {
    render(<AssetDetails details={details} />);

    const keyClass1 = screen.getByText(
      "http://dati.gov.it/data/resource/Standard/keyClass1"
    );
    expect(keyClass1).toBeInTheDocument();

    const keyClass2 = screen.getByText(
      "http://dati.gov.it/data/resource/Standard/keyClass2"
    );
    expect(keyClass2).toBeInTheDocument();

    const keyClass2Name = screen.getByText("keyClass2");
    expect(keyClass2Name).toBeInTheDocument();
  });

  it("should not render keyClasses when not provided", () => {
    details.keyClasses = null;
    render(<AssetDetails details={details} />);

    const keyClass1 = screen.queryByText(
      "http://dati.gov.it/data/resource/Standard/keyClass1"
    );
    expect(keyClass1).not.toBeInTheDocument();

    const keyClass2 = screen.queryByText(
      "http://dati.gov.it/data/resource/Standard/keyClass2"
    );
    expect(keyClass2).not.toBeInTheDocument();

    const keyClass2Name = screen.queryByText("keyClass2");
    expect(keyClass2Name).not.toBeInTheDocument();
  });

  it("should render projects", () => {
    render(<AssetDetails details={details} />);

    const project1Iri = screen.getByText(
      "http://dati.gov.it/data/resource/Standard/project1"
    );
    expect(project1Iri).toBeInTheDocument();

    const project2Iri = screen.getByText(
      "http://dati.gov.it/data/resource/Standard/project2"
    );
    expect(project2Iri).toBeInTheDocument();

    const project2Name = screen.getByText("project2");
    expect(project2Name).toBeInTheDocument();
  });

  it("should not render projects when not provided", () => {
    details.projects = null;
    render(<AssetDetails details={details} />);

    const project1Iri = screen.queryByText(
      "http://dati.gov.it/data/resource/Standard/project1"
    );
    expect(project1Iri).not.toBeInTheDocument();

    const project2Iri = screen.queryByText(
      "http://dati.gov.it/data/resource/Standard/project2"
    );
    expect(project2Iri).not.toBeInTheDocument();

    const project2Name = screen.queryByText("project2");
    expect(project2Name).not.toBeInTheDocument();
  });

  it("should not render prefix when not provided", () => {
    details.prefix = null;
    render(<AssetDetails details={details} />);
    const prefix = screen.queryByText("Ontology prefix");
    expect(prefix).not.toBeInTheDocument();
  });

  it("should not render modifiedOn when not provided", () => {
    details.modifiedOn = null;
    render(<AssetDetails details={details} />);
    const modifiedOn = screen.queryByText("2018-02-13");
    expect(modifiedOn).not.toBeInTheDocument();
  });

  it("should not render accrualPeriodicity when not provided", () => {
    details.accrualPeriodicity = null;
    render(<AssetDetails details={details} />);
    const periodicity = screen.queryByText("Irregolare");
    expect(periodicity).not.toBeInTheDocument();
  });
});
