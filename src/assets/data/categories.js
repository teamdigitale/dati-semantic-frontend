const themeData = [
  {
    country_code: "AGRI",
    deprecated: "false",
    key: "AGRI",
    label_en: "Agriculture, fisheries, forestry and food",
    label_it: "Agricoltura, pesca, silvicoltura e prodotti alimentari",
    url: "http://publications.europa.eu/resource/authority/data-theme/AGRI",
    valid_from: "2015-10-01"
  },
  {
    country_code: "ECON",
    deprecated: "false",
    key: "ECON",
    label_en: "Economy and finance",
    label_it: "Economia e finanze",
    url: "http://publications.europa.eu/resource/authority/data-theme/ECON",
    valid_from: "2015-10-01"
  },
  {
    country_code: "EDUC",
    deprecated: "false",
    key: "EDUC",
    label_en: "Education, culture and sport",
    label_it: "Istruzione, cultura e sport",
    url: "http://publications.europa.eu/resource/authority/data-theme/EDUC",
    valid_from: "2015-10-01"
  },
  {
    country_code: "ENER",
    deprecated: "false",
    key: "ENER",
    label_en: "Energy",
    label_it: "Energia",
    url: "http://publications.europa.eu/resource/authority/data-theme/ENER",
    valid_from: "2015-10-01"
  },
  {
    country_code: "ENVI",
    deprecated: "false",
    key: "ENVI",
    label_en: "Environment",
    label_it: "Ambiente",
    url: "http://publications.europa.eu/resource/authority/data-theme/ENVI",
    valid_from: "2015-10-01"
  },
  {
    country_code: "GOVE",
    deprecated: "false",
    key: "GOVE",
    label_en: "Government and public sector",
    label_it: "Governo e settore pubblico",
    url: "http://publications.europa.eu/resource/authority/data-theme/GOVE",
    valid_from: "2015-10-01"
  },
  {
    country_code: "HEAL",
    deprecated: "false",
    key: "HEAL",
    label_en: "Health",
    label_it: "Salute",
    url: "http://publications.europa.eu/resource/authority/data-theme/HEAL",
    valid_from: "2015-10-01"
  },
  {
    country_code: "INTR",
    deprecated: "false",
    key: "INTR",
    label_en: "International issues",
    label_it: "Tematiche internazionali",
    url: "http://publications.europa.eu/resource/authority/data-theme/INTR",
    valid_from: "2015-10-01"
  },
  {
    country_code: "JUST",
    deprecated: "false",
    key: "JUST",
    label_en: "Justice, legal system and public safety",
    label_it: "Giustizia, sistema giuridico e sicurezza pubblica",
    url: "http://publications.europa.eu/resource/authority/data-theme/JUST",
    valid_from: "2015-10-01"
  },
  {
    country_code: "OP_DATPRO",
    deprecated: null,
    key: "OP_DATPRO",
    label_en: "Provisional data",
    label_it: "Dati provvisori",
    url: "http://publications.europa.eu/resource/authority/data-theme/OP_DATPRO",
    valid_from: null
  },
  {
    country_code: "REGI",
    deprecated: "false",
    key: "REGI",
    label_en: "Regions and cities",
    label_it: "Regioni e citt\u00e0",
    url: "http://publications.europa.eu/resource/authority/data-theme/REGI",
    valid_from: "2015-10-01"
  },
  {
    country_code: "SOCI",
    deprecated: "false",
    key: "SOCI",
    label_en: "Population and society",
    label_it: "Popolazione e societ\u00e0",
    url: "http://publications.europa.eu/resource/authority/data-theme/SOCI",
    valid_from: "2015-10-01"
  },
  {
    country_code: "TECH",
    deprecated: "false",
    key: "TECH",
    label_en: "Science and technology",
    label_it: "Scienza e tecnologia",
    url: "http://publications.europa.eu/resource/authority/data-theme/TECH",
    valid_from: "2015-10-01"
  },
  {
    country_code: "TRAN",
    deprecated: "false",
    key: "TRAN",
    label_en: "Transport",
    label_it: "Trasporti",
    url: "http://publications.europa.eu/resource/authority/data-theme/TRAN",
    valid_from: "2015-10-01"
  }
];

export function getCategories() {
  return themeData
    .filter((t) => t.key !== "OP_DATPRO")
    .map((t) => {
      return {
        key: t.key,
        idleImg: t.key.toLowerCase() + ".png",
        hoverImg: t.key.toLowerCase() + "-hover.png",
        label: t.label_it,
        uri: t.url
      };
    });
}
