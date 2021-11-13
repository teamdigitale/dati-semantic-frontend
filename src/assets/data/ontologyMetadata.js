import { propertyMatcher } from "./data-util";
import { AT_ONTOLOGY } from "../../services/dataConstants";

const ontos = [
  {
    type: AT_ONTOLOGY,
    uri: "http://dati.beniculturali.it/cis",
    title:
      "Cultural-ON (Cultural ONtology): Ontologia dei Luoghi della Cultura e degli Eventi Culturali",
    desc: "L'ontologia ha lo scopo di modellare i dati che caratterizzano gli istituti e i luoghi della cultura, come ad esempio i dati sugli enti o sulle persone che hanno un determinato ruolo sugli istituti e luoghi della cultura, le sedi fisiche dei luoghi, i contatti, eventuali materiali multimediali che descrivono un istituto e luogo della cultura e ogni altra informazione utile al pubblico per poter accedere all'istituto e luogo della cultura. Inoltre, l'ontologia rappresenta  gli eventi che possono aver luogo in un istituto e luogo della cultura.\nLa figura seguente illustra alcuni elementi principali dell'ontologia. La figura non è esaustiva ma è inserita per aiutare a comprendere alcune relazioni tra concetti dell'ontologia.\nPer ogni classe dell'ontologia saranno forniti esempi di utilizzo in turtle; solo per alcune classi saranno altresì riportate figure specifiche che illustrano le relazioni e i concetti che ruotano attorno a tali classi.\nil file alignment_xml.owl inoltre rapprensenta tutti gli allineamenti dell'ontologia con altre esistenti nel Web dei dati come per esempio FOAF, Dubin Core, PRO, schema.org, etc. Per il MIBAC hanno contribuito attivamente allo sviluppo dell'ontologia Chiara Veninata e Annarita Orsini. Per l'Istituto di Scienze e Tecnologie della Cognizione (CNR) hanno contribuito i seguenti ricercatori: Giorgia Lodi, Luigi Asprino, Silvio Peroni, Andrea Nuzzolese, Valentina Presutti e Aldo Gangemi.",
    rightsHolder: "http://spcdata.digitpa.gov.it/Amministrazione/m_bac",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    contactPoint: "https://w3id.org/italia/data/contact-point/onto-mibac",
    publisher: "http://spcdata.digitpa.gov.it/Amministrazione/m_bac",
    keywords: ["Luoghi della Cultura", "Eventi Culturali"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/EDUC",
    ],
  },
  {
    type: AT_ONTOLOGY,
    uri: "https://w3id.org/italia/onto/AccessCondition",
    title:
      "Ontologia delle Condizioni di Accesso - Profilo applicativo italiano",
    desc: "Questa è l'ontologia del profilo di italiano sulle condizioni di accesso, inclusi gli orari di apertura (Access Condition Ontology - Italian Application Profile  - AccessCondition-AP_IT). Essa può essere utilizzata per modellare tutte le condizioni di accesso a luoghi pubblici.",
    rightsHolder:
      "http://spcdata.digitpa.gov.it/browse/page/Amministrazione/agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    contactPoint: "https://w3id.org/italia/data/contact-point/onto-agid",
    publisher: "http://spcdata.digitpa.gov.it/browse/page/Amministrazione/agid",
    keywords: ["Condizioni d'accesso", "Orari di apertura"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/GOVE",
      "http://publications.europa.eu/resource/authority/data-theme/SOCI",
    ],
  },
  {
    type: AT_ONTOLOGY,
    uri: "https://w3id.org/italia/onto/ACCO",
    title: "Ontologia delle Strutture Ricettive - Profilo applicativo italiano",
    desc: "Questa è l'ontologia del profilo  italiano sulle Strutture Ricettive (Accomodation Facility - Italian Application Profile - ACCO-AP_IT)",
    rightsHolder:
      "http://spcdata.digitpa.gov.it/browse/page/Amministrazione/agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    contactPoint: "https://w3id.org/italia/data/contact-point/onto-agid",
    publisher: "http://spcdata.digitpa.gov.it/browse/page/Amministrazione/agid",
    keywords: [
      "Ricettività",
      "Hotel",
      "Strutture alberghiere",
      "Strutture ricettive",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/EDUC",
    ],
  },
  {
    type: AT_ONTOLOGY,
    uri: "https://w3id.org/italia/onto/COV",
    title:
      "Ontologia delle Organizzazioni (pubbliche e private)- Profilo applicativo italiano",
    desc: "Questa è l'ontologia del profilo applicativo italiano sulle organizzazioni (pubbliche e private). Essa consente di modellare le principali informazioni sull'anagrafica delle organizzazioni pubbliche e private (inclusa l'articolazione degli uffici e dei relativi responsabili).",
    rightsHolder: "http://spcdata.digitpa.gov.it/Amministrazione/agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    contactPoint: "https://w3id.org/italia/data/contact-point/onto-agid",
    publisher: "http://spcdata.digitpa.gov.it/Amministrazione/agid",
    keywords: [
      "impresa",
      "azienda",
      "organizzazione",
      "pubblica amministrazione",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/GOVE",
      "http://publications.europa.eu/resource/authority/data-theme/ECON",
    ],
  },
  {
    type: AT_ONTOLOGY,
    uri: "https://w3id.org/italia/onto/CPSV",
    title:
      "Ontologia dei Servizi Pubblici - Core Public Service Vocabulary - Profilo applicativo italiano (CPSV-AP_IT)",
    desc: "Ontologia del profilo italiano per la descrizione dei servizi pubblici. Per servizio pubblico si intende qualsiasi atto obbligatorio o discrezionale espletato da una pubblica amministrazione (o per conto di una pubblica amministrazione) nei confronti di cittadini, imprese/professionisti.",
    rightsHolder:
      "http://spcdata.digitpa.gov.it/browse/page/Amministrazione/agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    contactPoint: "https://w3id.org/italia/data/contact-point/onto-agid",
    publisher: "http://spcdata.digitpa.gov.it/browse/page/Amministrazione/agid",
    keywords: ["Servizio", "Servizio pubblico", "Canali di erogazione"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/GOVE",
    ],
  },
  {
    type: AT_ONTOLOGY,
    uri: "https://w3id.org/italia/onto/CPV",
    title:
      "CPV-AP_IT: Core Person Vocabulary - profilo applicativo italiano - Ontologia delle persone",
    desc: "Questa è l'ontologia del profilo applicativo italiano sulle persone.",
    rightsHolder:
      "http://spcdata.digitpa.gov.it/browse/page/Amministrazione/ISTAT",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    contactPoint: "https://w3id.org/italia/data/contact-point/onto-agid",
    publisher: "http://spcdata.digitpa.gov.it/browse/page/Amministrazione/agid",
    keywords: ["famiglia", "residenza", "persona", "persone"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/SOCI",
    ],
  },
  {
    type: AT_ONTOLOGY,
    uri: "https://w3id.org/italia/onto/CulturalHeritage",
    title: "Ontologia dei Beni Culturali - Profilo applicativo italiano",
    desc: "Questo è il profilo applicativo italiano dell'ontologia sui beni culturali. L'ontologia di OntoPiA sui beni culturali non fa altro che importare tutte le ontologie della rete ArCo - Architettura della Conoscenza, rete delle ontologie sui beni mobili culturali attualmente in fase di sviluppo da parte del Ministero dei Beni e delle Attività Culturali",
    rightsHolder: "http://spcdata.digitpa.gov.it/Amministrazione/m_bac",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    contactPoint: "https://w3id.org/italia/data/contact-point/onto-dgt",
    publisher:
      "https://w3id.org/italia/data/organization/support-unit/cnr-Z6HZEH/stlab",
    keywords: [
      "Patrimonio culturale",
      "Opere",
      "Beni mobili",
      "Beni culturali",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/EDUC",
    ],
  },
  {
    type: AT_ONTOLOGY,
    uri: "https://w3id.org/italia/onto/HER",
    title: "Ontologia sull'Alta Formazione, Ricerca e Innovazione",
    desc: "Questa è l'ontologia del profilo di italiano sull'alta formazione, ricerca e innovazione. Essa nasce come versione per OntoPiA dell'ontologia sviluppata nell'ambito del progetto Toscana Open Research (http://www.toscanaopenresearch.it/) disponibile in https://ontology-documentation-toscana-public.s3-eu-west-1.amazonaws.com/index.html#unics_miur_scholars",
    rightsHolder: "https://w3id.org/italia/data/public-organization/r_toscan",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    contactPoint: "https://w3id.org/italia/data/contact-point/onto-agid",
    publisher: "https://w3id.org/italia/data/public-organization/agid",
    keywords: [
      "Studenti",
      "Progetti di ricerca",
      "Ricerca pubblica",
      "Peronale universitario",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/EDUC",
    ],
  },
  {
    type: AT_ONTOLOGY,
    uri: "https://w3id.org/italia/onto/IoT",
    title: "Ontologia Eventi IoT - Profilo applicativo italiano",
    desc: "Questa è l'ontologia di eventi IoT. Essa può essere utilizzata per esempio per rappresentare serie temporali e misure di sensoristica di vario tipo. Attualmente l'ontologia include classi specializzate per la modellazione di flussi di traffico.",
    rightsHolder: "http://spcdata.digitpa.gov.it/Amministrazione/agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    contactPoint: "https://w3id.org/italia/data/contact-point/onto-agid",
    publisher: "http://spcdata.digitpa.gov.it/Amministrazione/agid",
    keywords: [
      "Misurazione",
      "flusso di traffico",
      "Internet of Things",
      "Osservazione",
      "Sensore",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/TECH",
      "http://publications.europa.eu/resource/authority/data-theme/TRAN",
    ],
  },
  {
    type: AT_ONTOLOGY,
    uri: "https://w3id.org/italia/onto/MU",
    title: "Ontologia Valori e Unità di Misura - Profilo applicativo italiano",
    desc: "Questa è l'ontologia per la modellazione di valori e unità di misura",
    rightsHolder:
      "http://spcdata.digitpa.gov.it/browse/page/Amministrazione/agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    contactPoint: "https://w3id.org/italia/data/contact-point/onto-agid",
    publisher: "http://spcdata.digitpa.gov.it/browse/page/Amministrazione/agid",
    keywords: ["Unità di misura"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/TECH",
    ],
  },
  {
    type: AT_ONTOLOGY,
    uri: "https://w3id.org/italia/onto/POI",
    title: "Ontologia dei Punti di Interesse - Profilo applicativo italiano",
    desc: "Questa è l'ontologia del profilo  italiano sui Punti di Interesse (Point of Interest - Italian Application Profile - POI-AP_IT). Esempi di punti di interesse possono essere: luoghi della cultura, un incrocio stradale, una farmacia, un centro commerciale, una fermata dell'autobus, ecc.",
    rightsHolder: "http://spcdata.digitpa.gov.it/Amministrazione/agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    contactPoint: "https://w3id.org/italia/data/contact-point/onto-agid",
    publisher: "http://spcdata.digitpa.gov.it/Amministrazione/agid",
    keywords: ["luogo di interesse", "punto di interesse"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/REGI",
    ],
  },
  {
    type: AT_ONTOLOGY,
    uri: "https://w3id.org/italia/onto/POT",
    title:
      "Ontologia dei Prezzi, Offerte e Biglietti - Profilo applicativo italiano",
    desc: "Questo il profilo applicativo italiano dell'ontologia dei prezzi, offerte e biglietti. L'ontologia può essere usata per rappresentare i dati relativi ai prezzi di un prodotto, le offerte e i biglietti, necessari per partecipare a eventi o aver accesso a determinati luoghi pubblici.",
    rightsHolder: "http://spcdata.digitpa.gov.it/Amministrazione/agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    contactPoint: "https://w3id.org/italia/data/contact-point/onto-agid",
    publisher: "http://spcdata.digitpa.gov.it/Amministrazione/agid",
    keywords: [
      "biglietto",
      "prezzi",
      "prezzi",
      "offerta",
      "offerta",
      "biglietto",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/SOCI",
      "http://publications.europa.eu/resource/authority/data-theme/EDUC",
      "http://publications.europa.eu/resource/authority/data-theme/TRAN",
    ],
  },
  {
    type: AT_ONTOLOGY,
    uri: "https://w3id.org/italia/onto/Project",
    title:
      "Project-AP_IT: Profilo applicativo italiano - Ontologia dei progetti",
    desc: "Questa è l'ontologia del profilo applicativo italiano sui progetti pubblici",
    rightsHolder: "https://w3id.org/italia/data/public-organization/agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    contactPoint: "https://w3id.org/italia/data/contact-point/onto-agid",
    publisher: "https://w3id.org/italia/data/public-organization/agid",
    keywords: ["cup", "progetto", "progetti", "progetto", "cup", "progetti"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/GOVE",
      "http://publications.europa.eu/resource/authority/data-theme/TECH",
    ],
  },
  {
    type: AT_ONTOLOGY,
    uri: "https://w3id.org/italia/onto/Route",
    title: "Ontologia dei Percorsi - Profilo applicativo italiano",
    desc: "Questo il profilo applicativo italiano dell'ontologia sui percorsi. Essi sono i percorsi di transito che possono essere seguiti mediante l'uso di diversi mezzi di trasporto come per esempio i percorsi degli autobus, i percorsi della metro, i percorsi a piedi, i percorsi a cavallo.",
    rightsHolder: "http://spcdata.digitpa.gov.it/Amministrazione/m_bac",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    contactPoint: "https://w3id.org/italia/data/contact-point/onto-dgt",
    publisher: "https://w3id.org/italia/data/support-unit/cnr-Z6HZEH/stlab",
    keywords: ["Pianificazione viaggio", "Percorso", "Tappa"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/EDUC",
      "http://publications.europa.eu/resource/authority/data-theme/TRANS",
    ],
  },
  {
    type: AT_ONTOLOGY,
    uri: "https://w3id.org/italia/onto/TI",
    title: "Ontologia del Tempo - Profilo applicativo italiano",
    desc: "Questo il profilo applicativo italiano dell'ontologia sul tempo. Esso definisce concetti quali Intervallo di Tempo, istante temporale, evento indicizzato nel tempo",
    rightsHolder: "http://spcdata.digitpa.gov.it/Amministrazione/agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    contactPoint: "https://w3id.org/italia/data/contact-point/onto-agid",
    publisher: "http://spcdata.digitpa.gov.it/Amministrazione/agid",
    keywords: ["intervallo temporale", "giorno", "tempo", "anno", "mese"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/TECH",
    ],
  },
  {
    type: AT_ONTOLOGY,
    uri: "https://w3id.org/italia/onto/Transparency",
    title:
      "Ontologia dell'Amministrazione Trasparente - profilo applicativo italiano",
    desc: "Questo è il profilo applicativo italiano dell'Ontologia degli Obblighi della Trasparenza. L'ontologia di OntoPiA implementa le disposizioni in merito all'obbligo di pubblicazione di contenuti informativi nella sezione 'Amministrazione Trasparente' dei siti istituzioonali delle publiche amministrazioni. Questa versione dell'ontologia è in attesa di essere visionata da ANAC.",
    rightsHolder: "http://spcdata.digitpa.gov.it/Amministrazione/agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    contactPoint: "http://dati.gov.it/data/resource/ContactPoint/voc_AgID",
    publisher: "http://spcdata.digitpa.gov.it/Amministrazione/agid",
    keywords: [
      "trasparenza PA",
      "trasparenza pubblica amministrazione",
      "trasparenza",
      "trasparenza pa",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/GOVE",
      "http://publications.europa.eu/resource/authority/data-theme/TECH",
    ],
  },
];

export function getOntologyMetadata({ pattern = "" } = {}) {
  let result = ontos;
  if (pattern) {
    const matcher = propertyMatcher(pattern);

    result = result.filter((i) => {
      if (i.keywords.some(matcher)) return true;

      if (matcher(i.desc)) return true;

      return false;
    });
  }

  return result;
}
