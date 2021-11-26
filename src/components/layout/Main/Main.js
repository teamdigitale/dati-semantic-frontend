import React from "react";
import Categories from "../../Categories/Categories";
import { Route, Routes } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import SearchPage from "../../search/SearchPage/SearchPage";
import VocabPage from "../../semantic-assets/VocabPage/VocabPage";
import {
  ASSETS_BASE_URL_TOKEN,
  ASSETS_VOCABULARIES_URL_TOKEN,
  SEARCH_BASE_URL,
} from "../../../services/routes";

const Main = () => (
  <main>
    <div className="container">
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path={SEARCH_BASE_URL} element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path={ASSETS_BASE_URL_TOKEN}>
          <Route path={ASSETS_VOCABULARIES_URL_TOKEN} element={<VocabPage />} />
          <Route index path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  </main>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
