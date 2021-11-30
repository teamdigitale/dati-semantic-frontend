const frequencies = [
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/OTHER",
    label_en: "Other",
    label_it: "Altro",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/WEEKLY",
    label_en: "Weekly",
    label_it: "Settimanale",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/ANNUAL",
    label_en: "Annual",
    label_it: "Annuale",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/ANNUAL_2",
    label_en: "Semiannual",
    label_it: "Semestrale",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/ANNUAL_3",
    label_en: "Three times a year",
    label_it: "Tre volte all'anno",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/BIENNIAL",
    label_en: "Biennial",
    label_it: "Biennale",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/BIMONTHLY",
    label_en: "Bimonthly",
    label_it: "Bimestrale",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/BIWEEKLY",
    label_en: "Biweekly",
    label_it: "Quindicinale",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/CONT",
    label_en: "Continuous",
    label_it: "Continuo",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/DAILY",
    label_en: "Daily",
    label_it: "Quotidiano",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/DAILY_2",
    label_en: "Twice a day",
    label_it: "Due volte al giorno",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/IRREG",
    label_en: "Irregular",
    label_it: "Irregolare",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/MONTHLY",
    label_en: "Monthly",
    label_it: "Mensile",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/MONTHLY_2",
    label_en: "Semimonthly",
    label_it: "Bimensile",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/MONTHLY_3",
    label_en: "Three times a month",
    label_it: "Tre volte al mese",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/NEVER",
    label_en: "Never",
    label_it: "Mai",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/OP_DATPRO",
    label_en: "Provisional data",
    label_it: "Dati provvisori",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/QUARTERLY",
    label_en: "Quarterly",
    label_it: "Trimestrale",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/TRIENNIAL",
    label_en: "Triennial",
    label_it: "Triennale",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/UNKNOWN",
    label_en: "Unknown",
    label_it: "Sconosciuto",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/UPDATE_CONT",
    label_en: "Continuously updated",
    label_it: "In continuo aggiornamento",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/WEEKLY_2",
    label_en: "Semiweekly",
    label_it: "Bisettimanale",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/WEEKLY_3",
    label_en: "Three times a week",
    label_it: "Tre volte a settimana",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/QUINQUENNIAL",
    label_en: "Quinquennial",
    label_it: "Ogni cinque anni",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/DECENNIAL",
    label_en: "Decennial",
    label_it: "Decennale",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/HOURLY",
    label_en: "Hourly",
    label_it: "Ogni ora",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/QUADRENNIAL",
    label_en: "Quadrennial",
    label_it: "Ogni quattro anni",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/BIHOURLY",
    label_en: "Bihourly",
    label_it: "Ogni due ore",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/TRIHOURLY",
    label_en: "Trihourly",
    label_it: "Ogni tre ore",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/BIDECENNIAL",
    label_en: "Bidecennial",
    label_it: "Bidecennale",
  },
  {
    iri: "http://publications.europa.eu/resource/authority/frequency/TRIDECENNIAL",
    label_en: "Tridecennial",
    label_it: "Tridecennale",
  },
];

export function getFrequencies() {
  return frequencies;
}

export function getFrequencyLabel(iri) {
  return frequencies.find((f) => f.iri === iri).label_it;
}
