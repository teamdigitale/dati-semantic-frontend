import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import SearchPage from "../../search/SearchPage/SearchPage";
import VocabPage from "../../semantic-assets/VocabPage/VocabPage";
import {
  ASSETS_BASE_URL_TOKEN,
  ASSETS_VOCABULARIES_URL_TOKEN,
  CONTRIBUTING_URL,
  SEARCH_BASE_URL,
  VALIDATE_URL,
} from "../../../services/routes";
import ExplorePage from "../../explore/ExplorePage/ExplorePage";
import StaticContentPage from "../../static-content/StaticContentPage/StaticContentPage";

const Main = () => (
  <main>
    <div className="container">
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path={SEARCH_BASE_URL} element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path={ASSETS_BASE_URL_TOKEN}>
          <Route path={ASSETS_VOCABULARIES_URL_TOKEN} element={<VocabPage />} />
          <Route index path="*" element={<NotFound />} />
        </Route>
        <Route
          path={VALIDATE_URL}
          element={
            <StaticContentPage article="Validazione degli strumenti semantici. Funzionalità futura." />
          }
        />
        <Route
          path={CONTRIBUTING_URL}
          element={<StaticContentPage article="Come contribuire." />}
        />
      </Routes>
    </div>
  </main>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
