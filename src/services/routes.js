export const ASSETS_BASE_URL_TOKEN = "semantic-assets";
export const ASSETS_VOCABULARIES_URL_TOKEN = "vocabularies";

export const ASSETS_VOCABULARIES_FULL_URL = `/${ASSETS_BASE_URL_TOKEN}/${ASSETS_VOCABULARIES_URL_TOKEN}`;

export const SEARCH_BASE_URL = "search";
export const EXPLORE_BASE_URL = "explore";
export const VALIDATE_URL = "validate";
export const CONTRIBUTING_URL = "how-to-contribute";

export const SearchParameterNames = {
  type: "type",
  theme: "theme",
  pattern: "pattern",
};

class Routes {
  search(filters = {}) {
    const defaultFilters = { types: [], themes: [], pattern: "" };
    const { types, themes, pattern } = { ...defaultFilters, ...filters };

    const params = [];
    if (types) {
      types
        .map((t) => [SearchParameterNames.type, t])
        .forEach((p) => params.push(p));
    }

    if (themes) {
      themes
        .map((t) => [SearchParameterNames.theme, t])
        .forEach((p) => params.push(p));
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

  searchUrlToFilter(search) {
    let result = {};
    const params = new URLSearchParams(search);
    if (params.has("type")) {
      result = { ...result, ["types"]: params.getAll("type") };
    }
    if (params.has("theme")) {
      result = { ...result, ["themes"]: params.getAll("theme") };
    }
    if (params.has("pattern")) {
      result = { ...result, pattern: params.get("pattern") };
    }
    return result;
  }

  validate() {
    return "/" + VALIDATE_URL;
  }

  howToContribute() {
    return "/" + CONTRIBUTING_URL;
  }

  explore() {
    return "/";
  }
}

export const routes = new Routes();
