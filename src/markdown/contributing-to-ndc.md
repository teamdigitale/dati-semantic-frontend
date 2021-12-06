## Contribuire al National Data Catalog

### Registrazione dell'istituzione

_TODO:_

* _Come e a chi si registra l'URL del repository?_
* _Quali altri dati descrittivi dell'istituzione sono necessari? Email?_

### Repository

Ogni repository può contenere uno o più strumenti semantici. Quelli supportati sono:

* Ontologie;
* Vocabolari controllati;
* Schemi compatibili con OAS.

### Layout del repository

Il repository deve organizzare gli strumenti semantici nelle tre seguenti cartelle, presenti nella cartella radice:

* `Ontologie`
* `VocabulariControllati`
* `Schemas`

Almeno una delle tre cartelle deve essere presente.

All'interno di queste cartelle, l'istituzione (di seguito _provider_) che contribuisce con i propri strumenti semantici
può strutturare i dati in ulteriori cartelle, seguendo le indicazioni che seguono.

* Ogni strumento semantico dev'essere fornito in formato Turtle, con estensione `.ttl`. Eventuali altre serializzazioni
  possono coesistere nella cartella (a uso del provider), ma verranno ignorati.
* I file Turtle relativi agli strumenti semantici devono essere collocati all'interno di _cartelle foglia_, cioè in
  cartelle che non contengono altre cartelle a loro volta.
* All'interno di una cartella viene preso in considerazione un solo file Turtle; in particolare:
    * Per le *Ontologie*, il file che viene processato è quello con il nome più breve. Questo nasce dall'assunzione che
      possano esistere file Turtle di corredo (_alignments_) che arricchiscono l'informazione del file principale. Altri
      file verranno ignorati.
    * Per i *Vocabolari Controllati* e gli *Schema*, la presenza di più file Turtle all'interno di una cartella viene
      considerata un errore dal sistema, e la cartella non viene processata.

#### Esempi

A titolo di esempio, si consideri un repository che abbia la struttura delle cartelle come quella di seguito.

```
┌─ Ontologie/
│  ├─ Onto1/
│  │  ├─ onto1.ttl
│  │  └─ onto1.xml
│  ├─ Sottoargomento/
│  │  ├─ Onto2/
│  │  │  └─ onto2.xml
│  │  ├─ Onto3/
│  │  │  └─ onto3.ttl
│  ├─ Onto4/
│  │  ├─ Other/
│  │  │  └─ temp.txt
│  │  └─ onto4.ttl
│  └─ notes.txt
├─ VocabulariControllati/
│  └─ ...
└─ README.md
```

* A parte le due cartelle `Ontologie` e `VocabolariControllati`, i nomi di tutte le altre cartelle sono arbitrari.
* Il repository non riporta una cartella `Schemas`, quindi non contribuisce con schemi OAS. Questo non rappresenta un
  problema e non è rilevato come errore durante l'_harvesting_.
* Nella radice (così come dentro le cartelle `Ontologie` e `Other`) sono presenti dei file di testo informativi che il
  provider ha ritenuto di voler aggiungere. Questo non rappresenta un problema, ma i file sono semplicemente ignorati.
* Per quanto riguarda la cartella `Onto1`:
    * essa non contiene altre cartelle al suo interno, ed è quindi una cartella _foglia_. Quindi viene processata come
      potenzialmente contenente un'ontologia.
    * contiene un file Turtle che verrà processato correttamente (di seguito le specifiche interne ai file delle
      ontologie)
    * contiene un ulteriore file Turtle, plausibilmente una serializzazione diversa degli stessi contenuti RDF del file
      ttl, in RDF/XML. Questo non rappresenta un problema e il file xml viene ignorato.
* Le cartelle `Onto2` e `Onto3` sono _annidate_ all'interno di un'altra cartella, per motivi di organizzazione logica
  del provider. Questo non rappresenta un problema e le cartelle verranno navigate. Essendo, a loro volta, cartelle _
  foglia_ sono considerate come potenziali contenitori di ontologie.
* La cartella `Onto2` non contiene alcun contenuto ttl. Questo viene segnalato come possibile anomalia, ma non viene
  considerato un errore e non fa terminare il processamento del repository.
* La cartella `Onto4` contiene un'altra cartella al suo interno, quindi non è consideratacome contenitore di ontologia,
  bensì come cartella intermedia nel cammino per altre cartelle _foglia_; il file `onto4.tll` è ignorato e non
  processato.

### Versionamento delle ontologie

_*Nota*: Il versionamento si applica solamente alle *Ontologie*._

All'interno di un repository è possibile mantenere versioni precedenti delle ontologie per tenere traccia di uno
storico, aldilà del supporto che fornisce lo strumento git.

L'harvesting delle ontologie considera che le *cartelle* che contengono ontologie possano essere versionate, non i
singoli file. Questo vale anche per cartelle che contengono altre cartelle.

In un qualsiasi punto della gerarchia delle cartelle che occorrono all'interno della cartella `Ontologie`, qualora vi
siano più cartelle i cui nomi rappresentino delle _versioni_, la logica di harvesting ignorerà tutte le cartelle
precedenti all'ultima, considerandole _obsolete_.

#### Come si rappresentano le versioni

I nomi delle cartelle, per essere considerate tabelle di versione, devono avere un nome che segue il seguente pattern:

* un carattere iniziale `v`, opzionale.
* un numero di versione
* opzionalmente una serie di coppie punto (`.`) seguito da un altro numero, per indicare sotto versioni.

Come unica eccezione al pattern appena descritto, è supportato il nome `latest`, che rappresenta la versione più recente
confrontata rispetto a qualsiasi altra versione numerata.

A titolo di esempio, sono validi nomi di cartelle per le versioni:

* `v1`, `v2` ma anche semplicemente `1` e `2`
* `v1.3`, `v4.5.6` e anche `1.3`, `4.5.6`

Non sono validi

* `v.5`
* `4.3.`
* `v1..5`
* `versione 2.9`
* `v1.5-beta`

#### Ordinamento delle versioni

* `latest` è sempre più recente di qualsiasi altra versione
* Tra due versioni espresse come forme numeriche (con punti), si segue l'ordinamento comunemente condiviso per cui i
  numeri a sinistra sono i più significativi
* Qualora due versioni abbiano lunghezza diversa ma una sia prefisso dell'altra, la più lunga viene considerata più
  recente; ad esempio `v4.5` è considerata obsoleta in presenza di `v4.5.2`.

#### Dove possono occorrere le cartelle di versioni

La cartelle di versione possono occorrere in ogni punto della navigazione della cartella `Ontologie`, discendendo verso
le foglie della struttura gerarchica.

Sono esempi validi:

```
┌─ Ontologie/
│  ├─ Onto1/
│  │  ├─ latest/
│  │  │  └─ onto1.ttl
│  │  ├─ v0.5/
│  │  │  └─ onto1.ttl
│  │  ├─ v0.6/
│  │  │  └─ onto1.ttl
│  ├─ Onto2/
│  │  ├─ 0.5/
│  │  │  └─ onto2.ttl
│  │  └─ 0.6/
│  │     └─ onto2.ttl
│  └─ ...
└─ ...
```

Nel caso della struttura precedente, ogni ontologia ha diverse versioni al proprio interno.

È altresì valido un approccio in cui si strutturano in versioni insiemi di cartelle di ontologie, come segue:

```
┌─ Ontologie/
│  ├─ latest/
│  │  ├─ Onto1/
│  │  │  └─ onto1.ttl
│  │  ├─ Onto2/
│  │  │  └─ onto2.ttl
│  ├─ v0.8/
│  │  ├─ Onto1/
│  │  │  └─ onto1.ttl
│  │  ├─ Onto2/
│  │  │  └─ onto2.ttl
│  │  └─ Onto3/
│  │     └─ onto3.ttl
│  └─ ...
└─ ...
```

Si noti, per esempio, che questo permette di _rimuovere_ dal catalogo anche versioni precedenti di ontologie che, nella
versione più recente, non si voglioni più pubblicare. Nell'esempio precedente, infatti, il file `onto3.ttl` non sarebbe
processato, poiché durante la navigazione delle directory, la cartella `v0.8` è saltata perché considerata come resa
obsoleta dalla presenza della _sorella_ `latest`.

Qualora fosse necessario versionare gruppi di ontologie che variano più frequentemente nel tempo, mentre mantenerne
stabili altre, è possibile raggruppare in versioni solo quelle che variano. Durante la navigazione, infatti, sono
ignorate le cartelle che contengono versioni obsolete di contenuti aggiornati, mentre le cartelle i cui nomi non
rappresentano versioni sono processari normalmente.

Il seguente esempio illustra questa possibilità (i contenuti delle cartelle _foglia_ sono omessi per brevità):

```
┌─ Ontologie/
│  ├─ latest/
│  │  ├─ Onto1/
│  │  └─ Onto2/
│  ├─ v0.8/
│  │  ├─ Onto1/
│  │  └─ Onto2/
│  ├─ Onto3/
│  ├─ Onto4/
│  └─ ...
└─ ...
```

In questo esempio le ontologie contenute in `Onto3` e `Onto4` sono stabili, per cui non vale la pena di replicarle in
diverse cartelle. 
Diversamente le ontologie in `Onto1` e `Onto2` sono aggiornate e, plausibilmente, vengono aggiornate di pari
passo perché hanno una qualche correlazione; può valere la pena evolvere la loro versione parallelamente.