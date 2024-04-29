import React from "react";
import Anchor from "../../../common/Anchor/Anchor";
const FaqBody = () => {
  return (
    <div
      data-testid="FaqBody"
      className="container-fluid schemaPadding pb-5 pt-5"
    >
      <div className="row mx-0">
        <div className="col-lg-7">
          <div className="accordion" id="accordionExample1">
            <div className="accordion-item">
              <h2 className="accordion-header " id="heading1">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="true"
                  aria-controls="heading1"
                >
                  Che cos’è il catalogo nazionale per l’interoperabilità
                  semantica?
                </button>
              </h2>
              <div
                id="collapse1"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample1"
                role="region"
                aria-labelledby="heading1"
              >
                <div className="accordion-body">
                  È un catalogo previsto dall’investimento 1.3.1 del Piano
                  Nazionale di Ripresa e Resilienza (PNNR) che contiene
                  ontologie, vocabolari controllati e schemi dati della Pubblica
                  Amministrazione italiana, accessibile a chiunque voglia
                  consultare o utilizzare degli asset semantici per garantire
                  l&apos;interoperabilità semantica e sviluppare servizi
                  digitali semanticamente e sintatticamente coerenti.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header " id="heading2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapse2"
                >
                  Cos’è l’interoperabilità semantica?
                </button>
              </h2>
              <div
                id="collapse2"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample1"
                role="region"
                aria-labelledby="heading2"
              >
                <div className="accordion-body">
                  L&apos;interoperabilità semantica è la capacità di garantire
                  che il formato e il significato delle informazioni scambiate
                  siano preservati e compresi durante gli scambi tra le parti
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header " id="heading3">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapse3"
                >
                  A chi si rivolge il catalogo?
                </button>
              </h2>
              <div
                id="collapse3"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample1"
                role="region"
                aria-labelledby="heading3"
              >
                <div className="accordion-body">
                  Il catalogo si rivolge a tutti gli enti della Pubblica
                  Amministrazione e ai privati che vogliono ricercare,
                  consultare e utilizzare asset semantici e, in particolare,
                  alle persone che sviluppano servizi digitali e quelle esperte
                  di semantica.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header " id="heading4">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapse4"
                >
                  A cosa serve e quali sono le sue funzionalità?
                </button>
              </h2>
              <div
                id="collapse4"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample1"
                role="region"
                aria-labelledby="heading4"
              >
                <div className="accordion-body">
                  <div>
                    Il catalogo serve a ricercare, consultare e riutilizzare
                    ontologie, vocabolari controllati e schemi dati. È
                    particolarmente utile agli enti che creano servizi digitali
                    basati su API di altri enti per poter riutilizzare
                    direttamente sia i modelli semantici che i vocabolari
                    controllati esposti dal catalogo.<br></br>
                  </div>

                  <div className="my-1">
                    Le sue funzionalità principali sono: <br></br>
                  </div>
                  <ul>
                    <li className="mt-1">
                      <strong>harvesting:</strong> scarica automaticamente gli
                      asset semantici dai repository ufficiali pubblicati dai
                      vari enti;
                    </li>
                    <li className="mt-1">
                      <strong>ricerca:</strong> permette di ricercare e
                      consultare asset semantici in modo semplice;
                    </li>
                    <li className="my-1">
                      <strong>consultazione:</strong> espone <u>API REST</u> per
                      la ricerca e per la lettura dei vocabolari controllati ed
                      espone uno <u>SPARQL endpoint</u> per la ricerca di
                      ontologie.
                    </li>
                  </ul>
                  <div className="mt-1">
                    Inoltre, è in fase di sviluppo una funzionalità che
                    permetterà di validare la semantica e la sintassi delle API
                    REST rispetto ai contenuti semantici pubblicati nel
                    catalogo. Questa funzionalità sarà rilasciata a partire da
                    giugno 2022.
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header " id="heading5">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  Quali problemi risolve il catalogo?
                </button>
              </h2>
              <div
                id="collapse5"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample1"
                role="region"
                aria-labelledby="heading5"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      Scalabilità: ogni nuovo servizio richiede lo sviluppo di
                      codice ad-hoc per validare, interpretare ed uniformare i
                      dati ricevuti da enti diversi e l’interazione tra enti per
                      verificare il significato e il contesto dei dati non è
                      scalabile.
                    </li>
                    <li className="mt-1">
                      Riuso degli schemi: gli schemi dati non sono condivisi e
                      quindi non sono facilmente riutilizzabili (né gli schemi,
                      né il codice collegato). Il catalogo li rende
                      riutilizzabili.
                    </li>
                    <li className="mt-1">
                      Interpretazione dei dati: il significato dei dati
                      scambiati è ambiguo e spesso lasciato a interpretazione,
                      con il rischio di inconsistenze anche sintattiche nei vari
                      dataset e le API non sono semanticamente e sintatticamente
                      interoperabili.
                    </li>
                    <li className="mt-1">
                      Cultura della semantica: lo sviluppo e pubblicazione di
                      schemi avviene spesso in una logica a silos, impedendo
                      l’interoperabilità semantica tra basi dati e servizi.
                    </li>
                    <li className="mt-1">
                      Creazione di nuovi servizi: risulta difficile creare nuovi
                      servizi se i dati scambiati non hanno un significato
                      chiaro (ad esempio, se si confonde il nucleo familiare con
                      la famiglia anagrafica, o un tampone molecolare con uno
                      rapido).
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header " id="heading6">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse6"
                  aria-expanded="false"
                  aria-controls="collapse6"
                >
                  Qual è un caso d’uso di esempio?
                </button>
              </h2>
              <div
                id="collapse6"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample1"
                role="region"
                aria-labelledby="heading6"
              >
                <div className="accordion-body">
                  Immaginiamo un comune che deve creare dei moduli online per
                  dei servizi digitali. Senza il catalogo, il comune e i suoi
                  fornitori potrebbero ogni volta definire i possibili titoli di
                  studio e la loro sintassi, con il rischio di generare
                  possibili incoerenze fra diversi moduli e rendere la
                  comprensione più complessa per i cittadini. Grazie al
                  catalogo, potranno invece riutilizzare, tramite API, i valori
                  pubblicati dal catalogo a partire dal vocabolario nazionale
                  education-level.csv.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header " id="heading7">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse7"
                  aria-expanded="false"
                  aria-controls="collapse7"
                >
                  Chi pubblica i contenuti? I dati provengono da fonti
                  ufficiali?
                </button>
              </h2>
              <div
                id="collapse7"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample1"
                role="region"
                aria-labelledby="heading7"
              >
                <div className="accordion-body">
                  Le ontologie, i vocabolari controllati e gli schemi dati sono
                  scaricati dai repository ufficiali (e.g. GitHub o GitLab)
                  degli enti della Pubblica Amministrazione. Il catalogo scarica
                  i dati contenuti nella directory che ha subìto
                  l&apos;aggiornamento più recente. I dati provengono da fonti
                  ufficiali in quanto ogni ente è titolare dei metadati
                  pubblicati.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header " id="heading8">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse8"
                  aria-expanded="false"
                  aria-controls="collapse8"
                >
                  I dati contenuti rispettano le norme vigenti sulla privacy?
                </button>
              </h2>
              <div
                id="collapse8"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample1"
                role="region"
                aria-labelledby="heading8"
              >
                <div className="accordion-body">
                  I dati contenuti e pubblicati sul catalogo sono asset
                  semantici e per definizione non contengono dati personali, ma
                  solo metadati. Di conseguenza, i dati sono distribuiti in
                  formato open e con licenza aperta CC-BY 4.0. Qualsiasi dato
                  pubblicato nel catalogo è anche disponibile nei repository
                  resi pubblici dagli enti.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header " id="heading9">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse9"
                  aria-expanded="false"
                  aria-controls="collapse9"
                >
                  Il catalogo nazionale è open source? Come posso contribuire al
                  suo sviluppo?
                </button>
              </h2>
              <div
                id="collapse9"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample1"
                role="region"
                aria-labelledby="heading9"
              >
                <div className="accordion-body">
                  Si, le componenti di <em>front-end</em> e <em>back-end</em>{" "}
                  del catalogo sono open source ed accessibili nei{" "}
                  <em>repository</em>
                  <br></br>
                  <Anchor
                    href={
                      "https://github.com/teamdigitale/dati-semantic-backend"
                    }
                  >
                    https://github.com/teamdigitale/dati-semantic-backend
                  </Anchor>{" "}
                  <br></br>
                  <Anchor
                    href={
                      "https://github.com/teamdigitale/dati-semantic-frontend"
                    }
                  >
                    {" "}
                    https://github.com/teamdigitale/dati-semantic-frontend
                  </Anchor>
                  <br></br>
                  Puoi contribuire al miglioramento del catalogo aprendo una
                  issue in uno dei <em>repository</em> menzionati.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header " id="heading10">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse10"
                  aria-expanded="false"
                  aria-controls="collapse10"
                >
                  Come faccio ad utilizzare il catalogo?
                </button>
              </h2>
              <div
                id="collapse10"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample1"
                role="region"
                aria-labelledby="heading10"
              >
                <div className="accordion-body">
                  La consultazione del catalogo non necessita di autenticazione:
                  chiunque voglia consultare degli asset semantici lo può fare
                  tramite all&apos;indirizzo{" "}
                  <Anchor href={"https://schema.gov.it/"}>schema.gov.it</Anchor>
                  . Inoltre, chiunque voglia scaricare i dati in modalità
                  machine to machine potrà usare le API REST (per quanto
                  riguarda i vocabolari controllati) oppure lo SPARQL endpoint
                  (per interrogare le ontologie).
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header " id="heading11">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse11"
                  aria-expanded="false"
                  aria-controls="collapse11"
                >
                  Come posso contribuire alla pubblicazione di nuovi asset
                  semantici?
                </button>
              </h2>
              <div
                id="collapse11"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample1"
                role="region"
                aria-labelledby="heading11"
              >
                <div className="accordion-body">
                  Le pubbliche amministrazioni possono contribuire pubblicando
                  asset semantici nei loro <em>repository</em> ufficiali. Per
                  essere conformi con le regole di <em>harvesting</em> e di
                  pubblicazione della piattaforma, le pubbliche amministrazioni
                  che creano e pubblicano asset semantici nei loro{" "}
                  <em>repository</em> devono seguire le indicazioni fornite
                  nella sezione <u>“Come contribuire”</u>.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header " id="heading12">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse12"
                  aria-expanded="false"
                  aria-controls="collapse12"
                >
                  Chi gestisce il catalogo?
                </button>
              </h2>
              <div
                id="collapse12"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample1"
                role="region"
                aria-labelledby="heading12"
              >
                <div className="accordion-body">
                  Il progetto è coordinato dal Dipartimento per la
                  trasformazione digitale, mentre la piattaforma è gestita e
                  mantenuta da ISTAT.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header " id="heading13">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse13"
                  aria-expanded="false"
                  aria-controls="collapse13"
                >
                  Chi gestisce e governa la pubblicazione di asset semantici?
                </button>
              </h2>
              <div
                id="collapse13"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample1"
                role="region"
                aria-labelledby="heading13"
              >
                <div className="accordion-body">
                  In futuro sarà costituito un comitato centrale per la
                  governance della semantica nazionale costituito da vari enti
                  centrali della pubblica amministrazione. Questo comitato
                  supervisionerà i vari enti esperti di dominio nel processo di
                  creazione e pubblicazione degli asset semantici, e garantirà
                  la coerenza e l’integrità dei contenuti pubblicati.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FaqBody.propTypes = {};

FaqBody.defaultProps = {};

export default FaqBody;
