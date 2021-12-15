import React from "react";
import FaqBody from "../FaqBody/FaqBody";
import IntroSection from "../../../common/IntroSection/IntroSection";
import { routes } from "../../../../services/routes";
import Contribute from "../../../common/Contribute/Contribute";

const FaqPage = () => {
  return (
    <div data-testid="FaqPage">
      <IntroSection
        title="DOMANDE FREQUENTI"
        subtitle="Esplora le risposte alle domande più frequenti"
        primaryButtonText="Scopri il progetto"
        primaryButtonLink={routes.explore()}
        secondaryButtonText="Esplora il catalogo"
        secondaryButtonLink={routes.explore()}
      />
      <FaqBody />
      <Contribute />
    </div>
  );
};

FaqPage.propTypes = {};

FaqPage.defaultProps = {};

export default FaqPage;
