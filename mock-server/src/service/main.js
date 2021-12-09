const mbHelper = require("../mountebank-helper");
const settings = require("../settings");

const addService = () => {
  const searchResponse = {
    data: [
      {
        assetIri: "http://www.disney.com/characters",
        type: "CONTROLLED_VOCABULARY",
        title: "Disney characters",
        description:
          "Fully comprehensive list of Disney characters, including Lorem ipsum dolor sit amet, consectetur adipiscing " +
          "elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis " +
          "nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
          "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        themes: [
          "http://publications.europa.eu/resource/authority/data-theme/EDUC",
        ],
        rightsHolder: {
          iri: "http://publications.europa.eu/resource/authority/corporate-body/EUROSTAT",
          summary: "Eurostat",
        },
        modifiedOn: "01/01/2020",
      },
      {
        assetIri: "http://www.marvel.com/characters",
        type: "ONTOLOGY",
        title: "Marvel characters",
        description: "Fully comprehensive list of Marvel characters",
        themes: [
          "http://publications.europa.eu/resource/authority/data-theme/EDUC",
          "http://publications.europa.eu/resource/authority/data-theme/SOCI",
        ],
        rightsHolder: {
          iri: "http://publications.europa.eu/resource/authority/corporate-body/EUROSTAT",
          summary: "Eurostat",
        },
        modifiedOn: "21/12/2021",
      },
      {
        assetIri: "http://www.marvel.com/schema/character",
        type: "SCHEMA",
        title: "Marvel characters Schema",
        description: "Fully comprehensive Schema of Marvel characters",
        themes: [
          "http://publications.europa.eu/resource/authority/data-theme/EDUC",
          "http://publications.europa.eu/resource/authority/data-theme/SOCI",
        ],
        rightsHolder: {
          iri: "http://publications.europa.eu/resource/authority/corporate-body/EUROSTAT",
          summary: "Eurostat",
        },
        versionInfo: "1.0.0",
      },
    ],
    offset: 0,
    limit: 10,
    totalCount: 3,
  };

  let detailsResponse = {
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
  const stubs = [
    {
      predicates: [
        {
          equals: {
            method: "GET",
            path: "/semantic-assets/byIri",
          },
        },
      ],
      responses: [
        {
          is: {
            statusCode: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET, PUT",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(detailsResponse),
          },
        },
      ],
    },
    {
      predicates: [
        {
          equals: {
            method: "GET",
            path: "/semantic-assets",
          },
        },
      ],
      responses: [
        {
          is: {
            statusCode: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET, PUT",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(searchResponse),
          },
        },
      ],
    },
  ];

  const imposter = {
    port: settings.main_service_port,
    protocol: "http",
    stubs,
  };

  return mbHelper.postImposter(imposter);
};

module.exports = { addService };
