import React from "react";
import FaqBody from "../FaqBody/FaqBody";
import IntroSection from "../../../common/IntroSection/IntroSection";
import { routes } from "../../../../services/routes";

const FaqPage = () => {
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
        primaryButtonText="Vai alle Linee Guida"
        primaryButtonLink={routes.explore()}
      />
    </div>
  );
};

FaqPage.propTypes = {};

FaqPage.defaultProps = {};

export default FaqPage;
