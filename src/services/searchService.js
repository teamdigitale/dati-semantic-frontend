import { baseUrl } from "../assets/data/env";
import { getCategories } from "../assets/data/categories";
import {
  DEFAULT_OFFSET,
  PAGE_SIZE,
} from "../components/search/Pagination/Pagination";

function getUriForTheme(theme) {
  return getCategories().find((c) => c.key === theme).uri;
}

function buildSearchParams(options) {
  const { pattern, types, themes, limit, offset } = options;
  const searchParams = new URLSearchParams();

  if (pattern) {
    searchParams.append("q", pattern);
  }
  types.forEach((type) => searchParams.append("type", type));

  themes.forEach((theme) =>
    searchParams.append("theme", getUriForTheme(theme))
  );
  if (offset > 0) {
    searchParams.append("offset", offset);
  }
  if (limit && limit !== 10) {
    searchParams.append("limit", limit);
  }
  return searchParams.toString().length > 0 ? `?${searchParams}` : "";
}

export function search(options = {}) {
  const defaultOptions = {
    pattern: "",
    types: [],
    themes: [],
    limit: PAGE_SIZE,
    offset: DEFAULT_OFFSET,
  };

  options = { ...defaultOptions, ...options };

  return fetch(
    `${baseUrl()}/semantic-assets${buildSearchParams(options)}`
  ).then((response) => response.json());
}
