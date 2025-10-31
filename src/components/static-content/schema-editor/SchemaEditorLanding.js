import { useEffect } from "react";
// import IntroSection from "../../common/IntroSection/IntroSection";
import BREADCRUMBS from "../../../services/BreadCrumbsConst";
import Anchor from "../../common/Anchor/Anchor";
import BreadCrumbs from "../../common/BreadCrumbs/BreadCrumbs";

const SchemaEditorLanding = () => {
  useEffect(() => {
    document.title = "Schema editor - Catalogo Nazionale Dati";
  });

  return (
    <div>
      {/* <IntroSection
        title="Lo strumento sarà presto disponibile su questo portale. Il nostro team sta completando l'integrazione."
        subtitle="Se non vuoi aspettare e desideri provare le ultime funzionalità, la versione di sviluppo è accessibile tramite il nostro repository su GitHub al seguente indirizzo:"
        primaryButtonText="Vai a Schema Editor su GitHub"
        primaryButtonLink={
          "https://teamdigitale.github.io/dati-semantic-schema-editor/latest/"
        }
        arrayBread={BREADCRUMBS.SCHEMAEDITORLANDING}
        isSearch={false}
      /> */}
      <div className="col-lg-12 ps-5">
        <BreadCrumbs arrayBread={BREADCRUMBS.SCHEMAEDITORLANDING} />
      </div>
      <div className="container-fluid schemaPadding">
        <div>
          <div className="col-lg-6 pt-5">
            <div className="text-sm-left pb-4">
              <h2>Lo strumento sarà presto disponibile su questo portale.</h2>
              <br />
              <h4>Il nostro team sta completando l&apos;integrazione.</h4>
            </div>
            <p>
              Se non vuoi aspettare e desideri provare le ultime funzionalità,
              la versione di sviluppo è accessibile tramite il nostro repository
              su GitHub al seguente indirizzo:{" "}
              <Anchor href="https://teamdigitale.github.io/dati-semantic-schema-editor/latest/">
                https://teamdigitale.github.io/dati-semantic-schema-editor/latest/
              </Anchor>{" "}
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

SchemaEditorLanding.propTypes = {};
SchemaEditorLanding.defaultPropTypes = {};

export default SchemaEditorLanding;
