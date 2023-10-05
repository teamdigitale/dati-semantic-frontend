import React from "react";
import { node, string } from "prop-types";

const ContentParagraph = ({ title, children }) => {
  return (
    <>
      <p className="h4">{title}</p>
      <div className="content pb-3">{children}</div>
    </>
  );
};

ContentParagraph.propTypes = {
  title: string.isRequired,
  children: node,
};
ContentParagraph.defaultPropTypes = {};

export default ContentParagraph;
