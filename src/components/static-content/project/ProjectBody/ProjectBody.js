import { routes } from "../../../../services/routes";
import "./ProjectBody.css";
import { node, string } from "prop-types";
import Anchor from "../../../common/Anchor/Anchor";

const ProjectBodySection = ({ title, children }) => {
  return (
    <>
      <h4>{title}</h4>
      <div className="content pb-3">{children}</div>
    </>
  );
};

ProjectBodySection.propTypes = {
  title: string.isRequired,
  children: node,
};
ProjectBodySection.defaultPropTypes = {};

const ProjectBody = () => {
  return (
    <div data-testid="ProjectBody" className="project-body container">
      <div className="ml-5 pl-5 pt-5">
        <ProjectBodySection title="Introduzione">
          Schema è catalogo nazionale della semantica dei dati, nasce dalla
          collaborazione tra la Presidenza del Consiglio dei Ministri,
          l&apos;ISTAT, Agid, ISTC-CNR e PagoPa. Il catalogo consentirà di
          facilitare la ricerca e il riuso di asset semantici (includendo
          ontologie, schemi dati e vocabolari controllati), e di supportare lo
          sviluppo di API semanticamente e sintatticamente interoperabili.
        </ProjectBodySection>

        <ProjectBodySection title="Enti attuatori">
          Nell’ambito dei progetti del Piano Nazionale di Ripresa e Resilienza,
          il Dipartimento per la Trasformazione Digitale come soggetto titolare
          della misura ha affidato la realizzazione del catalogo ad ISTAT. ISTAT
          come ente attuatore gestisce e mantiene il catalogo mentre gli enti
          esperti di dominio sono responsabili e titolari dei contenuti
          pubblicati. Il progetto nasce dalla collaborazione del Dipartimento
          per la Trasformazione Digitale, Istat, L&apos;istituto di Scienze e
          Tecnologie della Cognizione del Consiglio Nazionale delle Ricerche e
          AGID.
        </ProjectBodySection>

        <ProjectBodySection title="Quadro normativo">
          <p>
            Da un punto di vista normativo, la necessità di garantire
            l’interoperabilità semantica nella pubblica amministrazione trova
            riscontro sia nel contesto europeo che nazionale. A livello europeo
            come suggerito dall’insieme di raccomandazioni espresso nello
            European Interoperability Framework, l&apos;interoperabilità
            semantica garantisce che sia il formato che il significato delle
            informazioni scambiate siano perfettamente preservati e compresi
            durante gli scambi tra le parti: in altre parole &ldquo;ciò che
            viene inviato è ciò che viene compreso&rdquo;.
          </p>
          <p>
            Nel quadro nazionale invece, questo bisogno è previsto dal Piano
            triennale per l’informatica dove si indica che, per favorire lo
            scambio di informazioni tra pubbliche amministrazioni è necessario
            definire una data governance per armonizzare e standardizzare codici
            e nomenclature ricorrenti, identificare e definire modelli di dati
            (ontologie e vocabolari controllati) condivisi, al fine di modellare
            e metadatare i dati in domini applicativi specifici favorendo
            l’uniformità dei dati trasversali (ad es. persone, organizzazioni,
            servizi e luoghi).
          </p>
        </ProjectBodySection>

        <ProjectBodySection title="Vantaggi del progetto">
          <p>
            Il catalogo deve permettere di ricercare e utilizzare asset
            semantici condivisi, semplificando la condivisione di dati tra enti
            e facilitando richieste coerenti di dati (nei casi in cui sarà
            necessario raccoglierli). In una fase iniziale, il catalogo
            riutilizza e pubblica la rete di ontologie e di vocabolari
            controllati costruita in passato da Agid. Successivamente, altri
            enti della pubblica amministrazione, sentito il comitato centrale
            per la governance della semantica nazionale, potranno pubblicare dei
            nuovi contenuti sui repository ufficiali e quindi sul catalogo.
          </p>
          <div>
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
                nomenclature ricorrenti utilizzati per valorizzare i concetti
                come ad esempio il vocabolario dei livelli di studio, dei
                comuni, etc..
              </li>
            </ul>
          </div>
        </ProjectBodySection>

        <ProjectBodySection title="Come utilizzare il catalogo?">
          <p>
            Il catalogo serve a ricercare, consultare e riutilizzare ontologie,
            vocabolari controllati e schemi dati. In particolare è rivolto a
            quegli enti che creano servizi digitali basati su API di altri enti
            per poter riutilizzare direttamente sia i modelli semantici che i
            vocabolari controllati esposti dal catalogo.
          </p>
          <p>
            Gli utenti del catalogo possono consultare assets semantici
            effettuando ricerche con parole chiave (es. persona, titoli di
            studio) e filtrando i risultati per tipologia di dati (es.
            ontologie, schemi) e per categorie (es. energia, ambiente).
          </p>
          <p>
            Nelle pagine di dettaglio, gli sviluppatori e gli esperti di
            semantica possono ricercare ed accedere ai contenuti dei vocabolari
            controllati tramite API REST e consultare il complesso dei contenuti
            semantici tramite uno SPARQL endpoint.
            <br />
            Puoi consultare le specifiche OAS3 in{" "}
            <Anchor href={routes.apiDocs()}>questa pagina</Anchor>.
          </p>
          <p>
            <br />
            Per quanto riguarda gli schemi dati, la pagina di dettaglio mostra i
            contenuti dello schema dati riutilizzabile: questo può essere
            utilizzato ad esempio per strutturare una banca dati coerente con il
            formato e il significato condiviso a livello nazionale, o per
            implementare nuove API.
          </p>
          <p>
            Inoltre, a partire da Giugno 2022 gli sviluppatori di API potranno
            validare la semantica delle proprie API.
          </p>
        </ProjectBodySection>

        <div className="mt-4 mb-5">
          <a className="btn btn-primary mr-4" href={routes.explore()}>
            Esplora il catalogo
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectBody.propTypes = {};
ProjectBody.defaultPropTypes = {};

export default ProjectBody;
