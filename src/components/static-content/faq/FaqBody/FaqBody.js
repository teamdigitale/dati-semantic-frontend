import React from "react";

const FaqBody = () => {
  return (
    <div data-testid="FaqBody" className="container">
      <div
        id="questionList"
        className="collapse-div ml-5 pl-5 pt-5"
        role="tablist"
      >
        <div className="collapse-header" id="question1">
          <button
            role="tab"
            data-toggle="collapse"
            data-target="#accordionAnswer1"
            aria-expanded="true"
            aria-controls="question1"
          >
            Cos’è l’interoperabilità semantica?
          </button>
        </div>
        <div
          id="accordionAnswer1"
          className="collapse show"
          role="tabpanel"
          aria-labelledby="question1"
          data-parent="#questionList"
        >
          <div className="collapse-body">
            L&apos;interoperabilità semantica è la capacità di garantire che il
            formato e il significato delle informazioni scambiate siano
            preservati e compresi durante gli scambi tra le parti.
          </div>
        </div>

        <div className="collapse-header" id="question2">
          <button
            role="tab"
            data-toggle="collapse"
            data-target="#accordionAnswer2"
            aria-expanded="true"
            aria-controls="question2"
          >
            Che cos’è il catalogo nazionale per l’interoperabilità semantica?
          </button>
        </div>
        <div
          id="accordionAnswer2"
          className="collapse show"
          role="tabpanel"
          aria-labelledby="question2"
          data-parent="#questionList"
        >
          <div className="collapse-body">
            E’ un catalogo previsto dall’investimento 1.3.1 del Piano Nazionale
            di Ripresa e Resilienza che contiene ontologie, vocabolari
            controllati e schemi dati della pubblica amministrazione italiana
            accessibile a chiunque voglia consultare o utilizzare degli asset
            semantici per sviluppare servizi digitali semanticamente e
            sintatticamente coerenti.
          </div>
        </div>

        <div className="collapse-header" id="question3">
          <button
            role="tab"
            data-toggle="collapse"
            data-target="#accordionAnswer3"
            aria-expanded="false"
            aria-controls="question3"
          >
            A chi è rivolto il catalogo?
          </button>
        </div>
        <div
          id="accordionAnswer3"
          className="collapse"
          role="tabpanel"
          aria-labelledby="question3"
          data-parent="#questionList"
        >
          <div className="collapse-body">
            Il catalogo è rivolto a tutti gli enti della pubblica
            amministrazione ed ai privati che vogliono ricercare, consultare e
            utilizzare asset semantici ed in particolare agli sviluppatori di
            servizi digitali ed agli esperti di semantica.
          </div>
        </div>

        <div className="collapse-header" id="question4">
          <button
            role="tab"
            data-toggle="collapse"
            data-target="#accordionAnswer4"
            aria-expanded="false"
            aria-controls="question4"
          >
            A cosa serve e quali sono le sue funzionalità?
          </button>
        </div>
        <div
          id="accordionAnswer4"
          className="collapse"
          role="tabpanel"
          aria-labelledby="question4"
          data-parent="#questionList"
        >
          <div className="collapse-body">
            Il catalogo serve a ricercare, consultare e riutilizzare ontologie,
            vocabolari controllati e schemi dati. In particolare è rivolto a
            quegli enti che creano servizi digitali basati su API di altri enti
            per poter riutilizzare direttamente sia i modelli semantici che i
            vocabolari controllati esposti dal catalogo. Le sue funzionalità
            principali sono: Harvesting: automaticamente scarica gli asset
            semantici dai repository ufficiali pubblicati dai vari enti;
            Ricerca: permette di ricercare e consultare assets semantici tramite
            una semplice web UI; Consultazione: espone API REST per la ricerca e
            per la lettura dei vocabolari controllati ed espone uno SPARQL
            endpoint per la ricerca di ontologie. Inoltre, è ancora in fase di
            sviluppo una funzionalità di validazione della semantica e della
            sintassi delle API REST rispetto ai contenuti semantici pubblicati
            nel catalogo. Questa funzionalità sarà rilasciata entro Giugno 2022.
          </div>
        </div>

        <div className="collapse-header" id="question5">
          <button
            role="tab"
            data-toggle="collapse"
            data-target="#accordionAnswer5"
            aria-expanded="false"
            aria-controls="question5"
          >
            Quali problemi risolve il catalogo?
          </button>
        </div>
        <div
          id="accordionAnswer5"
          className="collapse"
          role="tabpanel"
          aria-labelledby="question5"
          data-parent="#questionList"
        >
          <div className="collapse-body">
            Il catalogo risolve dei problemi di scalabilità, riuso,
            interpretazione, cultura e creazione di nuovi servizi legati
            all’interoperabilità semantica. Scalabilità. Ogni nuovo servizio
            richiede lo sviluppo di codice ad-hoc per validare, interpretare ed
            uniformare i dati ricevuti da enti diversi e l’interazione tra enti
            per verificare il significato e il contesto dei dati non è
            scalabile; Riuso degli schemi. Gli schemi dati non sono condivisi e
            quindi non sono facilmente riutilizzabili (né gli schemi, né il
            codice collegato); Interpretazione dei dati. Il significato dei dati
            scambiati è ambiguo e spesso lasciato a interpretazione, con il
            rischio di inconsistenze anche sintattiche nei vari dataset e le API
            non sono semanticamente e sintatticamente Interoperabili; Cultura
            della semantica. Le barriere all’ingresso per l’interoperabilità
            semantica sono alte; Creazione di nuovi servizi. Risulta difficile
            creare nuovi servizi se i dati scambiati non hanno un significato
            chiaro (ad esempio se si confonde il nucleo familiare con la
            famiglia anagrafica, o un tampone molecolare con uno rapido).
          </div>
        </div>

        <div className="collapse-header" id="question6">
          <button
            role="tab"
            data-toggle="collapse"
            data-target="#accordionAnswer6"
            aria-expanded="false"
            aria-controls="question6"
          >
            Qual è un caso d’uso di esempio?
          </button>
        </div>
        <div
          id="accordionAnswer6"
          className="collapse"
          role="tabpanel"
          aria-labelledby="question6"
          data-parent="#questionList"
        >
          <div className="collapse-body">
            Il catalogo può semplificare ed uniformare la creazione e la
            gestione della modulistica online e dei servizi digitali fruibili
            anche tramite siti web. Ad esempio, un comune invece di ridefinire i
            possibili titoli di studio e la loro sintassi, potrà riusare tramite
            API i valori pubblicati dal catalogo a partire dal vocabolario
            nazionale education-level.csv.
          </div>
        </div>

        <div className="collapse-header" id="question7">
          <button
            role="tab"
            data-toggle="collapse"
            data-target="#accordionAnswer7"
            aria-expanded="false"
            aria-controls="question7"
          >
            Chi pubblica i contenuti? I dati provengono da fonti ufficiali?
          </button>
        </div>
        <div
          id="accordionAnswer7"
          className="collapse"
          role="tabpanel"
          aria-labelledby="question7"
          data-parent="#questionList"
        >
          <div className="collapse-body">
            Le ontologie, i vocabolari controllati e gli schemi dati sono
            scaricati dai repository ufficiali (e.g. Github o Gitlab) degli enti
            della pubblica amministrazione. Il catalogo scarica i dati contenuti
            nella directory che ha subito l&apos;aggiornamento più recente. I
            dati provengono da fonti ufficiali in quanto ogni ente è titolare
            dei metadati pubblicati.
          </div>
        </div>

        <div className="collapse-header" id="question8">
          <button
            role="tab"
            data-toggle="collapse"
            data-target="#accordionAnswer8"
            aria-expanded="false"
            aria-controls="question8"
          >
            I dati contenuti rispettano le norme vigenti sulla privacy?
          </button>
        </div>
        <div
          id="accordionAnswer8"
          className="collapse"
          role="tabpanel"
          aria-labelledby="question8"
          data-parent="#questionList"
        >
          <div className="collapse-body">
            I dati contenuti e pubblicati sul catalogo sono asset semantici e
            per definizione non contengono dati sensibili ma solo metadati. Di
            conseguenza, i dati sono distribuiti in formato open e con licenza
            aperta CC-BY 4.0. Qualsiasi dato pubblicato nel catalogo è anche
            disponibile nei repository resi pubblici dagli enti.
          </div>
        </div>

        <div className="collapse-header" id="question9">
          <button
            role="tab"
            data-toggle="collapse"
            data-target="#accordionAnswer9"
            aria-expanded="false"
            aria-controls="question9"
          >
            Il catalogo nazionale è open source? Come posso contribuire al suo
            sviluppo?
          </button>
        </div>
        <div
          id="accordionAnswer9"
          className="collapse"
          role="tabpanel"
          aria-labelledby="question9"
          data-parent="#questionList"
        >
          <div className="collapse-body">
            Si, le componenti di frontend e backend del catalogo sono open
            source ed accessibili nei seguenti repositories:
            https://github.com/teamdigitale/dati-semantic-backend
            https://github.com/teamdigitale/dati-semantic-frontend Puoi
            contribuire al miglioramento del catalogo aprendo una issue in uno
            dei repository menzionati.
          </div>
        </div>

        <div className="collapse-header" id="question10">
          <button
            role="tab"
            data-toggle="collapse"
            data-target="#accordionAnswer10"
            aria-expanded="false"
            aria-controls="question10"
          >
            Come faccio ad utilizzare il catalogo?
          </button>
        </div>
        <div
          id="accordionAnswer10"
          className="collapse"
          role="tabpanel"
          aria-labelledby="question10"
          data-parent="#questionList"
        >
          <div className="collapse-body">
            La consultazione del catalogo non necessita di autenticazione:
            chiunque voglia consultare degli asset semantici lo può fare tramite
            web UI all&apos;indirizzo www.schema.gov.it. Inoltre, chiunque
            voglia scaricare i dati in modalità machine to machine potrà usare
            le API REST (per quanto riguarda i vocabolari controllati) oppure lo
            SPARQL endpoint (per interrogare le ontologie).
          </div>
        </div>

        <div className="collapse-header" id="question11">
          <button
            role="tab"
            data-toggle="collapse"
            data-target="#accordionAnswer11"
            aria-expanded="false"
            aria-controls="question11"
          >
            Come posso contribuire alla pubblicazione di nuovi asset semantici?
          </button>
        </div>
        <div
          id="accordionAnswer11"
          className="collapse"
          role="tabpanel"
          aria-labelledby="question11"
          data-parent="#questionList"
        >
          <div className="collapse-body">
            Le pubbliche amministrazioni possono contribuire pubblicando asset
            semantici nei loro repository ufficiali. Per essere conformi con le
            regole di harvesting e di pubblicazione della piattaforma, le
            pubbliche amministrazioni che creano e pubblicano asset semantici
            nei loro repository devono seguire le indicazioni fornite nella
            sezione “Come Contribuire”.
          </div>
        </div>

        <div className="collapse-header" id="question12">
          <button
            role="tab"
            data-toggle="collapse"
            data-target="#accordionAnswer12"
            aria-expanded="false"
            aria-controls="question12"
          >
            Chi gestisce il catalogo?
          </button>
        </div>
        <div
          id="accordionAnswer12"
          className="collapse"
          role="tabpanel"
          aria-labelledby="question12"
          data-parent="#questionList"
        >
          <div className="collapse-body">
            Il progetto è coordinato dal Dipartimento di Trasformazione Digitale
            presso la Presidenza del Consiglio dei Ministri mentre la
            piattaforma è gestita e mantenuta da ISTAT.
          </div>
        </div>

        <div className="collapse-header" id="question13">
          <button
            role="tab"
            data-toggle="collapse"
            data-target="#accordionAnswer13"
            aria-expanded="false"
            aria-controls="question13"
          >
            Chi gestisce e governa la pubblicazione di asset semantici?
          </button>
        </div>
        <div
          id="accordionAnswer13"
          className="collapse"
          role="tabpanel"
          aria-labelledby="question13"
          data-parent="#questionList"
        >
          <div className="collapse-body">
            Sarà costituito un comitato centrale per la governance della
            semantica nazionale costituito da vari enti centrali della pubblica
            amministrazione. Tale comitato avrà il compito di supervisionare i
            vari enti esperti di dominio nel processo di creazione e
            pubblicazione degli asset semantici, nonché di garantire la coerenza
            e l’integrità dei contenuti pubblicati.
          </div>
        </div>
      </div>
    </div>
  );
};

FaqBody.propTypes = {};

FaqBody.defaultProps = {};

export default FaqBody;
