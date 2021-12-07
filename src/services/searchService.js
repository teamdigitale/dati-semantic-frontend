import { getCategories } from "../assets/data/categories";
import {
  DEFAULT_OFFSET,
  PAGE_SIZE,
} from "../components/search/Pagination/Pagination";
import { baseUrl, handleError } from "./fetchUtils";

function getUriForTheme(theme) {
  return getCategories().find((c) => c.key === theme).uri;
}

function buildSearchParams(options) {
  const { pattern, types, themes, offset } = options;
  const searchParams = new URLSearchParams();

  if (pattern) {
    searchParams.append("q", pattern);
  }
  types.forEach((type) => searchParams.append("type", type));

  themes.forEach((theme) =>
    searchParams.append("theme", getUriForTheme(theme))
  );
  if (offset) {
    searchParams.append("offset", offset);
  } else {
    searchParams.append("offset", DEFAULT_OFFSET.toString());
  }
  searchParams.append("limit", PAGE_SIZE.toString());
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

  return fetch(`${baseUrl()}/semantic-assets${buildSearchParams(options)}`)
    .then((response) => handleError(response))
    .then((response) => response.json());
}
