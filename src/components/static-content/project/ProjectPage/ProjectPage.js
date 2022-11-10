import IntroSection from "../../../common/IntroSection/IntroSection";
import { routes } from "../../../../services/routes";
import ProjectBody from "../ProjectBody/ProjectBody";
import { useEffect } from "react";
import BREADCRUMBS from "../../../../services/BreadCrumbsConst";
import EndSection from "../../../common/EndSection/EndSection";
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
      <EndSection type={2} />
    </div>
  );
};

ProjectPage.propTypes = {};
ProjectPage.defaultPropTypes = {};

export default ProjectPage;
