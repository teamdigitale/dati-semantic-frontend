import { getCategories } from "../assets/data/categories";
import { AT_TO_LABEL } from "./dataConstants";

export const typesArray = AT_TO_LABEL.map((ttl) => ({
  key: ttl.type,
  label: ttl.label
}));

export const themesArray = getCategories().map((c) => ({
  key: c.key,
  label: c.label
}));

export const filterFormatter = (filtersFromQuery, rightsHoldersArray = []) => {
  const {
    pattern,
    themes = [],
    types = [],
    rightsHolders = []
  } = filtersFromQuery;

  let formattedTypes = [];
  let formattedThemes = [];
  let formattedRightsHolders = [];
  let formattedPattern;

  formattedTypes = typesArray
    .filter((el) => types.includes(el.key))
    .map((el) => {
      return { ...el, type: "Strumento", cat: "types" };
    });

  formattedThemes = themesArray
    .filter((el) => themes.includes(el.key))
    .map((el) => {
      return { ...el, type: "Categoria", cat: "themes" };
    });
  formattedRightsHolders = rightsHoldersArray
    .filter((el) => rightsHolders.includes(el.key))
    .map((el) => {
      return { ...el, type: "Titolare", cat: "rightsHolders" };
    });

  // if (formattedTypes.length == typesArray.length)
  //   formattedTypes = [
  //     { key: "all-types", label: "Tutte", type: "Strumento", cat: "types" }
  //   ];

  // if (formattedThemes.length == themesArray.length)
  //   formattedThemes = [
  //     { key: "all-theme", label: "Tutte", type: "Categoria", cat: "themes" }
  //   ];

  // if (formattedRightsHolders.length == rightsHoldersArray.length)
  //   formattedRightsHolders = [
  //     {
  //       key: "all-rights-holder",
  //       label: "Tutti",
  //       type: "Titolari",
  //       cat: "rightsHolders"
  //     }
  //   ];

  if (pattern)
    formattedPattern = {
      key: "pattern",
      type: "Parola",
      label: pattern,
      cat: "pattern"
    };
  else formattedPattern = null;

  const filterToChips = [
    formattedPattern,
    ...formattedThemes,
    ...formattedTypes,
    ...formattedRightsHolders,
    { key: "removeAll", label: "Annulla filtri" }
  ].filter((el) => el != null);

  return filterToChips;
};
