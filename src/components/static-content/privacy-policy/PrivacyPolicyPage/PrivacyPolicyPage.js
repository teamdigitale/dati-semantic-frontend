import "./PrivacyPolicyPage.css";
import Anchor from "../../../common/Anchor/Anchor";
import ContentParagraph from "../../../common/ContentParagraph/ContentParagraph";
import { useEffect } from "react";
import BreadCrumbs from "../../../common/BreadCrumbs/BreadCrumbs";
import BREADCRUMBS from "../../../../services/BreadCrumbsConst";
import EndSection from "../../../common/EndSection/EndSection";
import getAlertMessage from "../../../../services/alertService";

const PrivacyPolicyPage = () => {
  useEffect(() => {
    document.title = "Privacy Policy - Catalogo Nazionale Dati";
  });
  const alertMess = getAlertMessage();
  return (
    <div data-testid="PrivacyPolicyPage">
      <div className="container-fluid px-xl-4 px-lg-2 px-0">
        <div className="row mx-0 px-0">
          <div className="col-lg-12 pl-5">
            <BreadCrumbs arrayBread={BREADCRUMBS.PRIVACYPAGE} />
          </div>
        </div>
      </div>

      {alertMess && alertMess != "" ? (
        <div className={"mantainenceAllertWhite"}>
          <div className="container-fluid schemaPadding py-3">
            <div className="alert alert-warning m-0" role="alert">
              <strong>Avviso di manutenzione</strong> - {alertMess}
            </div>
          </div>
        </div>
      ) : null}
      <div className="container-fluid schemaPadding">
        <div data-testid="PrivacyPolicyBody" className="policy-body">
          <div className="col-lg-6 pt-5">
            <div className="text-center text-sm-left pb-4">
              <h1>Informativa sul trattamento dei dati personali</h1>
            </div>
            <p>
              Le informazioni contenute nella presente pagina sono rese ai sensi
              dell’art. 13 del Regolamento (UE) 2016/679 (di seguito
              Regolamento) e hanno l’obiettivo di descrivere le modalità di
              trattamento dei dati personali degli utenti che consultano
              esclusivamente il presente sito e che afferiscono soltanto ai
              cookie utilizzati. Infatti{" "}
              <Anchor href="https://www.schema.gov.it">
                www.schema.gov.it
              </Anchor>{" "}
              non contiene altri dati personali diversi da questi.
            </p>
            <ContentParagraph title="Titolare del trattamento">
              Titolare del Trattamento è la Presidenza del Consiglio dei
              Ministri - Dipartimento per la Trasformazione Digitale, con sede
              in Largo Pietro di Brazzà 86, 00187 Roma contattabile ai seguenti
              recapiti:
              <div className="pt-4">
                <ul>
                  <li>
                    Email:{" "}
                    <Anchor
                      href="mailto:segreteria.trasformazionedigitale@governo.it"
                      target="_blank"
                    >
                      segreteria.trasformazionedigitale@governo.it
                    </Anchor>
                  </li>
                  <li>
                    PEC:{" "}
                    <Anchor
                      href="mailto:diptrasformazionedigitale@pec.governo.it"
                      target="_blank"
                    >
                      diptrasformazionedigitale@pec.governo.it
                    </Anchor>
                  </li>
                </ul>
              </div>
            </ContentParagraph>
            <ContentParagraph title="Responsabile della protezione dei dati">
              Il Responsabile per la protezione dei dati - Data Protection
              Officer, è contattabile ai seguenti recapiti:
              <div className="pt-4">
                <ul>
                  <li>
                    Email:{" "}
                    <Anchor
                      href="mailto:responsabileprotezionedatipcm@governo.it"
                      target="_blank"
                    >
                      responsabileprotezionedatipcm@governo.it
                    </Anchor>
                  </li>
                  <li>
                    PEC:{" "}
                    <Anchor href="mailto:rpd@pec.governo.it" target="_blank">
                      rpd@pec.governo.it
                    </Anchor>
                  </li>
                </ul>
              </div>
            </ContentParagraph>
            <ContentParagraph title="Base giuridica del trattamento">
              <p>
                I dati personali indicati nella presente pagina sono trattati
                dalla Presidenza del Consiglio per garantire la funzionalità del
                sito.
              </p>
              <p>
                Gli altri dati presenti nel sito sono di natura non personale e
                sono trattati dalla Presidenza del Consiglio dei Ministri
                nell’esecuzione dei compiti di interesse pubblico ad esso
                affidati in attuazione dell’Intervento Catalogo Nazionale Dati
                “Progettazione, creazione e attuazione di un catalogo centrale
                (in open data, secondo i principi del Quadro10 europeo di
                interoperabilità) comprendente schemi di dati, ontologie e
                vocabolari di base a sostegno della creazione e della
                progettazione di servizi digitali interoperabili ” facente parte
                della Misura 1.3.1. della Missione 1 - Componente 1 - Asse 1 del
                PNRR.
              </p>
            </ContentParagraph>
            <ContentParagraph title="Dati trattati e finalità del trattamento">
              <h5 className="bold">Dati di navigazione</h5>
              <p>
                I sistemi informatici e le procedure software preposte al
                funzionamento di questo sito acquisiscono, nel corso del loro
                normale esercizio, alcuni dati personali la cui trasmissione è
                implicita nell&apos;uso dei protocolli di comunicazione di
                Internet.
              </p>
              <p>
                In questa categoria di dati rientrano gli indirizzi IP o i nomi
                a dominio dei computer e dei terminali utilizzati dagli utenti,
                gli indirizzi in notazione URI/URL (Uniform Resource
                Identifier/Locator) delle risorse richieste, l&apos;orario della
                richiesta, il metodo utilizzato nel sottoporre la richiesta al
                server, la dimensione del file ottenuto in risposta, il codice
                numerico indicante lo stato della risposta data dal server (buon
                fine, errore, ecc.) ed altri parametri relativi al sistema
                operativo e all&apos;ambiente informatico dell&apos;utente.
              </p>
              <p>
                Tali dati, necessari per la fruizione dei servizi web, vengono
                anche trattati allo scopo di controllare il corretto
                funzionamento dei servizi offerti.
              </p>
              <p>I dati di navigazione non persistono per più di 7 giorni.</p>
              <h5 className="bold">Cookie e altri sistemi di tracciamento</h5>
              <p>
                Questo sito fa esclusivo uso di cookie tecnici, ossia di file di
                testo depositati sul computer degli utenti, necessari per il
                funzionamento e il monitoraggio del sito stesso. Non viene fatto
                uso di cookie per la profilazione degli utenti.
              </p>
              <p>
                Viene fatto uso di cookie tecnici di sessione (non persistenti),
                in modo strettamente limitato a quanto necessario per la
                navigazione sicura ed efficiente dei siti.
              </p>
              <h5 className="bold">Visualizzazione dei dati</h5>
              <p>
                Circa i trattamenti di dati personali effettuati dai gestori dei
                software utilizzati per la visualizzazione dei metadati qui
                esposti si rimanda alle informazioni da questi rese attraverso
                le rispettive privacy policy. La Presidenza del Consiglio non
                tratta eventuali dati personali conferiti dall’utenza attraverso
                tali software.
              </p>
            </ContentParagraph>
            <ContentParagraph title="Soggetti che possono venire a conoscenza dei dati o ai quali gli stessi possono essere comunicati">
              <p>
                Potranno venire a conoscenza dei dati di navigazione sopra
                descritti esclusivamente i dipendenti della Presidenza del
                Consiglio o i collaboratori, anche esterni, che forniscono
                servizi strumentali alle finalità sopra indicate (es. servizi
                tecnici); tali soggetti agiranno in qualità di Soggetti
                autorizzati a trattare i dati (art. 29 Reg. (UE) 2016/679) o di
                Responsabili del trattamento (art. 28 Reg. (UE) 2016/679).
              </p>
            </ContentParagraph>
            <ContentParagraph title="Diritti degli interessati">
              <p>
                Gli interessati hanno il diritto di ottenere dalla Presidenza
                del Consiglio, nei casi previsti, l’accesso ai propri dati
                personali e la rettifica o la cancellazione degli stessi o la
                limitazione del trattamento che li riguarda o di opporsi al
                trattamento (artt. 15 e ss. del Regolamento), scrivendo ai
                contatti di riferimento del Responsabile della Protezione Dati
                sopra menzionati.
              </p>
            </ContentParagraph>
            <ContentParagraph title="Diritto di reclamo">
              <p>
                Gli interessati che ritengono che il trattamento dei dati
                personali a loro riferiti effettuato attraverso questo sito web
                avvenga in violazione di quanto previsto dal Regolamento hanno
                il diritto di proporre reclamo al Garante per la protezione dei
                dati personali, come previsto dall’art. 77 del Regolamento, o di
                adire le opportune sedi giudiziarie (art. 79 del Regolamento
                stesso).
              </p>
            </ContentParagraph>
          </div>
        </div>
      </div>

      <EndSection type={2} />
    </div>
  );
};

PrivacyPolicyPage.propTypes = {};
PrivacyPolicyPage.defaultPropTypes = {};

export default PrivacyPolicyPage;
