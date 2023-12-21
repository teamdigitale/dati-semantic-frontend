const mbHelper = require("../mountebank-helper");
const settings = require("../settings");

const buildData = (iri, summary, extraDetails) => {
  const result = { iri };
  result.summary = { assetIri: iri, ...summary };
  result.details = { ...result.summary, ...extraDetails };
  return result;
};

const cvData = buildData(
  "https://w3id.org/italia/controlled-vocabulary/classifications-for-organizations/legal-status",
  {
    type: "CONTROLLED_VOCABULARY",
    title: "Vocabolario Controllato Forme Giuridiche",
    description:
      "Classificazione delle forme giuridiche per le organizzazioni disciplinate dal diritto pubblico e privato.",
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/ECON",
      "http://publications.europa.eu/resource/authority/data-theme/GOVE",
    ],
    rightsHolder: {
      iri: "http://spcdata.digitpa.gov.it/browse/page/Amministrazione/ISTAT",
      summary: "Istituto Nazionale di Statistica - ISTAT",
    },
    modifiedOn: "2018-02-13",
  },
  {
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
    agencyId: "ISTAT",
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
  }
);

const ontoData = buildData(
  "https://w3id.org/italia/onto/IoT",
  {
    type: "ONTOLOGY",
    title: "Ontologia Eventi IoT - Profilo applicativo italiano",
    description:
      "Questa è l'ontologia di eventi IoT. Essa può essere utilizzata per esempio per rappresentare serie temporali e misure di sensoristica di vario tipo. Attualmente l'ontologia include classi specializzate per la modellazione di flussi di traffico.",
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/TECH",
      "http://publications.europa.eu/resource/authority/data-theme/TRAN",
    ],
    modifiedOn: "2017-11-26",
    rightsHolder: {
      iri: "http://spcdata.digitpa.gov.it/Amministrazione/agid",
      summary: "Agenzia per l'Italia Digitale",
    },
  },
  {
    versionInfo:
      "Versione 0.10 - 26 Novembre 2017 - rifattorizzazione tenendo in considerazione nuove proprietà di L0 e di TI-AP_IT (TIme - Italian Application Profile) e usando CLV-AP_IT (Core Location Vocabulary - Profilo Applicativo Italiano)",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    distributionUrls: [
      "https://raw.githubusercontent.com/italia/daf-ontologie-vocabolari-controllati/master/Ontologie/IoT/latest",
    ],
    subjects: [],
    contactPoint: {
      iri: "https://w3id.org/italia/data/contact-point/onto-agid",
      summary: "mailto:info@dati.gov.it",
    },
    publishers: [
      {
        iri: "http://spcdata.digitpa.gov.it/Amministrazione/agid",
        summary: "Agenzia per l'Italia Digitale",
      },
    ],
    creators: [
      {
        iri: "http://spcdata.digitpa.gov.it/Amministrazione/agid",
        summary: "Agenzia per l'Italia Digitale",
      },
      {
        iri: "https://w3id.org/italia/data/organization/support-unit/cnr-Z6HZEH/stlab",
        summary:
          "Istituto di Scienze e Tecnologie della Cognizione del CNR - Semantic Technology Lab (STLab)",
      },
    ],
    issuedOn: "2017-05-15",
    languages: [
      "http://publications.europa.eu/resource/authority/language/ENG",
      "http://publications.europa.eu/resource/authority/language/ITA",
    ],
    temporal: null,
    conformsTo: [],
    agencyId: null,
    keyConcept: null,
    endpointUrl: null,
    keyClasses: [
      {
        iri: "https://w3id.org/italia/onto/IoT/Observation",
        summary: "Osservazione",
      },
      {
        iri: "https://w3id.org/italia/onto/IoT/Actuator",
        summary: "Attuatore",
      },
      { iri: "https://w3id.org/italia/onto/IoT/Sensor", summary: "Sensore" },
    ],
    prefix: "iotapit",
    projects: [
      {
        iri: "https://w3id.org/italia/data/project/DAF",
        summary: null,
      },
      {
        iri: "https://w3id.org/italia/data/project/OntoPiA",
        summary:
          "OntoPiA - la rete di ontologie della pubblica amministrazione italiana",
      },
    ],
  }
);

const schemaData = buildData(
  "https://w3id.org/italia/schema/person/v202108.01/person.oas3.yaml",
  {
    type: "SCHEMA",
    title: "The Person schema",
    description:
      "This Person schema is derived from the [CPV/Person](https://w3id.org/italia/onto/CPV/Person) ontology.\n\nThis description field can be rendered in markdown or in text-only in catalogues\nand other interfaces.",
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/EDUC",
    ],
    rightsHolder: {
      iri: "http://spcdata.digitpa.gov.it/Amministrazione/agid",
      summary: "Agenzia per l'Italia Digitale",
    },
    versionInfo: "202108.01.00",
  },
  {
    modifiedOn: "2021-12-06",
    distributionUrls: [
      "https://github.com/ioggstream/json-semantic-playground/tree/master/assets/schemas/person/v202108.01",
    ],
    conformsTo: [{ iri: "https://w3id.org/italia/onto/CPV", summary: null }],
    keyClasses: [
      {
        iri: "https://w3id.org/italia/onto/CPV/Person",
        summary: "Person",
      },
      {
        iri: "https://w3id.org/italia/onto/CPV/PersonTitle",
        summary: "Person Title",
      },
    ],
  }
);

const data = [cvData, ontoData, schemaData];

const searchResponse = {
  data: data.map((d) => d.summary),
  offset: 0,
  limit: 10,
  totalCount: 3,
};

const addService = () => {
  let stubs = data.map((d) => {
    return {
      predicates: [
        {
          equals: {
            method: "GET",
            path: "/semantic-assets/by-iri",
            query: { iri: d.iri },
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
            body: JSON.stringify(d.details),
          },
        },
      ],
    };
  });
  stubs.push({
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
  });

  const imposter = {
    port: settings.main_service_port,
    protocol: "http",
    stubs,
  };

  return mbHelper.postImposter(imposter);
};

module.exports = { addService };
