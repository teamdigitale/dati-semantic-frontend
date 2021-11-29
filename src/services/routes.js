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

  searchUrlToFilter(search) {
    let result = {};
    const params = new URLSearchParams(search);
    const appendToFilterObject = (key) => {
      if (params.has(key)) {
        const values = params.getAll(key);
        if (values.length === 0) {
          return;
        }
        if (values.length === 1) {
          result = { ...result, [key]: values[0] };
        } else {
          result = { ...result, [key]: values };
        }
      }
    };

    appendToFilterObject("type");
    appendToFilterObject("theme");
    appendToFilterObject("pattern");
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
