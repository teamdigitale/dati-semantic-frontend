import React from "react";
import ExploreByCategory from "../ExploreByCategory/ExploreByCategory";
import ExploreByType from "../ExploreByType/ExploreByType";
import ExploreByText from "../ExploreByText/ExploreByText";
import Contribute from "../../common/Contribute/Contribute";

const introSection = () => (
  <div className="section section-muted">
    <div className="section-content">
      <div className="container" role="article">
        <div className="row mb-3">
          <div className="col-12">
            <h2>Il catalogo nazionale della sematica dei dati</h2>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            Ricerca e riuso di asset semantici, tra cui ontologie, schemi dati e
            vocabolari controllati per supportare lo sviluppo di API
            semanticamente e sintatticamente interoperabili
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ExplorePage = () => (
  <div data-testid="ExplorePage">
    {introSection()}
    <ExploreByText />
    <ExploreByType />
    <ExploreByCategory />
    <Contribute />
  </div>
);

ExplorePage.propTypes = {};

ExplorePage.defaultProps = {};

export default ExplorePage;
