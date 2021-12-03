import { baseUrl } from "../assets/data/env";
import { getCategories } from "../assets/data/categories";

function getUriForTheme(theme) {
  return getCategories().find((c) => c.key === theme).uri;
}

function buildSearchParams(options) {
  const { pattern, types, themes } = options;
  const searchParams = new URLSearchParams();
  if (pattern) {
    searchParams.append("term", pattern);
  }
  types.forEach((type) => searchParams.append("type", type));

  themes.forEach((theme) =>
    searchParams.append("theme", getUriForTheme(theme))
  );
  return searchParams.toString().length > 0 ? `?${searchParams}` : "";
}

export function search(options = {}) {
  const defaultOptions = {
    pattern: "",
    types: [],
    themes: [],
  };

  options = { ...defaultOptions, ...options };

  return fetch(
    `${baseUrl()}/semantic-assets/search${buildSearchParams(options)}`
  ).then((response) => response.json());
}
