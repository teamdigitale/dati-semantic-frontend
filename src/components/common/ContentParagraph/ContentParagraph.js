import React from "react";
import { node, string } from "prop-types";

const ContentParagraph = ({ id, title, children }) => {
  return (
    <>
      <h4 id={id}>{title}</h4>
      <div className="content pb-3">{children}</div>
    </>
  );
};

ContentParagraph.propTypes = {
  id: string,
  title: string,
  children: node,
};
ContentParagraph.defaultPropTypes = {};

export default ContentParagraph;
