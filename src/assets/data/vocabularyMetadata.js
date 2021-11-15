import { propertyMatcher } from "./data-util";
import { AT_VOCABULARY } from "../../services/dataConstants";

const vocabs = [
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-accommodation-facilities/accommodation-star-rating",
    id: "agid:D.3",
    title: "Classificazione a stelle delle strutture ricettive",
    desc: "Vocabolario controllato della classificazione a stelle per le strutture ricettive",
    modified: "2018-02-11",
    rightsHolder: "agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: [
      "Categoria struttura ricettiva",
      "Stelle",
      "Struttura ricettiva",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/EDUC",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-accommodation-facilities/accommodation-typology",
    id: "agid:D.4",
    title: "Classificazione delle tipologie di strutture ricettive",
    desc: "Classificazione dei tipi di strutture ricettive ai sensi del codice del turismo (Decreto legislativo n°79 del 23 maggio 2011). La classificazione è allineata alla classificazione dei LodgingBusiness del vocabolario schema.org",
    modified: "2018-02-12",
    rightsHolder: "agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: [
      "albergo",
      "ostello",
      "struttura ricettiva",
      "tipologia struttura ricettiva",
      "vacanze",
      "villaggio",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/EDUC",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-culture/cultural-interest-places",
    id: "https://w3id.org/italia/controlled-vocabulary/classifications-for-culture/cultural-interest-places",
    title: "Tassonomia dei luoghi pubblici di interesse culturale",
    desc: "Tassonomia dei luoghi pubblici di interesse culturale. La tassonomia è nata per supportare il lavoro di re-design dei siti web dei comuni. Ove possibile, la tassonomia è allineata a schema.org.",
    modified: "2020-03-04",
    rightsHolder: "http://spcdata.digitpa.gov.it/Amministrazione/m_bac",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: ["luoghi", "luogo", "tempo libero", "tipologia luogo pubblico"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/EDUC",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-culture/subject-disciplines",
    id: "agid:D.12",
    title: "Classificazione degli ambiti disciplinari",
    desc: 'Il tesauro per la categorizzazione degli ambiti disciplinari nasce per individuare delle categorie generali sotto cui indicizzare i luoghi e gli eventi della cultura, per facilitare la ricerca e la navigazione delle informazioni da parte degli utenti.\nLe fonti alla base dell’individuazione delle categorie sono l’elenco dei settori scientifico-disciplinari individuati dal D. M. 4 ottobre 2000 (http://www.miur.it/UserFiles/115.htm), il Thesaurus Pico (http://www.culturaitalia.it/pico/thesaurus/4.3/thesaurus_4.3.0.skos.xml) e il Nuovo Soggettario di Firenze (http://thes.bncf.firenze.sbn.it/ricerca.php).\nGeneralmente si è deciso di utilizzare come fonte della categorizzazione l’elenco MIUR dei settori scientifico-disciplinari (con alcune integrazioni dagli altri Thesauri), ad eccezione dell’ambito Arte, per il quale si è ripresa la suddivisione proposta da Pico http://culturaitalia.it/pico/thesaurus/4.1#arte (cfr. Thesaurus Pico - cosa - aree disciplinari – arte, con le relative suddivisioni in arti applicate, arti visive, arti dello spettacolo), che permette di rappresentare la complessità dei beni artistici con maggiore precisione.\nLe categorie sono state strutturate su tre livelli di specializzazione progressiva, a partire da un primo livello che racchiude 25 macroaree, per arrivare al terzo livello che prevede una specializzazione disciplinare più capillare.\nOgni categoria individuata a partire dalla denominazione del MIUR dei settori scientifico-disciplinari è allineata in maniera "debole", dove possibile, con gli Uri dei termini corrispondenti in PICO  e nel Nuovo Soggettario di Firenze.\nLa versione inglese dei termini del vocabolario è stata ottenuta, per le voci del MIUR, dal sito del CUN (Consiglio Universitario Nazionale); per le voci del tesauro PICO, dalla sua versione RDF/XML.\nNel processo di mapping automatico, su un totale di 447 voci del vocabolario controllato si è trovata perfetta corrispondenza in 422 voci, con 9 duplicazioni, cioè in 9 voci sono state inserite due traduzioni distinte in inglese, una da fonte MIUR e una da fonte PICO, per un totale di 413 traduzioni singole. Le 34 voci rimanenti sono state tradotte manualmente.',
    modified: "2019-01-21",
    rightsHolder: "agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: [
      "ambiti disciplinari",
      "aree disciplinari",
      "categoria prevalente",
      "discipline",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/EDUC",
      "http://publications.europa.eu/resource/authority/data-theme/TECH",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-documents/government-documents-types",
    id: "https://w3id.org/italia/controlled-vocabulary/classifications-for-documents/government-documents-types",
    title:
      "Vocabolario Controllato Tipi di Documenti delle Pubbliche Amministrazioni",
    desc: "Questo è il vocabolario controllato sui tipi di documenti delle pubbliche amministrazioni quali per esempio i documenti dell'albo pretorio dei comuni, gli atti normativi, i documenti di funzionamento interno, ecc. Il vocabolario è nato per rispondere a esigenze di definizione dell'architettura dell'informazione per il progetto di design dei siti dei comuni.",
    modified: "2020-03-09",
    rightsHolder: "https://w3id.org/italia/data/public-organization/agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: [
      "Atti",
      "Atto",
      "Documentazione",
      "Documenti",
      "Documento",
      "Tipi di documenti",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/GOVE",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-documents/municipal-notice-board",
    id: "municipalboard.2019",
    title:
      "Vocabolario Controllato degli Atti Amministrativi Comunali Italiani per l'Albo Pretorio",
    desc: " L'Albo Pretorio è il luogo e lo spazio dove vengono affissi tutti quegli\natti per i quali la legge impone la pubblicazione in quanto debbono essere\nportati a conoscenza del pubblico, come condizione necessaria per acquisire\nefficacia e quindi produrre gli effetti previsti.\nCon la legge n. 69 del 18 giugno 2009 l'albo pretorio si trasforma in un\nluogo \"virtuale\" e accessibile a tutti con un semplice collegamento al sito\nweb di riferimento e tutti i documenti e gli atti che devono essere\ndivulgati e diffusi per acquisire efficacia, vengono resi pubblici tramite\nInternet. Le regole con le quali funziona l'albo pretorio on line non\ncambiano, ma cambia lo strumento: in luogo del documento stampato e affisso\nnello spazio dedicato all'albo pretorio ci sara' un sito web.\nAll'art. 32, commi 1 e 5  (quest'ultimo modificato dall'art.2 del D.L.\n30.12.2009 n.194- cd. Decreto Mille proroghe- convertito, con\nmodificazioni, dalla L. 26.2.2010 n.25) della legge 69/2009 si dispone che\n“(...)  gli obblighi di pubblicazione di atti e provvedimenti\namministrativi aventi effetto di pubblicità legale si intendono assolti con\nla pubblicazione sui propri siti informatici da parte delle amministrazioni\ne degli enti pubblici obbligati”.\nDal 1 gennaio 2011 \"le pubblicità effettuate in forma cartacea non hanno\neffetto di pubblicità legale\". Da tale data l'Albo Pretorio on line va a\nsostituire quindi  in maniera definitiva il vecchio Albo cartaceo.\nNell'Albo pretorio on line va a confluire tutta la documentazione prodotta\n dall'ente come delibere, provvedimenti conclusivi di procedimenti\n amministrativi, atti amministrativi di carattere generale, determinazioni\n dirigenziali, pubblicazioni matrimoniali, avvisi elettorali, varianti al\n piano regolatore, elenco degli abusi edilizi, ordinanze e avvisi\n provenienti dagli uffici comunali, pubblicazioni di atti insoluti o non\n notificati, istanze di cambio nome, elenco oggetti smarriti, bollettino\n lotterie nazionali, avvisi vendite all'asta, licenze commerciali, bandi di\n concorso, gare d'appalto, avvisi disponibilità di alloggi in affitto, atti\n vari su richiesta di altri enti.\n Obiettivo del vocabolario controllato è definire una classificazione delle\n tipologie degli atti amministrativi comunali per l'albo pretorio online.\n Il progetto è frutto di un tavolo di lavoro condiviso durante\n l'hackathon Friuli Venezia Giulia, tenuto a Udine il 15 giugno 2019 a cui\n hanno partecipato civic-hacker e dipendenti di: Regione Autonoma Friuli\n Venezia Giulia, Comune di Cividale del Friuli, Servizi sociali dei comuni\n del Torre, Unione territoriale intercomunale Sile e Meduna, Comune di\n Codroipo, Comune di Trieste, Comune di Udine, Comune di Tavagnacco, Camera\n di Commercio di Pordenone-Udine, Comune di Palermo, Comune di Gorizia,\n Università di Trieste, CNR, Formez, Open Data Sicilia, Aziende private\n (Fonte: http://qualitapa.gov.it/sitoarcheologico/relazioni-con-i-cittadini/open-government/strumenti-della-pa-digitale/albo-pretorio-on-line/)\n    ",
    modified: "2019-07-22",
    rightsHolder: "https://w3id.org/italia/data/public-organization/agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: [
      "albo pretorio",
      "atto amministrativo",
      "comune",
      "documenti",
      "ente locale",
      "ente territoriale",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/GOVE",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-her/all-science-journal",
    id: "https://w3id.org/italia/controlled-vocabulary/classifications-for-her/all-science-journal",
    title:
      "Vocabolario Controllato delle aree disciplinari delle riviste scientifiche (SCOPUS)",
    desc: "Questo è il vocabolario controllato delle classificazioni delle riviste scientifiche. Il vocabolario comprende i codici e il campo e l'area tematica secondo la seguente autorevole fonte SCOPUS - https://service.elsevier.com/app/answers/detail/a_id/15181/supporthub/scopus/. Il vocabolario include anche dei mapping non ufficiali, gestite nel progetto Toscana Open Research, verso il vocabolario controllato ERC Panel - https://w3id.org/italia/controlled-vocabulary/classifications-for-her/erc-panel-h2020-fp",
    modified: "2020-06-23",
    rightsHolder: "https://w3id.org/italia/data/private-organization/elsevier",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: ["Aree tematiche riviste scientifiche", "Riviste scientifiche"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/EDUC",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-her/erc-panel-h2020-fp",
    id: "https://w3id.org/italia/controlled-vocabulary/classifications-for-her/erc-panel-h2020-fp",
    title: "Vocabolario Controllato 2019 ERC EVALUATION PANEL e KEYWORD",
    desc: "Questo è il vocabolario controllato della classificazione ERC Panel e Keyword usato nel contesto del frameowrk programme horizon 2020. La classificazione è gestita dall'European Research Council - https://erc.europa.eu/sites/default/files/document/file/ERC_Panel_structure_2019.pdf. Il vocabolario include dei mapping non ufficiali (esplicitati mediante l'uso di specifiche proprietà dell'ontologia SKOS) sia verso il vocabolario controllato 'academic disciplines' (in particolare per le le aree CUN e i settori scientifici disciplinari) sia verso il vocabolario all science journal (classificazione scopus) per i cosiddetti campi o field. I mapping qui riportati nascono dal lavoro di anni condotto nel contesto del progetto italiano Toscana Open Research.",
    modified: "2020-06-11",
    rightsHolder: "https://w3id.org/italia/data/private-organization/erc",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: [
      "Aree tematiche ERC",
      "Schede di valutazione ERC e parole chiave",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/EDUC",
      "http://publications.europa.eu/resource/authority/data-theme/TECH",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-her/fields-of-research-development",
    id: "https://w3id.org/italia/controlled-vocabulary/classifications-for-her/fields-of-research-development",
    title:
      "Vocabolario Controllato sui campi di ricerca e sviluppo (Classificazione FORD)",
    desc: "Questo è il vocabolario controllato della classificazione internazionale sui campi di ricerca e sviluppo. La classificazione è gestita dall'Unesco - istituto di statistica; essa è utilizzata per classificare le unità e le risorse di R&S per campi di indagine, ovvero per ampi settori di conoscenza basati principalmente sul contenuto dell'oggetto di R&S. I principali campi di R&S sono: - Scienze naturali - Ingegneria e tecnologia - Scienze mediche e sanitarie - Scienze agrarie e veterinarie - Scienze sociali - Scienze umanistiche e delle arti. - http://uis.unesco.org/en/glossary-term/fields-research-and-development-ford",
    modified: "2020-06-06",
    rightsHolder: "https://w3id.org/italia/data/private-organization/unesco",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: ["Settori ricerca e sviluppo"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/EDUC",
      "http://publications.europa.eu/resource/authority/data-theme/TECH",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-indicators/indicator-types",
    id: "https://w3id.org/italia/controlled-vocabulary/classifications-for-indicators/indicator-types",
    title: "Vocabolario Controllato dei tipi di indicatori",
    desc: "Questo è il vocabolario controllato dei tipi di indicatori. GLi indicatori infatti possono essere di processo, di risultato o esito e così via.",
    modified: "2020-05-26",
    rightsHolder: "https://w3id.org/italia/data/public-organization/MDS",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: ["Indicatori", "Tipi di indicatori"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/HEAL",
      "http://publications.europa.eu/resource/authority/data-theme/TECH",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-organizations/S13",
    id: "ISTAT:D.7",
    title:
      "Classificazione ISTAT S13 - elenco unità istituzionali del settore delle Amministrazioni Pubbliche",
    desc: "Versione Linked Open Data della classificazione ISTAT S13 - l'elenco delle unità istituzionali che fanno parte del settore delle Amministrazioni Pubbliche (Settore S13 nel SEC - Sistema europeo dei conti, definito dal Regolamento (Ue) del Parlamento europeo e del Consiglio, n. 549/2013). Il vocabolario è collegato a quello delle forme giuridiche.",
    modified: "2018-07-10",
    rightsHolder:
      "http://spcdata.digitpa.gov.it/browse/page/Amministrazione/ISTAT",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: [
      "Amministrazioni",
      "Amministrazioni Pubbliche",
      "S13",
      "classificazione",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/GOVE",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-organizations/ateco-2007",
    id: "ISTAT:D.6",
    title:
      "Ateco 2007 - Classificazione delle attività economiche - Aggiornamento 2021",
    desc: "Classificazione ISTAT Ateco 2007 - Aggiornamento 2021; la classificazione è usata per catalogare le attività economiche. E' la classificazione di riferimento per il Registro Imprese",
    modified: "2020-12-18",
    rightsHolder: "https://w3id.org/italia/data/public-organization/ISTAT",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: ["ATECO", "Ateco2007", "Attività Economica", "classificazione"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/ECON",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-organizations/cofog-2009",
    id: "ISTAT:D.5",
    title:
      "Classificazione COFOG 2009 - Classificazione internazionale della spesa pubblica per funzione",
    desc: "Versione Linked Open Data della classificazione ISTAT Cofog 2009 - Classificazione internazionale della spesa pubblica per funzione (Cofog)secondo il Sistema dei Conti Europei SEC95",
    modified: "2018-03-14",
    rightsHolder:
      "http://spcdata.digitpa.gov.it/browse/page/Amministrazione/ISTAT",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: ["Cofog", "Cofog2009", "Spesa pubblica", "classificazione"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/GOVE",
      "http://publications.europa.eu/resource/authority/data-theme/ECON",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-organizations/legal-status",
    id: "ISTAT:D.3",
    title: "Vocabolario Controllato Forme Giuridiche",
    desc: "Classificazione delle forme giuridiche per le organizzazioni disciplinate dal diritto pubblico e privato. Il vocabolario controllato è ricavato dalla classificazione ufficiale ISTAT.",
    modified: "2018-02-13",
    rightsHolder:
      "http://spcdata.digitpa.gov.it/browse/page/Amministrazione/ISTAT",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: [
      "impresa",
      "organizzazione",
      "tipo impresa",
      "tipo organizzazione",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/GOVE",
      "http://publications.europa.eu/resource/authority/data-theme/ECON",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-people/education-level",
    id: "ISTAT:D.2",
    title: "Vocabolario Controllato Grado di Istruzione/Titoli di Studio",
    desc: "Questo è il vocabolario controllato sul grado di istruzione/titoli di studio delle persone.",
    modified: "2018-06-05",
    rightsHolder:
      "http://spcdata.digitpa.gov.it/browse/page/Amministrazione/ISTAT",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: ["Grado Istruzione", "Istruzione", "Titolo di studio"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/EDUC",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-people/parental-relationship-types",
    id: "https://w3id.org/italia/controlled-vocabulary/classifications-for-people/parental-relationship-types",
    title: "Vocabolario Controllato Relazioni di Parentela",
    desc: "Questo è il vocabolario controllato sulle relazioni di parentela delle persone. Il vocabolario nella sua versione attuale è ricavato dalla documentazione pubblicata da ISTAT (http://demografiche.istat.it/fileadmin/DCIS/TRACCIATO_E_REGOLE_CONTROLLO_01.pdf) e ripreso anche nel contesto ANPR. Si noti che il vocabolario controllato non è completo; è necessario attendere infatti il raccordo complessivo sulle voci del vocabolario da parte di ISTAT in base a quanto indicato nei regolamenti europei di competenza.",
    modified: "2019-07-18",
    rightsHolder: "https://w3id.org/italia/data/public-organization/ISTAT",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: [
      "Anagrafe",
      "Famiglia",
      "Intestatario foglio di famiglia",
      "Intestatario scheda anagrafica",
      "Persona",
      "Persone",
      "Relazione di parentela",
      "Relazione parentale",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/SOCI",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-people/person-title",
    id: "https://w3id.org/italia/controlled-vocabulary/classifications-for-people/person-title",
    title: "Vocabolario Controllato Titolo della Persona",
    desc: "Questo è il vocabolario controllato sui titoli delle persone. Il vocabolario è pubblicato come versione preliminare in quanto non include le forme più comuni di titoli delle persone.",
    modified: "2019-05-06",
    rightsHolder: "agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: ["Appellativo di una persona", "Titolo di una persona"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/SOCI",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-people/sex",
    id: "ISTAT:D.1",
    title: "Vocabolario Controllato sul Sesso",
    desc: "Questo è il vocabolario controllato sul sesso.",
    modified: "2018-06-06",
    rightsHolder:
      "http://spcdata.digitpa.gov.it/browse/page/Amministrazione/ISTAT",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: ["Genere", "Sesso"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/SOCI",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-public-services/authentication-type",
    id: "agid:D.6",
    title: "Vocabolario Controllato sui tipi di autenticazione",
    desc: "Vocabolario controllato della classificazione dei tipi di autenticazione. Attualmente il vocabolario è utilizzato nell'ambito dello sviluppo del catalogo servizi pubblici. Le traduzioni in tedesco sono state fornite da Ivo Planoetscher della Pronvicia Autonoma di Bolzano",
    modified: "2018-03-14",
    rightsHolder: "agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: [
      "autenticazione",
      "carta nazionale servizi",
      "password",
      "servizio pubblico",
      "spid",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/GOVE",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-public-services/channel",
    id: "agid:D.5",
    title: "Vocabolario controllato dei canali di erogazione dei servizi",
    desc: "Vocabolario controllato della classificazione dei canali di erogazione per i servizi pubblici. Le traduzioni in tedesco sono state fornite da Ivo Planoetscher della Pronvicia Autonoma di Bolzano",
    modified: "2018-10-19",
    rightsHolder: "agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: [
      "canale erogazione",
      "email",
      "pagopa",
      "posta",
      "servizio pubblico",
      "sito web",
      "sportello pa",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/GOVE",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-public-services/interactivity-level",
    id: "agid:D.8",
    title:
      "Vocabolario controllato dei livelli di interattività di un servizio pubblico",
    desc: "Vocabolario controllato dei livelli di interattività per i servizi pubblici. Le traduzioni in tedesco sono state fornite da Ivo Planoetscher della Pronvicia Autonoma di Bolzano",
    modified: "2018-03-13",
    rightsHolder: "agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: ["interattività", "livello interattività", "servizio pubblico"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/GOVE",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-public-services/life-business-event/business-event",
    id: "agid:D.9",
    title:
      "Vocabolario controllato degli eventi di business (evento della vita di un'impresa)",
    desc: "Vocabolario controllato della classificazione degli eventi di business (eventi della vita di un'impresa) utilizzato nel catalogo nazionale dei servizi pubblici. Le traduzioni in tedesco sono state fornite da Ivo Planoetscher della Pronvicia Autonoma di Bolzano",
    modified: "2018-03-14",
    rightsHolder: "agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: [
      "evento",
      "evento della vita",
      "evento di business",
      "servizio pubblico",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/GOVE",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-public-services/life-business-event/life-event",
    id: "agid:D.8",
    title: "Vocabolario controllato degli eventi della vita delle persone",
    desc: "Vocabolario controllato degli eventi della vita delle persone: E' utilizzato nel catalogo nazionale dei servizi pubblici. Le traduzioni in tedesco sono state fornite da Ivo Planoetscher della Pronvicia Autonoma di Bolzano",
    modified: "2018-03-14",
    rightsHolder: "agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: ["evento", "evento della vita", "servizio pubblico"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/GOVE",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-public-services/public-services-subject-matters",
    id: "https://w3id.org/italia/controlled-vocabulary/classifications-for-public-services/public-services-subject-matters",
    title: "Vocabolario Controllato sulle Materie dei Servizi Pubblici",
    desc: "Questo è il vocabolario controllato sulle materie (o tematiche) per i servizi pubblici. Il vocabolario è nato nel constesto del lavoro si design dei siti web comunali per poter classificare meglio i servizi pubblici offerti ai cittadini e alle imprese. Il vocabolario è in relazione al vocabolario europeo Data theme utilizzato nella specifica CPSV-AP_IT per catalogare i temi dei servizi pubblici. E'inoltre in relazione con i vocabolari controllati italiani sugli eventi della vita di cittadini (life event) e imprese (business event). Si fornisce infatti un vero e proprio mapping in RDF tra questo vocabolario e questi menzionati mediante opportuni costrutti dello standard skos come per esempio skos:exactMtch, skos:closeMatch, skos:relatedMatch.",
    modified: "2019-07-31",
    rightsHolder: "https://w3id.org/italia/data/public-organization/agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: ["Servizi pubblici", "Tematiche", "Temi servizi pubblici"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/GOVE",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-public-services/service-input-output",
    id: "agid:D.7",
    title: "Vocabolario controllato degi input e output dei servizi",
    desc: "Classificazione dei tipi di input e output per i servizi. Le traduzioni in tedesco sono state fornite da Ivo Planoetscher della Pronvicia Autonoma di Bolzano",
    modified: "2018-03-14",
    rightsHolder: "agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: [
      "certificazione",
      "codice",
      "documento d'identità",
      "input",
      "output",
      "servizio pubblico",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/GOVE",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-routes/route-types",
    id: "https://w3id.org/italia/controlled-vocabulary/classifications-for-routes/route-types",
    title: "Vocabolario controllato dei mezzi di trasporto per itinerari",
    desc: "Classificazione dei tipi di itinerari sulla base dei diversi mezzi di trasporto. La classificazione nasce principalmente dalla lista definita all'interno della specifica GTFS - Google Transit Feed Specification per la modellazione dei dati sui trasporti pubblici. La classificazione è tuttavia estesa con ulteriori elementi che derivano dai dati sull'atlante dei cammini italiano (http://www.turismo.beniculturali.it/home-cammini-ditalia/).",
    modified: "2018-10-19",
    rightsHolder: "agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: ["Cammini", "Mezzi di trasporto", "Percorsi", "Tipi di Percorso"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/EDUC",
      "http://publications.europa.eu/resource/authority/data-theme/TRAN",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-trasparency/transparency-titulus",
    id: "ANAC:transparency-titulus",
    title: "Vocabolario Controllato Trasparenza PA",
    desc: 'Vocabolario controllato sulla classificazione della trasparenza per le pubbliche amministrazioni. Il contenuto implementa la struttura della sezione "Amministrazione Trasparente" del sito istituzionale delle pubbliche amministrazioni, così come previsto dal Dlgs. n.33/2013 aggiornato dal Dlgs. n.97/2016 e descritto nel dettaglio dalla delibera ANAC 1310/2016. Questo vocabolario è utilizzato dall\'ontologia della trasparenza per le pubbliche amministrazioni.',
    modified: "2020-04-08",
    rightsHolder: "http://spcdata.digitpa.gov.it/Amministrazione/cvtiap",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: [
      "trasparenza",
      "trasparenza PA",
      "trasparenza pa",
      "trasparenza pubblica amministrazione",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/GOVE",
      "http://publications.europa.eu/resource/authority/data-theme/TECH",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-universities/academic-disciplines",
    id: "miur-ssd.2015",
    title:
      "Vocabolario delle Aree CUN, dei Macrosettori, dei Settori Concorsuali e dei Settori Scientifico-Disciplinari delle Università Italiane",
    desc: "I settori scientifico-disciplinari (S.S.D.) sono una distinzione disciplinare utilizzata in Italia per organizzare l'insegnamento superiore. I settori sono introdotti dalla legge n. 341 del 19 novembre 1990, anche se un raggruppamento per aree tematiche esisteva già dal 1973. I settori attuali sono stabiliti dal decreto ministeriale n. 855 del 30 ottobre 2015 e sono in vigore dal 20 novembre 2015, data di pubblicazione sulla Gazzetta Ufficiale. - la versione Linked Open Data del vocabolario dei settori scientifico-disciplinari delle università italiane è stata creata da Giovanni Pirrotta (@gpirrotta), attivista della comunità Open Data Sicilia. Tale versione è stata poi integrata con una serie di allineamenti anche ad altri vocabolari controllati del settore Alta formazione e ricerca, come per esempio i vocabolari ERC panel del framework programme europeo Horizon 2020 e 'fields of research and development (FORD)'. Si noti che gli allineamenti al vocabolario ERC panel non sono ufficiali ma elaborati nel corso degli anni nel contesto del progetto Toscana Open Research dai quali i vocabolari su Alta formazione e ricerca derivano.",
    modified: "2020-07-1",
    rightsHolder: "https://w3id.org/italia/data/public-organization/m_pi",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: [
      "area CUN",
      "macrosettore",
      "settore concorsuale",
      "settore scientifico disciplinare",
      "università",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/EDUC",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-universities/documents-titulus",
    id: "titulus97.2013",
    title: "Titolario di Classificazione delle Università Italiane",
    desc: "Il titolario è l’insieme delle voci logiche gerarchicamente strutturate e articolate in gradi divisionali (titolo/classe/eventuale sottoclasse) stabilite sulla base delle funzioni dell’ente. Ciascun documento, registrato in modalità arrivo, partenza, interno, anche non protocollato, è classificato in ordine alla corrispondenza tra il suo contenuto e la\nrelativa voce attribuibile, desunta dal titolario e successivamente fascicolato (http://www.procedamus.it). Il titolario di classificazione modellato in questo documento si riferisce a quello approvato dal Ministero per i Beni e le Attività Culturali, con nota del 14/12/2012 prot.18708, relativa all'aggiornamento del piano di classificazione delle Università italiane Titulus97 (Edizione 8, in vigore dal 1° gennaio 2013) (http://unidoc.coinfo.net/joomla/titolario2013/DGA%20-%20Approvazione%20titolario%202012.pdf) - la versione Linked Open Data del titolario di classificazione pubblicata è stata creata da Giovanni Pirrotta, attivista della comunità Open Data Sicilia",
    modified: "2018-12-15",
    rightsHolder: "http://unidoc.coinfo.net",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: [
      "archivio",
      "archivio corrente",
      "titolario di classificazione",
      "università",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/EDUC",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/classifications-for-universities/italian-academic-roles",
    id: "https://w3id.org/italia/controlled-vocabulary/classifications-for-universities/italian-academic-roles",
    title: "Vocabolario Controllato dei Ruoli Accademici Italiani",
    desc: "Questo è il vocabolario controllato sui ruoli accademici (da intendersi come posizioni o figure della carriera universitaria, riferita alle attività di ricerca e didattica, a cui si accede tramite procedure concorsuali) definiti nell'ambito italiano dal Ministero dell'Istruzione e Ministero dell'Università e della Ricerca (https://www.miur.gov.it/reclutamento-nelle-universita). Vista la definizione adottata, non vengono inclusi nel vocabolario titoli aggiuntivi che possono essere attribuiti a figure che svolgono già funzioni accademiche, quali il “titolo” di Professore Aggregato, previsto dapprima dalla Legge 4 novembre 2005, n. 230, art. 1, c. 11, successivamente dalla Legge 30 dicembre 2010, n. 240, art. 6, c. 4.",
    modified: "2020-05-20",
    rightsHolder: "https://w3id.org/italia/data/public-organization/m_pi",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: ["Personale università", "Ruoli accademici"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/EDUC",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/licences",
    id: "agid:D.2",
    title: "Vocabolario Controllato sulle licenze",
    desc: "Classificazione delle licenze. Attualmente include le licenze utilizzate nell'ambito dati",
    modified: "2019-07-25",
    rightsHolder: "https://w3id.org/italia/data/public-organization/agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: ["Licenza", "Licenza dati"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/TECH",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/poi-category-classification",
    id: "agid:D.1",
    title: "Vocabolario Controllato sulle categorie dei punti di interesse",
    desc: "Classificazione delle categorie dei punti di interesse. La classificazione è basata sul primo livello della classificazione proposta da Open Street Map. Le traduzioni in tedesco sono state fornite da Ivo Planoetscher della Pronvicia Autonoma di Bolzano",
    modified: "2018-03-13",
    rightsHolder: "agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: ["Categoria", "Punti di Interesse", "Settore"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/EDUC",
      "http://publications.europa.eu/resource/authority/data-theme/REGI",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/public-event-types",
    id: "agid:D.11",
    title: "Classificazione dei tipi di eventi pubblici",
    desc: "Classificazione dei tipi di eventi pubblici. La classificazione è allineata a schema.org",
    modified: "2020-04-08",
    rightsHolder: "https://w3id.org/italia/data/public-organization/agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: ["evento", "evento pubblico", "tempo libero"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/EDUC",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/territorial-classifications/cities",
    id: "https://w3id.org/italia/controlled-vocabulary/territorial-classifications/cities",
    title: "Vocabolario Controllato dei Comuni d'Italia",
    desc: "Vocabolario controllato dei comuni d'Italia. Il vocabolario è stato creato automaticatimamente mediante un processo di generazione di Linked (Open) Data disponibile mediante la Piattaforma Nazionale Digitale dei Dati (PDND). Per creare il vocabolario sono stati usati due diversi dataset sui comuni d'italia conferiti presso la PDND. In particolare si è usato come master dataset l'archivio storico dei comuni pubblicato dal Ministero dell'Interno insieme a Sogei e il dataset dei comuni attualmente in vigore pubblicato da ISTAT. Mediante script dello standard W3C chiamato R2RML, che consente di definire script di conversione da database relazionali a RDF, è stato generato il presente dataset modellato secondo skos e l'ontologia dei luoghi di OntoPiA CLV - Core Location Vocabulary. Sebbene dato aggregato con più fonti, è stato indicato come titolare ISTAT in quanto la tipologia di dato è di titolarità di ISTAT a livello nazionale.",
    modified: "2019-06-18",
    rightsHolder: "https://w3id.org/italia/data/public-organization/ISTAT",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: [
      "Archivio storico dei comuni d'Italia",
      "Città",
      "Comune",
      "Comuni",
    ],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/REGI",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/territorial-classifications/countries/italy",
    id: "agid:D.13",
    title: "Vocabolario Controllato Paese Italia",
    desc: "Vocabolario controllato per descrivere il paese italia",
    modified: "2019-04-03",
    rightsHolder: "agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: ["Italia", "Paese"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/REGI",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/territorial-classifications/geographical-distribution",
    id: "https://w3id.org/italia/controlled-vocabulary/territorial-classifications/geographical-distribution",
    title: "Vocabolario Controllato delle ripartizioni geografiche d'Italia",
    desc: "Vocabolario controllato delle ripartizioni geografiche d'Italia",
    modified: "2019-04-03",
    rightsHolder: "http://spcdata.digitpa.gov.it/Amministrazione/istat",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: ["Ripartizioni Geografiche"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/REGI",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/territorial-classifications/provinces",
    id: "agid:D.14",
    title: "Vocabolario Controllato delle Province d'Italia",
    desc: "Vocabolario controllato delle province d'Italia e relativo codice regione",
    modified: "2019-04-03",
    rightsHolder: "agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: ["Province", "Provincia"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/REGI",
    ],
  },
  {
    type: AT_VOCABULARY,
    uri: "https://w3id.org/italia/controlled-vocabulary/territorial-classifications/regions",
    id: "agid:D.14",
    title: "Vocabolario Controllato delle Regioni d'Italia",
    desc: "Vocabolario controllato delle regioni d'Italia e relativo codice regione",
    modified: "2018-04-12",
    rightsHolder: "agid",
    accrualPeriodicity:
      "http://publications.europa.eu/resource/authority/frequency/IRREG",
    keywords: ["Regione", "Regioni"],
    themes: [
      "http://publications.europa.eu/resource/authority/data-theme/REGI",
    ],
  },
];

export function searchVocabularies({ pattern = "" } = {}) {
  let result = vocabs;
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

export function getVocabularyByUri(uri) {
  return vocabs.find((v) => v.uri === uri);
}
