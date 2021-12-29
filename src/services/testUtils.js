import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import React from "react";

export function renderWithRoute(ui, initialRoute = "") {
  render(<MemoryRouter initialEntries={[initialRoute]}>{ui}</MemoryRouter>);
}

export function assetDetails() {
  return {
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
    distributions: [
      {
        accessUrl:
          "http://dati.gov.it/data/resource/Distribution/OrgLegalStatus_RDF_Turtle",
        downloadUrl:
          "http://dati.gov.it/data/resource/Distribution/OrgLegalStatus_RDF_Turtle",
      },
      {
        accessUrl:
          "http://dati.gov.it/data/resource/Distribution/OrgLegalStatus_CSV",
        downloadUrl:
          "http://dati.gov.it/data/resource/Distribution/OrgLegalStatus_RDF_Turtle",
      },
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
}
