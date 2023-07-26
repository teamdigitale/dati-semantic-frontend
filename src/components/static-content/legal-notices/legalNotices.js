/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import getAlertMessage from "../../../services/alertService";
import BREADCRUMBS from "../../../services/BreadCrumbsConst";
import BreadCrumbs from "../../common/BreadCrumbs/BreadCrumbs";
import Anchor from "../../common/Anchor/Anchor";
import "../privacy-policy/PrivacyPolicyPage/PrivacyPolicyPage.css";
export const LeaglNotices = () => {
  useEffect(() => {
    document.title = "Note Legali - Catalogo Nazionale Dati";
  });
  const alertMess = getAlertMessage();
  return (
    <div data-testid="legalNotices">
      <div className="container-fluid px-xl-4 px-lg-2 px-0">
        <div className="row mx-0 px-0">
          <div className="col-lg-12 ps-5">
            <BreadCrumbs arrayBread={BREADCRUMBS.LEGALNOTICES} />
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
      <div data-testid="legalNoticesBody" className="policy-body">
        <div className="container-fluid schemaPadding">
          <div className="col-lg-6 pt-5">
            <div className="text-sm-left pb-4 display-1">Note Legali</div>
            <p style={{ fontSize: 20 }}>
              Il catalogo nazionale della semantica dei dati (anche conosciuto
              come National Data Catalog - abbreviato NDC) e raggiungibile da
              www.schema.gov.it, è un progetto di titolarità del Dipartimento
              per la Trasformazione Digitale – Presidenza Del Consiglio dei
              ministri. Ha il compito di armonizzare e condividere la semantica
              dei dati utile a garantire l'interoperabilità semantica
              nell'interscambio e fruizione di dati, in particolare tramite
              interfacce per la programmazione di applicazioni (API), come
              quelle reperibili nel catalogo della Piattaforma Digitale
              Nazionale Dati (PDND). Il catalogo, oltre a pubblicare i contenuti
              definiti a livello nazionale, raccoglie - tramite estrazione
              automatica (web harvesting) - le risorse semantiche già pubblicate
              dalle singole pubbliche amministrazioni nei propri repository di
              cui gli stessi enti sono gli unici titolari, mantenendo così la
              responsabilità in merito al contenuto.
            </p>
            <p style={{ fontSize: 20 }}>
              Nell’ambito dei progetti del Piano Nazionale di Ripresa e
              Resilienza (PNNR), il Dipartimento per la trasformazione digitale,
              ha individuato Istat quale ente attuatore del progetto NDC per la
              realizzazione, gestione e manutenzione del catalogo, mentre
              l’accordo prevede il coinvolgimento di soggetti quali AGID per le
              sue funzioni istituzionali in materia di interoperabilità.
            </p>
            <p style={{ fontSize: 20 }}>
              L’Istat provvede allo sviluppo del catalogo e alla sua
              implementazione e fornisce, laddove richiesto, supporto tecnico e
              metodologico alle pubbliche amministrazioni nella definizione di
              ontologie, vocabolari controllati e schemi di dati relativi ai
              propri dataset. La responsabilità della scelta e della
              pubblicazione di un determinato asset semantico è della pubblica
              amministrazione che provvede alla pubblicazione sul proprio
              repository; la validazione rimane, quindi, di competenza della
              stessa pubblica amministrazione.
            </p>
            <p style={{ fontSize: 20 }}>
              La titolarità dei contenuti semantici pubblicati nel catalogo è,
              quindi, degli enti titolari delle basi di dati cui i singoli
              contenuti afferiscono, ferma restando la corretta attribuzione di
              paternità degli stessi.
            </p>
            <div className="text-sm-left pb-4 display-1">
              Licenza dei contenuti
            </div>
            <p style={{ fontSize: 20 }}>
              Ove non diversamente specificato, i contenuti pubblicati su
              schema.gov.it sono rilasciati dalla Presidenza del Consiglio dei
              Ministri – Dipartimento per la Trasformazione Digitale con{" "}
              <Anchor href="https://creativecommons.org/licenses/by/4.0/legalcode.it">
                licenza CC-BY 4.0
              </Anchor>{" "}
              . Gli utenti possono, nel rispetto delle disposizioni vigenti,
              condividere (riprodurre, distribuire, comunicare al pubblico,
              esporre in pubblico, rappresentare, eseguire e recitare questo
              materiale con qualsiasi mezzo e formato) e modificare (trasformare
              il materiale e utilizzarlo per opere derivate) per qualsiasi fine,
              anche commerciale con il solo onere di attribuzione, senza apporre
              restrizioni aggiuntive.{" "}
            </p>
            <p style={{ fontSize: 20 }}>
              Per la corretta attribuzione di paternità da parte
              dell’utilizzatore, si rinvia all’individuazione del “Creatore”
              indicato per ciascuna risorsa del catalogo.
            </p>

            <div className="text-sm-left pb-4 display-1">
              Collegamenti a siti esterni
            </div>
            <p style={{ fontSize: 20 }}>
              I collegamenti a siti esterni di terzi, indicati in questo sito,
              nonché i contenuti incorporati di terzi sono forniti come servizio
              agli utenti. L’indicazione dei collegamenti a siti esterni di
              terzi o l’inserimento di contenuti incorporati di terzi non
              implica alcun tipo di approvazione o condivisione di
              responsabilità in relazione alla legittimità, alla completezza e
              alla correttezza delle informazioni contenute nei siti indicati.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaglNotices;
