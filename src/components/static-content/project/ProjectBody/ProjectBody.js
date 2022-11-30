import { routes } from "../../../../services/routes";
import "./ProjectBody.css";
import Anchor from "../../../common/Anchor/Anchor";
import ContentParagraph from "../../../common/ContentParagraph/ContentParagraph";
import ProjectIndex from "../ProjectIndex/ProjectIndex";

const ProjectBody = () => {
  const handleChangeSection = (id) => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  };
  return (
    <div data-testid="ProjectBody" className="project-body container-fluid">
      <div className="row mx-0">
        <div className="col-xl-3 mt-5 px-xl-3">
          <ProjectIndex changeSection={(ev) => handleChangeSection(ev)} />
        </div>
        <div className="col-lg-5 mt-5 pt-2">
          <div className="">
            <p id="INTRODUZIONE"></p>
            <ContentParagraph title="Introduzione">
              <p>
                Schema è il catalogo nazionale della semantica dei dati. Il
                catalogo facilita la ricerca e il riuso di asset semantici, come
                ontologie, schemi dati e vocabolari controllati, e li mette a
                disposizione di chi deve sviluppare API semanticamente e
                sintatticamente interoperabili. L&apos;interoperabilità
                semantica garantisce che sia il formato che il significato delle
                informazioni scambiate siano perfettamente preservati e compresi
                durante gli scambi tra le parti. In altre parole, “ciò che viene
                inviato è ciò che viene compreso”.
              </p>
              <div>
                <p>
                  La piattaforma cataloga, rendendoli ricercabili e riusabili:
                </p>
                <ul>
                  <li>
                    <p>
                      gli <strong>schemi</strong> dati più rilevanti creati
                      dagli enti;
                    </p>
                  </li>
                  <li>
                    <p>
                      le <strong>ontologie</strong>, che contengono la
                      descrizione dei concetti principali utili a progettare
                      servizi semanticamente interoperabili, come ad esempio il
                      concetto di Persona, di Servizio, ecc.;
                    </p>
                  </li>
                  <li>
                    <p>
                      i <strong>vocabolari</strong> controllati, che includono
                      liste, codici e nomenclature ricorrenti utilizzati per
                      valorizzare i concetti, come ad esempio il vocabolario dei
                      livelli di studio, dei comuni, ecc.
                    </p>
                  </li>
                </ul>
              </div>
            </ContentParagraph>
            <p id="UTILIZZARE"></p>
            <ContentParagraph title="Come utilizzare il catalogo?">
              <p>
                Il catalogo serve a ricercare, consultare e riutilizzare
                ontologie, vocabolari controllati e schemi dati. È rivolto in
                particolare a tutti gli enti che creano servizi digitali basati
                su API di altri enti, che così possono riutilizzare direttamente
                sia i modelli semantici che i vocabolari controllati esposti dal
                catalogo.
              </p>
              <p>
                Puoi consultare asset semantici effettuando ricerche per
                strumenti semantici (es. ontologie, schemi) e per categorie (es.
                energia, ambiente).
              </p>
              <p>
                Nelle pagine di dettaglio, puoi anche ricercare ed accedere ai
                contenuti dei vocabolari controllati tramite API REST e
                consultare il complesso dei contenuti semantici tramite uno
                SPARQL endpoint. Puoi consultare le specifiche OAS3 in{" "}
                <Anchor href={routes.apiDocs()}>questa pagina</Anchor>.
              </p>
              <p>
                La pagina di dettaglio degli schemi dati mostra i contenuti
                dello schema dati riutilizzabile: questo può essere utilizzato
                ad esempio per strutturare una banca dati coerente con il
                formato e il significato condiviso a livello nazionale, o per
                implementare nuove API.
              </p>
              <p>
                In una fase iniziale, il catalogo riutilizza e pubblica la rete
                di ontologie e di vocabolari controllati costruita in passato da
                AGID. Successivamente, altri enti della pubblica
                amministrazione, sentito il comitato centrale per la governance
                della semantica nazionale, potranno pubblicare dei nuovi
                contenuti sui repository ufficiali e quindi sul catalogo.
              </p>
              <p>
                Inoltre, stiamo lavorando all’integrazione di uno strumento di
                validazione della semantica delle API.
              </p>
            </ContentParagraph>
            <p id="ATTUATORI"></p>
            <ContentParagraph title="Enti attuatori">
              <p>
                Il progetto nasce dalla collaborazione fra Dipartimento per la
                trasformazione digitale, ISTAT, Istituto di Scienze e Tecnologie
                della Cognizione del Consiglio Nazionale delle Ricerche e AGID.
                Nell’ambito dei progetti del Piano Nazionale di Ripresa e
                Resilienza (PNNR), il Dipartimento per la trasformazione
                digitale, in quanto titolare della misura, ha affidato la
                realizzazione, gestione e manutenzione del catalogo ad ISTAT,
                mentre gli enti esperti di dominio sono responsabili e titolari
                dei contenuti pubblicati.
              </p>
            </ContentParagraph>
            <p id="NORMATIVO"></p>
            <ContentParagraph title="Quadro normativo">
              <p>
                Da un punto di vista normativo, la necessità di garantire
                l’interoperabilità semantica nella pubblica amministrazione
                trova riscontro sia nel contesto europeo che nazionale. A
                livello europeo, viene suggerito dall’insieme di raccomandazioni
                espresso nello European Interoperability Framework; nel quadro
                nazionale questo bisogno è previsto dal Piano triennale per
                l’informatica, nel quale si indica che, per favorire lo scambio
                di informazioni tra pubbliche amministrazioni è necessario
                definire una data governance per armonizzare e standardizzare
                codici e nomenclature ricorrenti, identificare e definire
                modelli di dati (ontologie e vocabolari controllati) condivisi.
                In questo modo, Schema favorisce l’uniformità dei dati
                trasversali, come persone, organizzazioni, servizi e luoghi,
                modellando dati e metadati di domini applicativi specifici.
              </p>
            </ContentParagraph>

            {/* <ContentParagraph title="Vantaggi del progetto">
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
        </ContentParagraph> */}

            <div className="mt-4 mb-5">
              <a className="btn btn-primary mr-4" href={routes.search()}>
                Esplora il catalogo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectBody.propTypes = {};
ProjectBody.defaultPropTypes = {};

export default ProjectBody;
