import IntroSection from "../../../common/IntroSection/IntroSection";
import { routes } from "../../../../services/routes";
import ProjectBody from "../ProjectBody/ProjectBody";
import { useEffect } from "react";
import BREADCRUMBS from "../../../../services/BreadCrumbsConst";
import EndSection from "../../../common/EndSection/EndSection";
const ProjectPage = () => {
  useEffect(() => {
    document.title = "Scopri l’iniziativa - Catalogo Nazionale Dati";
  });

  return (
    <div data-testid="ProjectPage">
      <IntroSection
        title="Scopri il catalogo nazionale  
        della semantica dei dati"
        subtitle="Schema ti permette di ricercare e utilizzare tra decine di asset semantici per supportare lo sviluppo di API semanticamente e sintatticamente interoperabili."
        primaryButtonText="Esplora il catalogo"
        primaryButtonLink={routes.search()}
        type="HEADER"
        arrayBread={BREADCRUMBS.PROJECTPAGE}
        isSearch={false}
      />
      <ProjectBody />
      <EndSection type={2} />
    </div>
  );
};

ProjectPage.propTypes = {};
ProjectPage.defaultPropTypes = {};

export default ProjectPage;
