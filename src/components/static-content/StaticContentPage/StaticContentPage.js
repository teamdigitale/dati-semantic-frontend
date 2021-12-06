import React, { useEffect, useState } from "react";
import { oneOf } from "prop-types";
import howToContribute from "../../../markdown/contributing-to-ndc.md";
import ReactMarkdown from "react-markdown";

const contents = {
  "how-to-contribute": howToContribute,
};

const StaticContentPage = ({ article }) => {
  const [loadState, setLoadState] = useState("none");
  const [content, setContent] = useState("_loading_");

  useEffect(() => {
    if (loadState !== "none") {
      return;
    }

    setLoadState("loading");

    (async () => {
      const response = await fetch(contents[article]);
      const text = await response.text();
      setContent(text);
    })();

    setLoadState("loaded");
  });

  return (
    <div className="m-3 mt-5">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

StaticContentPage.propTypes = {
  article: oneOf(Object.keys(contents)),
};

StaticContentPage.defaultProps = {};

export default StaticContentPage;
