import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import SearchPage from "../../search/SearchPage/SearchPage";
import AssetDetailsPage from "../../semantic-assets/DetailsPage/AssetDetailsPage";
import {
  API_DOCS_URL,
  ASSETS_BASE_URL_TOKEN,
  ASSETS_URL_TOKEN,
  FAQ_URL,
  PRIVACY_POLICY,
  PROJECT_URL,
  SEARCH_BASE_URL,
  ERROR_PAGE,
  LEGALNOTICES,
} from "../../../services/routes";
import ExplorePage from "../../explore/ExplorePage/ExplorePage";
import FaqPage from "../../static-content/faq/FaqPage/FaqPage";
import ProjectPage from "../../static-content/project/ProjectPage/ProjectPage";
import PrivacyPolicyPage from "../../static-content/privacy-policy/PrivacyPolicyPage/PrivacyPolicyPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Swagger from "../../swagger-ui/Swagger";
import PropTypes from "prop-types";
import LeaglNotices from "../../static-content/legal-notices/legalNotices";

const Main = ({ childRef }) => (
  <main id="main" ref={childRef} tabIndex={-1} role="main">
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<ExplorePage />} />
      <Route path={ERROR_PAGE} element={<ErrorPage />} />
      <Route path={LEGALNOTICES} element={<LeaglNotices />} />
      <Route path={SEARCH_BASE_URL} element={<SearchPage />} />
      <Route path={FAQ_URL} element={<FaqPage />} />
      <Route path={PROJECT_URL} element={<ProjectPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path={ASSETS_BASE_URL_TOKEN}>
        <Route path={ASSETS_URL_TOKEN} element={<AssetDetailsPage />} />
        <Route index path="*" element={<NotFound />} />
      </Route>
      <Route path={API_DOCS_URL} element={<Swagger />} />
      <Route path={PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
    </Routes>
  </main>
);

Main.propTypes = {
  childRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

Main.defaultProps = {};

export default Main;
