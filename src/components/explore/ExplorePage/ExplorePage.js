import React, { useEffect } from "react";
import ExploreByCategory from "../ExploreByCategory/ExploreByCategory";
import ExploreByType from "../ExploreByType/ExploreByType";
import ExploreByText from "../ExploreByText/ExploreByText";
import { routes } from "../../../services/routes";
import IntroSection from "../../common/IntroSection/IntroSection";
import EndSection from "../../common/EndSection/EndSection";

const ExplorePage = () => {
  useEffect(() => {
    document.title = "Catalogo Nazionale Dati";
  });

  return (
    <div data-testid="ExplorePage">
      <IntroSection
        title="Il catalogo nazionale per lo scambio di dati e informazioni tra pubbliche amministrazioni"
        subtitle="Schema è il catalogo in continua evoluzione, che armonizza e standardizza i modelli di dati condivisi e garantisce che formato e significato delle informazioni scambiate siano preservati e compresi durante gli scambi."
        primaryButtonText="Esplora il catalogo"
        primaryButtonLink={routes.search()}
        secondaryButtonText="Leggi la guida"
        secondaryButtonLink={
          "https://teamdigitale.github.io/dati-semantic-guida-ndc-docs/index.html"
        }
        type="HEADER"
        isSearch={false}
      />
      <ExploreByText />
      <ExploreByType />
      <div className="explorePageBkg">
        <ExploreByCategory />
      </div>
      <EndSection type={2} />
    </div>
  );
};

ExplorePage.propTypes = {};

export default ExplorePage;
