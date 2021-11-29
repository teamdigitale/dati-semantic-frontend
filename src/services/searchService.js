import { baseUrl } from "../assets/data/env";

export function search(options = {}) {
  const defaultOptions = {
    pattern: "",
    type: "*",
    theme: "*",
  };

  options = { ...defaultOptions, ...options };

  function getSearchPattern() {
    const pattern = options.pattern ? options.pattern : "";
    return encodeURI(pattern);
  }

  return fetch(
    `${baseUrl()}/semantic-assets/search?term=${getSearchPattern()}`
  ).then((response) => response.json());
}
