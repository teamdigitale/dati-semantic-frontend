export const AT_ONTOLOGY = "ONTOLOGY";
export const AT_VOCABULARY = "CONTROLLED_VOCABULARY";
export const AT_SCHEMA = "SCHEMA";

export const AT_TO_LABEL = [
  {
    type: AT_ONTOLOGY,
    label: "Ontologia",
    chipLabel: "Ontologia",
    pluralLabel: "Ontologie",
    subTitle:
      "Rappresentazione formale, condivisa ed esplicita di una concettualizzazione di un dominio di interesse",
    buttonText: "Esplora le ontologie"
  },
  {
    type: AT_VOCABULARY,
    label: "Vocabolario controllato",
    chipLabel: "Vocabolario",
    pluralLabel: "Vocabolari controllati",
    subTitle:
      "Liste, tassonomie, glossari e tesauri dove i termini sono validati da un'autorità designata",
    buttonText: "Esplora i vocabolari controllati"
  },
  {
    type: AT_SCHEMA,
    label: "Schema",
    chipLabel: "Schema",
    pluralLabel: "Schemi Dati",
    subTitle:
      "La descrizione di insiemi di dati, per definirne la serializzazione e validarne la sintassi",
    buttonText: "Esplora gli schemi dati"
  }
];

export const SUPPORTED_ASSET_TYPES = AT_TO_LABEL.map((t2l) => t2l.type);

export function getAssetLabel(type) {
  return AT_TO_LABEL.find((sat) => sat.type === type).label;
}
export function getAssetChipLabel(type) {
  return AT_TO_LABEL.find((sat) => sat.type === type).chipLabel;
}

export function getAssetPluralLabel(type) {
  return AT_TO_LABEL.find((sat) => sat.type === type).pluralLabel;
}

export function getAssetSubTitle(type) {
  return AT_TO_LABEL.find((sat) => sat.type === type).subTitle;
}
export function getAssetButtonText(type) {
  return AT_TO_LABEL.find((sat) => sat.type === type).buttonText;
}
