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
              trattamento dei dati personali degli utenti che consultano il sito{" "}
              <Anchor href="https://www.schema.gov.it">
                www.schema.gov.it
              </Anchor>{" "}
              . Le informazioni che seguono non riguardano altri siti, pagine o
              servizi online raggiungibili tramite link ipertestuali qui
              pubblicati ma riferiti a risorse esterne a questo sito.
            </p>
            <ContentParagraph title="Titolare del trattamento">
              Il Titolare del trattamento è la Presidenza del Consiglio dei
              Ministri - Dipartimento per la trasformazione digitale, con sede
              in Largo Pietro di Brazzà 86, 00187 Roma, contattabile ai seguenti
              recapiti:
              <div className="pt-4">
                <ul>
                  <li>
                    E-mail:{" "}
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
                dalla Presidenza del Consiglio dei Ministri - Dipartimento per
                la trasformazione digitale nell’esecuzione dei propri compiti di
                interesse pubblico o comunque connessi all’esercizio dei propri
                pubblici poteri (art. 6, par. 1, lett. e del GDPR), ivi inclusi
                i poteri ad esso attribuiti in attuazione dell’Intervento
                Catalogo Nazionale Dati “Progettazione, creazione e attuazione
                di un catalogo centrale (in open data, secondo i principi del
                Quadro10 europeo di interoperabilità) comprendente schemi di
                dati, ontologie e vocabolari di base a sostegno della creazione
                e della progettazione di servizi digitali interoperabili”
                facente parte della Misura 1.3.1. della Missione 1 - Componente
                1 - Asse 1 del PNRR. I dati sono altresì trattati per garantire
                la funzionalità del presente sito.
              </p>
            </ContentParagraph>
            <ContentParagraph title="Dati trattati, finalità del trattamento e periodo di conservazione">
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
                anche trattati allo scopo di:
                <ul style={{ listStyleType: "circle" }}>
                  <li>
                    ottenere informazioni statistiche sull’uso dei servizi e i
                    prodotti offerti (numero di accessi, numero di visitatori
                    per fascia oraria o giornaliera, pagine più visitate, numero
                    di click sul contenuto offerto e numero di interazioni con
                    lo stesso, aree geografiche di provenienza degli utenti,
                    ecc.);{" "}
                  </li>
                  <li>
                    controllare il corretto funzionamento dei servizi offerti.
                  </li>
                </ul>
              </p>
              <p>
                I dati di navigazione non persistono per più di centottanta
                giorni.
              </p>
              <h5 className="bold">Chi potrà conoscere i dati personali </h5>
              <p>
                I dati personali raccolti potranno essere oggetto di
                comunicazione a soggetti, interni o esterni alla Presidenza del
                Consiglio dei Ministri, nei confronti dei quali la comunicazione
                si configura come necessaria per il perseguimento delle finalità
                sopra specificate, compresi soggetti terzi che forniscono un
                servizio al Titolare.
              </p>
              <p>
                In particolare, soggetto attuatore del progetto “Catalogo
                Nazionale Dati” per conto della Presidenza del Consiglio –
                Dipartimento per la trasformazione digitale è l’Istituto
                Nazionale di Statistica (Istat), nominato responsabile del
                trattamento ai sensi dell’art. 28 del Regolamento, quale
                fornitore dei servizi tecnologici afferenti a questo sito.
                Ulteriori informazioni possono essere richieste al Titolare,
                scrivendo a{" "}
                <Anchor
                  href="mailto:segreteria.trasformazionedigitale@governo.it"
                  target="_blank"
                >
                  segreteria.trasformazionedigitale@governo.it
                </Anchor>
              </p>
            </ContentParagraph>

            <ContentParagraph title="Diritti degli interessati">
              <p>
                Gli interessati hanno il diritto di ottenere dalla Presidenza
                del Consiglio dei Ministri – Dipartimento per la trasformazione
                digitale, nei casi previsti, l’accesso ai propri dati personali
                e la rettifica o la cancellazione degli stessi o la limitazione
                del trattamento che li riguarda o di opporsi al trattamento
                (artt. 15 e ss. del Regolamento). L’apposita istanza può essere
                presentata utilizzando gli indirizzi di posta sopra specificati.
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
            <ContentParagraph title="Cookie e altri sistemi di tracciamento">
              <p>
                Questa sezione fornisce informazioni dettagliate sull’uso dei
                cookie, su come sono utilizzati dal sito e su come gestirli, in
                attuazione dell’art. 122 del decreto legislativo 30 giugno 2003,
                n. 196, nonché nel rispetto delle “Linee guida cookie e altri
                strumenti di tracciamento” emanate dal Garante per la protezione
                dei dati personali con provvedimento del 10 giugno 2021.
              </p>
              <p>
                In particolare, questo sito fa esclusivo uso di cookie tecnici,
                ossia di file di testo depositati sul computer degli utenti,
                necessari per il funzionamento e il monitoraggio del sito
                stesso. Non viene fatto uso di cookie per la profilazione degli
                utenti. L’unico trattamento effettuato riguarda la produzione di
                statistiche, con dati pseudonimizzati, sulla navigazione nel
                sito stesso, attraverso il prodotto Matomo.
              </p>
              <p>
                La configurazione adottata, in modo da escludere trattamenti di
                dati identificativi, raccoglie le seguenti informazioni:
                <ul style={{ listStyleType: "circle" }}>
                  <li>
                    L’indirizzo IP, che viene mascherato azzerando gli ultimi 2
                    byte (xxx.xxx.0.0)
                  </li>
                  <li>Il sistema operativo utilizzato</li>
                  <li>
                    Il tipo di browser e la lingua principale in esso impostata
                  </li>
                  <li>Il tipo di dispositivo (PC, smartphone, tablet).</li>
                </ul>
              </p>
              <p>
                Viene fatto uso di cookie tecnici di sessione (non persistenti),
                in modo strettamente limitato a quanto necessario per la
                navigazione sicura ed efficiente dei siti.
              </p>
            </ContentParagraph>
            <ContentParagraph title="Come disabilitare i cookie (opt-out) sul proprio dispositivo">
              <p>
                La maggior parte dei browser accetta i cookie automaticamente,
                ma è possibile rifiutarli. Se non si desidera ricevere o
                memorizzare i cookie, si possono modificare le impostazioni di
                sicurezza del browser utilizzato, secondo le istruzioni rese
                disponibili dai relativi fornitori ai link di seguito indicati.
                Nel caso in cui si disabilitino tutti i cookie, il sito potrebbe
                non funzionare correttamente.
              </p>
              <ul>
                <li>Chrome</li>
                <li>Firefox</li>
                <li>Safari</li>
                <li>Edge</li>
                <li>Opera</li>
              </ul>
              <p>
                Le presenti informazioni sono aggiornate alla data riportata in
                calce a questa pagina.
              </p>
            </ContentParagraph>
            <ContentParagraph title="Dati comunicati dall’utente">
              <p>
                L’invio facoltativo, esplicito e volontario di messaggi agli
                indirizzi di contatto del sito comporta l’acquisizione dei dati
                di contatto del mittente, necessari a rispondere, nonché dei
                dati personali inclusi nelle comunicazioni. Tali dati saranno
                trattati dal Titolare esclusivamente al fine di - e per il
                periodo strettamente necessario a - gestire le interazioni con
                l’utenza.
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
