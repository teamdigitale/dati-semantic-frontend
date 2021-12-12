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
];

export const getLanguageLabel = (iri) => {
  return data.find((f) => f.iri === iri).label_it;
};
