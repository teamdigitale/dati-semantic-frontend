import React from "react";
import { string } from "prop-types";
import { Icon } from "design-react-kit";

const StaticContentPage = ({ article }) => (
  <div className="callout danger m-5" data-testid="StaticContentPage">
    <div className="callout-title">
      <Icon icon="it-info-circle" />
      Pagina in costruzione
    </div>
    <p>{article}</p>
  </div>
);

StaticContentPage.propTypes = {
  article: string.isRequired,
};

StaticContentPage.defaultProps = {};

export default StaticContentPage;
