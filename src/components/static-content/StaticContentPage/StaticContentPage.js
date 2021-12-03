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
      console.log("Retrieved content ", text.substr(1, 30));
      setContent(text);
    })();

    setLoadState("loaded");
  });

  return <ReactMarkdown>{content}</ReactMarkdown>;
};

StaticContentPage.propTypes = {
  article: oneOf(Object.keys(contents)),
};

StaticContentPage.defaultProps = {};

export default StaticContentPage;
