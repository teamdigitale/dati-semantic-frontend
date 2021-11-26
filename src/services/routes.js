export const ASSETS_BASE_URL_TOKEN = "semantic-assets";
export const ASSETS_VOCABULARIES_URL_TOKEN = "vocabularies";

export const ASSETS_VOCABULARIES_FULL_URL = `/${ASSETS_BASE_URL_TOKEN}/${ASSETS_VOCABULARIES_URL_TOKEN}`;

export const SEARCH_BASE_URL = "search";
export const EXPLORE_BASE_URL = "explore";

export const SearchParameterNames = {
  type: "type",
  theme: "theme",
  pattern: "pattern",
};

class Routes {
  search(filters = {}) {
    const defaultFilters = { type: "", theme: "", pattern: "" };
    const { type, theme, pattern } = { ...defaultFilters, ...filters };

    const params = [];
    if (type) {
      if (Array.isArray(type)) {
        type
          .map((t) => [SearchParameterNames.type, t])
          .forEach((p) => params.push(p));
      } else {
        params.push([SearchParameterNames.type, type]);
      }
    }

    if (theme) {
      if (Array.isArray(theme)) {
        theme
          .map((t) => [SearchParameterNames.theme, t])
          .forEach((p) => params.push(p));
      } else {
        params.push([SearchParameterNames.theme, theme]);
      }
    }

    if (pattern) {
      params.push([SearchParameterNames.pattern, pattern]);
    }

    if (params.length > 0) {
      let paramString = new URLSearchParams(params).toString();
      return `/${SEARCH_BASE_URL}?${paramString}`;
    } else {
      return "/" + SEARCH_BASE_URL;
    }
  }

  validate() {
    return "/validate";
  }

  howToContribute() {
    return "/how-to-contribute";
  }

  explore() {
    return "/";
  }
}

export const routes = new Routes();
