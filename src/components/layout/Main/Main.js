import React from "react";
import Categories from "../../Categories/Categories";
import { Route, Routes } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import SearchPage from "../../search/SearchPage/SearchPage";
import VocabPage from "../../semantic-assets/VocabPage/VocabPage";

const Main = () => (
  <main>
    <div className="container">
      <Routes>
        <Route index path="/" element={<Categories />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="semantic-assets">
          <Route path="vocabularies" element={<VocabPage />} />
          <Route index path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  </main>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
