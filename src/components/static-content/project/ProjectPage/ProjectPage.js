import IntroSection from "../../../common/IntroSection/IntroSection";
import { DIGITALE_DOCS_URL, routes } from "../../../../services/routes";
import ProjectBody from "../ProjectBody/ProjectBody";
import { useEffect } from "react";

const ProjectPage = () => {
  useEffect(() => {
    document.title = "Il progetto - Catalogo Nazionale Dati";
  });

  return (
    <div data-testid="ProjectPage">
      <IntroSection
        title="IL PROGETTO"
        subtitle="Il catalogo nazionale della semantica dei dati"
        description="Ricerca e riuso di asset semantici, tra cui ontologie, schemi dati e vocabolari controllati per supportare lo sviluppo di API semanticamente e sintatticamente interoperabili"
        primaryButtonText="Vai alle domande frequenti"
        primaryButtonLink={routes.faq()}
        secondaryButtonText="Esplora il catalogo"
        secondaryButtonLink={routes.explore()}
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
