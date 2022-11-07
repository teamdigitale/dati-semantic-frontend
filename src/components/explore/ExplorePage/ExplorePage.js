import React, { useEffect } from "react";
import ExploreByCategory from "../ExploreByCategory/ExploreByCategory";
import ExploreByType from "../ExploreByType/ExploreByType";
import ExploreByText from "../ExploreByText/ExploreByText";
import { DIGITALE_DOCS_URL, routes } from "../../../services/routes";
import IntroSection from "../../common/IntroSection/IntroSection";

const ExplorePage = () => {
  useEffect(() => {
    document.title = "Catalogo Nazionale Dati";
  });

  return (
    <div data-testid="ExplorePage">
      <IntroSection
        title="esplora il catalogo"
        subtitle="Il catalogo nazionale della semantica dei dati"
        description="Ricerca e riuso di asset semantici, tra cui ontologie, schemi dati e
        vocabolari controllati per supportare lo sviluppo di API
        semanticamente e sintatticamente interoperabili"
        primaryButtonText="Scopri il progetto"
        primaryButtonLink={routes.project()}
        secondaryButtonText="Domande frequenti"
        secondaryButtonLink={routes.faq()}
        type="HEADER"
      />
      <ExploreByText />
      <ExploreByType />
      <ExploreByCategory />
      <IntroSection
        title="CONTRIBUISCI"
        subtitle="Scopri come contribuire"
        primaryButtonText="Maggiori informazioni"
        primaryButtonLink={DIGITALE_DOCS_URL}
      />
    </div>
  );
};

ExplorePage.propTypes = {};

ExplorePage.defaultProps = {};

export default ExplorePage;
