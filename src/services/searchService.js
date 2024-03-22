import { getCategories } from "../assets/data/categories";
import { ORDER_PARAMS } from "../components/search/OrderFilter/constants";
import {
  DEFAULT_OFFSET,
  PAGE_SIZE
} from "../components/search/Pagination/Pagination";
import { baseUrl, handleError } from "./fetchUtils";

function getUriForTheme(theme) {
  return getCategories().find((c) => c.key === theme).uri;
}

function buildSearchParams(options) {
  const { pattern, types, themes, offset, rightsHolders, sortBy, direction } =
    options;
  const searchParams = new URLSearchParams();

  if (pattern) {
    searchParams.append("q", pattern);
  }

  types.forEach((type) => searchParams.append("type", type));

  rightsHolders.forEach((rightsHolder) =>
    searchParams.append("rightsHolder", rightsHolder)
  );

  themes.forEach((theme) =>
    searchParams.append("theme", getUriForTheme(theme))
  );

  if (sortBy) {
    searchParams.append("sortBy", sortBy);
  }

  if (direction) {
    searchParams.append("direction", direction);
  }

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
    rightsHolders: [],
    direction: ORDER_PARAMS.ASC,
    sortBy: ORDER_PARAMS.TITLE,
    limit: PAGE_SIZE,
    offset: DEFAULT_OFFSET
  };

  options = { ...defaultOptions, ...options };

  return fetch(`${baseUrl()}/semantic-assets${buildSearchParams(options)}`)
    .then((response) => handleError(response))
    .then((response) => response.json());
}
