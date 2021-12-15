import { routes } from "../../../../services/routes";
import "./ProjectBody.css";

const ProjectBody = () => {
  return (
    <div data-testid="ProjectBody" className="project-body container mt-5">
      <h4>Introduzione</h4>
      <div className="content">
        Schema è catalogo nazionale della semantica dei dati, nasce dalla
        collaborazione tra la Presidenza del Consiglio dei Ministri,
        l&apos;ISTAT, Agid, ISTC-CNR e PagoPa. Il catalogo consentirà di
        facilitare la ricerca e il riuso di asset semantici (includendo
        ontologie, schemi dati e vocabolari controllati), e di supportare lo
        sviluppo di API semanticamente e sintatticamente interoperabili.
      </div>

      <h4>Enti attuatori</h4>
      <div className="content">
        Nell’ambito dei progetti del Piano Nazionale di Ripresa e Resilienza, il
        Dipartimento per la Trasformazione Digitale come soggetto titolare della
        misura ha affidato la realizzazione del catalogo ad ISTAT. ISTAT come
        ente attuatore gestisce e mantiene il catalogo mentre gli enti esperti
        di dominio sono responsabili e titolari dei contenuti pubblicati. Il
        progetto nasce dalla collaborazione del Dipartimento per la
        Trasformazione Digitale, Istat, L&apos;istituto di Scienze e Tecnologie
        della Cognizione del Consiglio Nazionale delle Ricerche e AGID.
      </div>

      <h4>Quadro normativo</h4>
      <div className="content">
        <p>
          Da un punto di vista normativo, la necessità di garantire
          l’interoperabilità semantica nella pubblica amministrazione trova
          riscontro sia nel contesto europeo che nazionale. A livello europeo
          come suggerito dall’insieme di raccomandazioni espresso nello European
          Interoperability Framework, l&apos;interoperabilità semantica
          garantisce che sia il formato che il significato delle informazioni
          scambiate siano perfettamente preservati e compresi durante gli scambi
          tra le parti: in altre parole &ldquo;ciò che viene inviato è ciò che
          viene compreso&rdquo;.
        </p>

        <p>
          Nel quadro nazionale invece, questo bisogno è previsto dal Piano
          triennale per l’informatica dove si indica che, per favorire lo
          scambio di informazioni tra pubbliche amministrazioni è necessario
          definire una data governance per armonizzare e standardizzare codici e
          nomenclature ricorrenti, identificare e definire modelli di dati
          (ontologie e vocabolari controllati) condivisi, al fine di modellare e
          metadatare i dati in domini applicativi specifici favorendo
          l’uniformità dei dati trasversali (ad es. persone, organizzazioni,
          servizi e luoghi).
        </p>
      </div>

      <h4>Vantaggi del progetto</h4>
      <div className="content">
        <p>
          Il catalogo deve permettere di ricercare e utilizzare asset semantici
          condivisi, semplificando la condivisione di dati tra enti e
          facilitando richieste coerenti di dati (nei casi in cui sarà
          necessario raccoglierli). In una fase iniziale, il catalogo riutilizza
          e pubblica la rete di ontologie e di vocabolari controllati costruita
          in passato da Agid. Successivamente, altri enti della pubblica
          amministrazione, sentito il comitato centrale per la governance della
          semantica nazionale, potranno pubblicare dei nuovi contenuti sui
          repository ufficiali e quindi sul catalogo.
        </p>
        <p>
          La piattaforma quindi cataloga, rendendoli ricercabili e riusabili:
          <ul>
            <li>gli schemi dati più rilevanti creati dagli enti</li>
            <li>
              le ontologie, che contengono la descrizione dei concetti
              principali utili a progettare servizi semanticamente
              interoperabili come ad esempio il concetto di Persona, di
              Servizio, etc..
            </li>
            <li>
              i vocabolari controllati, che includono liste, codici e
              nomenclature ricorrenti utilizzati per valorizzare i concetti come
              ad esempio il vocabolario dei livelli di studio, dei comuni, etc..
            </li>
          </ul>
        </p>
      </div>

      <div className="mt-4 mb-5">
        <a className="btn btn-primary mr-4" href={routes.explore()}>
          Esplora il catalogo
        </a>
      </div>
    </div>
  );
};

ProjectBody.propTypes = {};
ProjectBody.defaultPropTypes = {};

export default ProjectBody;
