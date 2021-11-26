export const ASSETS_BASE_URL_TOKEN = "semantic-assets";
export const ASSETS_VOCABULARIES_URL_TOKEN = "vocabularies";

export const ASSETS_VOCABULARIES_FULL_URL = `/${ASSETS_BASE_URL_TOKEN}/${ASSETS_VOCABULARIES_URL_TOKEN}`;

export const FilterParameterNames = {
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
          .map((t) => [FilterParameterNames.type, t])
          .forEach((p) => params.push(p));
      } else {
        params.push([FilterParameterNames.type, type]);
      }
    }

    if (theme) {
      if (Array.isArray(theme)) {
        theme
          .map((t) => [FilterParameterNames.theme, t])
          .forEach((p) => params.push(p));
      } else {
        params.push([FilterParameterNames.theme, theme]);
      }
    }

    if (pattern) {
      params.push([FilterParameterNames.pattern, pattern]);
    }

    if (params.length > 0) {
      let paramString = new URLSearchParams(params).toString();
      return `/search?${paramString}`;
    } else {
      return "/search";
    }
  }
}

export const routes = new Routes();
