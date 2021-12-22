const data = [
  {
    iri: "http://publications.europa.eu/resource/authority/language/ITA",
    label_en: "Italian",
    label_it: "Italiano",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/language/ENG",
    label_en: "English",
    label_it: "Inglese",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/language/DEU",
    label_en: "German",
    label_it: "Tedesco",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/language/FRA",
    label_en: "French",
    label_it: "Francese",
  },
];

export const getLanguageLabel = (iri) => {
  const lang = data.find((f) => f.iri === iri);
  return lang ? lang.label_it : iri.split("/").pop();
};
