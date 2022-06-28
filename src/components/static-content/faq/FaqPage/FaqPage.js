import React, { useEffect } from "react";
import FaqBody from "../FaqBody/FaqBody";
import IntroSection from "../../../common/IntroSection/IntroSection";
import { DIGITALE_DOCS_URL, routes } from "../../../../services/routes";

const FaqPage = () => {
  useEffect(() => {
    document.title = "FAQ - Catalogo Nazionale Dati";
  });

  return (
    <div data-testid="FaqPage">
      <IntroSection
        title="DOMANDE FREQUENTI"
        subtitle="Esplora le risposte alle domande più frequenti"
        primaryButtonText="Scopri il progetto"
        primaryButtonLink={routes.project()}
        secondaryButtonText="Esplora il catalogo"
        secondaryButtonLink={routes.explore()}
      />
      <FaqBody />
      <IntroSection
        title="CONTRIBUISCI"
        subtitle="Scopri come contribuire"
        primaryButtonText="Maggiori informazioni"
        primaryButtonLink={DIGITALE_DOCS_URL}
      />
    </div>
  );
};

FaqPage.propTypes = {};

FaqPage.defaultProps = {};

export default FaqPage;
