import IntroSection from "../../../common/IntroSection/IntroSection";
import { DIGITALE_DOCS_URL, routes } from "../../../../services/routes";
import ProjectBody from "../ProjectBody/ProjectBody";
import { useEffect } from "react";
import BREADCRUMBS from "../../../../services/BreadCrumbsConst";
const ProjectPage = () => {
  useEffect(() => {
    document.title = "L’ iniziativa - Catalogo Nazionale Dati";
  });

  return (
    <div data-testid="ProjectPage">
      <IntroSection
        title="L’ iniziativa"
        subtitle="Il catalogo nazionale della semantica dei dati"
        description="Schema ti permette di ricercare e utilizzare tra decine di asset semantici per supportare lo sviluppo di API semanticamente e sintatticamente interoperabili."
        primaryButtonText="Vai alle domande frequenti"
        primaryButtonLink={routes.faq()}
        secondaryButtonText="Esplora il catalogo"
        secondaryButtonLink={routes.explore()}
        type="HEADER"
        arrayBread={BREADCRUMBS.PROJECTPAGE}
      />
      <ProjectBody />
      <IntroSection
        title="CONTRIBUISCI"
        subtitle="Scopri come contribuire"
        primaryButtonText="Maggiori informazioni"
        primaryButtonLink={DIGITALE_DOCS_URL}
      />
    </div>
  );
};

ProjectPage.propTypes = {};
ProjectPage.defaultPropTypes = {};

export default ProjectPage;
