import React from "react";
import { string } from "prop-types";
import Callout from "../../common/Callout/Callout";

const StaticContentPage = ({ article }) => (
  <Callout type="info" title="Pagina in costruzione">
    {article}
  </Callout>
);

StaticContentPage.propTypes = {
  article: string.isRequired,
};

StaticContentPage.defaultProps = {};

export default StaticContentPage;
